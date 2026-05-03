export type Stage = "egg" | "hatchling" | "drake" | "dragon";
export type Mood = "idle" | "happy" | "hungry" | "sad" | "sleeping";
export type PetType =
  | "dragon"
  | "penguin"
  | "kitty"
  | "puppy"
  | "turtle"
  | "otter"
  | "walrus"
  | "seal"
  | "bearcub"
  | "frieren"
  | "parrot";

export interface PetState {
  name: string;
  created_at: string;
  last_update: string;
  hunger: number;
  happiness: number;
  energy: number;
  xp: number;
  stage: Stage;
  mood: Mood;
  interactions: number;
  last_fed: string;
  last_petted: string;
  last_played: string;
  last_slept: string;
  last_wake: string;
}

export const PET_CONFIGS: Record<PetType, { name: string; emoji: string }> = {
  dragon: { name: "Dragon", emoji: "🐉" },
  penguin: { name: "Penguin", emoji: "🐧" },
  kitty: { name: "Kitty", emoji: "🐱" },
  puppy: { name: "Puppy", emoji: "🐶" },
  turtle: { name: "Turtle", emoji: "🐢" },
  otter: { name: "Otter", emoji: "🦦" },
  walrus: { name: "Walrus", emoji: "🦭" },
  seal: { name: "Seal", emoji: "🦭" },
  bearcub: { name: "Bear Cub", emoji: "🐻" },
  frieren: { name: "Frieren", emoji: "🧝" },
  parrot: { name: "Parrot", emoji: "🦜" },
};

export const EVOLUTION_THRESHOLDS: Record<Stage, number> = {
  egg: 0,
  hatchling: 50,
  drake: 200,
  dragon: 500,
};

export const STAGE_ORDER: Stage[] = ["egg", "hatchling", "drake", "dragon"];

export const COOLDOWNS: Record<string, number> = {
  pet: 30,
  play: 60,
  feed: 20,
  sleep: 10,
  wake: 10,
};

function getStorageKey(petType: PetType): string {
  return `pet_state_${petType}`;
}

export function defaultState(): PetState {
  const now = new Date().toISOString();
  return {
    name: "Companion",
    created_at: now,
    last_update: now,
    hunger: 80,
    happiness: 80,
    energy: 100,
    xp: 0,
    stage: "egg",
    mood: "idle",
    last_fed: now,
    last_petted: now,
    last_played: now,
    last_slept: now,
    last_wake: now,
    interactions: 0,
  };
}

export function loadState(petType: PetType): PetState {
  try {
    const key = getStorageKey(petType);
    const stored = localStorage.getItem(key);
    if (stored) {
      return JSON.parse(stored);
    }
    if (petType === "dragon") {
      const oldStored = localStorage.getItem("pet_state");
      if (oldStored) {
        const state = JSON.parse(oldStored);
        if (!state.last_slept) state.last_slept = state.created_at;
        if (!state.last_wake) state.last_wake = state.created_at;
        saveState(state, petType);
        localStorage.removeItem("pet_state");
        return state;
      }
    }
  } catch (e) {
    console.error("Failed to load state:", e);
  }
  return defaultState();
}

export function saveState(state: PetState, petType: PetType): void {
  try {
    const key = getStorageKey(petType);
    localStorage.setItem(key, JSON.stringify(state));
  } catch (e) {
    console.error("Failed to save state:", e);
  }
}

function deriveMoodFromStats(state: PetState): Mood {
  if (state.energy < 20) return "sleeping";
  if (state.hunger < 30) return "hungry";
  if (state.happiness < 30) return "sad";
  if (state.happiness > 80) return "happy";
  return "idle";
}

export function applyDecay(state: PetState): PetState {
  const now = new Date();
  const last = new Date(state.last_update);
  const elapsed = (now.getTime() - last.getTime()) / 1000;

  const sleeping = state.mood === "sleeping";

  if (sleeping) {
    state.energy = Math.min(100, state.energy + (elapsed * 16) / 3600);
    if (state.energy >= 100) {
      state.energy = 100;
    }
  } else {
    state.energy = Math.max(0, state.energy - (elapsed * 4) / 3600);
  }

  state.hunger = Math.max(0, state.hunger - (elapsed * 5) / 3600);
  state.happiness = Math.max(0, state.happiness - (elapsed * 3) / 3600);
  state.last_update = now.toISOString();
  state.mood = sleeping && state.energy < 100 ? "sleeping" : deriveMoodFromStats(state);

  return state;
}

export function checkCooldown(
  state: PetState,
  action: "pet" | "play" | "feed" | "sleep" | "wake"
): number | null {
  let last: Date;
  if (action === "pet") {
    last = new Date(state.last_petted);
  } else if (action === "play") {
    last = new Date(state.last_played);
  } else if (action === "feed") {
    last = new Date(state.last_fed);
  } else if (action === "sleep") {
    last = new Date(state.last_slept);
  } else if (action === "wake") {
    last = new Date(state.last_wake);
  } else {
    return null;
  }

  const elapsed = (new Date().getTime() - last.getTime()) / 1000;
  const remaining = COOLDOWNS[action] - elapsed;
  return remaining > 0 ? Math.ceil(remaining) : null;
}

export interface ActionResult {
  hunger_before?: number;
  hunger_after?: number;
  happiness_before?: number;
  happiness_after?: number;
  energy_before?: number;
  energy_after?: number;
  old_name?: string;
}

export function applyAction(state: PetState, action: string, name?: string): ActionResult {
  const now = new Date().toISOString();
  const result: ActionResult = {};

  if (action === "feed") {
    result.hunger_before = state.hunger;
    state.hunger = Math.min(100, state.hunger + 30);
    result.hunger_after = state.hunger;
    state.happiness = Math.min(100, state.happiness + 5);
    state.xp += 5;
    state.last_fed = now;
    state.interactions += 1;
  } else if (action === "pet") {
    result.happiness_before = state.happiness;
    state.happiness = Math.min(100, state.happiness + 10);
    result.happiness_after = state.happiness;
    state.xp += 2;
    state.last_petted = now;
    state.interactions += 1;
  } else if (action === "play") {
    result.happiness_before = state.happiness;
    result.hunger_before = state.hunger;
    result.energy_before = state.energy;
    state.happiness = Math.min(100, state.happiness + 20);
    state.hunger = Math.max(0, state.hunger - 10);
    state.energy = Math.max(0, state.energy - 5);
    result.happiness_after = state.happiness;
    result.hunger_after = state.hunger;
    result.energy_after = state.energy;
    state.xp += 10;
    state.last_played = now;
    state.interactions += 1;
  } else if (action === "sleep") {
    state.mood = "sleeping";
    state.last_slept = now;
    state.interactions += 1;
  } else if (action === "wake") {
    state.mood = deriveMoodFromStats(state);
    state.last_wake = now;
    state.interactions += 1;
  } else if (action === "rename") {
    result.old_name = state.name;
    state.name = name || state.name;
  }

  return result;
}

export function checkEvolution(state: PetState): PetState {
  const currentIdx = STAGE_ORDER.indexOf(state.stage);
  for (let i = currentIdx + 1; i < STAGE_ORDER.length; i++) {
    const nextStage = STAGE_ORDER[i];
    if (state.xp >= EVOLUTION_THRESHOLDS[nextStage]) {
      state.stage = nextStage;
    } else {
      break;
    }
  }
  return state;
}

export function getAgeString(state: PetState): string {
  const created = new Date(state.created_at);
  const now = new Date();
  const delta = now.getTime() - created.getTime();

  const days = Math.floor(delta / (1000 * 60 * 60 * 24));
  const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));

  if (days > 0) {
    return `${days} day${days !== 1 ? "s" : ""}, ${hours}h`;
  }
  if (hours > 0) {
    return `${hours}h ${mins}m`;
  }
  return `${mins}m`;
}

export function getTimeAgo(timestamp: string): string {
  const dt = new Date(timestamp);
  const now = new Date();
  const elapsed = (now.getTime() - dt.getTime()) / 1000;

  if (elapsed < 60) {
    return `${Math.floor(elapsed)}s ago`;
  } else if (elapsed < 3600) {
    return `${Math.floor(elapsed / 60)}m ago`;
  } else if (elapsed < 86400) {
    return `${Math.floor(elapsed / 3600)}h ago`;
  }
  return `${Math.floor(elapsed / 86400)}d ago`;
}
