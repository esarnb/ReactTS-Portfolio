// @ts-nocheck
import { useState, useEffect, useRef } from "react";
import {
  Button,
  Group,
  Progress,
  Text,
  Badge,
  TextInput,
  Stack,
  Switch,
} from "@mantine/core";
import {
  PetState,
  PetType,
  PET_CONFIGS,
  loadState,
  saveState,
  applyDecay,
  checkEvolution,
  applyAction,
  checkCooldown,
  getAgeString,
  getTimeAgo,
  STAGE_ORDER,
  EVOLUTION_THRESHOLDS,
} from "../../components/Pet/PetState";
import { PetDisplay } from "../../components/Pet/PetDisplay";
import { SyncConflictModal } from "../../components/Pet/SyncConflictModal";
import { LoginModal } from "../../components/Pet/LoginModal";
import { useAutosave } from "../../hooks/useAutosave";
import { syncService, SyncConflict } from "../../services/syncService";
import { authService } from "../../services/authService";
import "./Pet.css";

const MOOD_EMOJI: Record<string, string> = {
  idle: "😐",
  happy: "😊",
  hungry: "😫",
  sad: "😢",
  sleeping: "😴",
};

export default function Pet() {
  const [userId, setUserId] = useState<string | null>(() =>
    authService.getCurrentUser()
  );
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [pendingLogin, setPendingLogin] = useState<{
    username: string;
    serverData: PetState | null;
  } | null>(null);

  const [petType, setPetType] = useState<PetType>(() => {
    return (localStorage.getItem("active_pet") as PetType) || "dragon";
  });

  const [state, setState] = useState<PetState>(() => {
    const s = loadState(petType, userId);
    applyDecay(s);
    checkEvolution(s);
    saveState(s, petType, userId);
    return s;
  });

  const [message, setMessage] = useState("");
  const [renaming, setRenaming] = useState(false);
  const [newName, setNewName] = useState(state.name);
  const [syncConflict, setSyncConflict] = useState<SyncConflict | null>(null);
  const [syncLoading, setSyncLoading] = useState(false);
  const [autosaveEnabled, setAutosaveEnabled] = useState(() =>
    syncService.isAutosaveEnabled()
  );
  const messageTimeoutRef = useRef<NodeJS.Timeout>();

  const getStatColor = (value: number) => {
    if (value >= 70) return "green";
    if (value >= 30) return "yellow";
    return "red";
  };

  const showMessage = (msg: string) => {
    setMessage(msg);
    if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);
    messageTimeoutRef.current = setTimeout(() => setMessage(""), 3000);
  };

  // Autosave hook
  useAutosave({
    userId,
    petType,
    state,
    onConflict: setSyncConflict,
    onSyncSuccess: () => {
      // Optional: show brief sync success message
    },
    onSyncError: (error) => {
      console.error("Sync error:", error);
      // Don't show error to user for network issues (just silently fail)
    },
  });

  // Load pet state when userId changes (account switch)
  useEffect(() => {
    if (userId) {
      const s = loadState(petType, userId);
      applyDecay(s);
      checkEvolution(s);
      saveState(s, petType, userId);
      setState(s);
    }
  }, [userId]);

  // Main game tick loop
  useEffect(() => {
    const interval = setInterval(() => {
      setState((prevState) => {
        const updated = { ...prevState };
        applyDecay(updated);
        checkEvolution(updated);
        saveState(updated, petType, userId);
        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [petType, userId]);

  const handleSwitchPet = (newType: PetType) => {
    saveState(state, petType);
    const newState = loadState(newType);
    applyDecay(newState);
    checkEvolution(newState);
    saveState(newState, newType);
    setState(newState);
    setPetType(newType);
    setNewName(newState.name);
    localStorage.setItem("active_pet", newType);
  };

  const handleKeepLocal = async () => {
    if (!syncConflict) return;
    setSyncLoading(true);
    try {
      await syncService.forceSyncPet({
        userId,
        petType: syncConflict.petType,
        state: syncConflict.localState,
        lastUpdatedUnix: syncConflict.localTimestamp + 1,
        force: true,
      });
      setSyncConflict(null);
      showMessage("✅ Local data saved to cloud");
    } catch (error) {
      console.error("Failed to force sync:", error);
      showMessage("❌ Failed to save to cloud");
    } finally {
      setSyncLoading(false);
    }
  };

  const handleDownloadCloud = () => {
    if (!syncConflict) return;
    // Update local state with cloud data
    applyDecay(syncConflict.cloudState);
    saveState(syncConflict.cloudState, syncConflict.petType);
    setState(syncConflict.cloudState);
    setSyncConflict(null);
    showMessage("📥 Cloud data loaded");
  };

  const handleAutosaveToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enabled = event.currentTarget.checked;
    setAutosaveEnabled(enabled);
    syncService.setAutosaveEnabled(enabled);
    showMessage(enabled ? "☁️ Autosave enabled" : "⚙️ Autosave disabled");
  };

  const handleLogin = async (username: string) => {
    authService.setCurrentUser(username);
    try {
      const cloudData = await syncService.getCloudData(petType, username);
      console.log(`[Login] Checking server data for ${username}:`, cloudData);

      if (cloudData?.state) {
        const cloudState = cloudData.state;
        const localState = state;

        console.log(`[Login] Local state:`, localState);
        console.log(`[Login] Server state:`, cloudState);

        // Check if data differs (server has different data than local)
        const dataMatches =
          cloudState.xp === localState.xp &&
          cloudState.hunger === localState.hunger &&
          cloudState.happiness === localState.happiness &&
          cloudState.energy === localState.energy &&
          cloudState.name === localState.name &&
          cloudState.stage === localState.stage &&
          cloudState.interactions === localState.interactions;

        console.log(`[Login] Data matches:`, dataMatches);

        // Always show conflict if data differs (server has any data at all)
        if (!dataMatches) {
          console.log(
            `[Login] Conflict detected: showing modal for conflict resolution`
          );
          setPendingLogin({ username, serverData: cloudState });
          return;
        }
      }

      console.log(`[Login] No conflict: proceeding with login`);
      setUserId(username);
      setLoginModalOpen(false);
    } catch (error) {
      console.error("[Login] Error checking server data:", error);
      setUserId(username);
      setLoginModalOpen(false);
    }
  };

  const handleLoginImportServer = () => {
    if (!pendingLogin) return;
    const cloudState = pendingLogin.serverData;
    const newUserId = pendingLogin.username;
    if (cloudState) {
      applyDecay(cloudState);
      saveState(cloudState, petType, newUserId);
      setState(cloudState);
    }
    setUserId(newUserId);
    setPendingLogin(null);
    setLoginModalOpen(false);
    showMessage("📥 Imported server data");
  };

  const handleLoginOverwriteServer = () => {
    if (!pendingLogin) return;
    setUserId(pendingLogin.username);
    setPendingLogin(null);
    setLoginModalOpen(false);
    showMessage("☁️ Local data will be synced to server");
  };

  // Derive cooldowns from state (no separate interval needed)
  const petCooldown = checkCooldown(state, "pet") || 0;
  const playCooldown = checkCooldown(state, "play") || 0;
  const feedCooldown = checkCooldown(state, "feed") || 0;
  const sleepCooldown = checkCooldown(state, "sleep") || 0;
  const wakeCooldown = checkCooldown(state, "wake") || 0;

  const handleFeed = () => {
    const remaining = checkCooldown(state, "feed");
    if (remaining) {
      showMessage(`⏱️  ${state.name} is still full (${remaining}s)`);
      return;
    }
    setState((prev) => {
      const updated = { ...prev };
      const oldStage = updated.stage;
      applyAction(updated, "feed");
      checkEvolution(updated);
      saveState(updated, petType);
      showMessage(`🍖 ${updated.name} is munching! +30 hunger, +5 xp`);
      if (updated.stage !== oldStage) {
        showMessage(
          `⭐ ${updated.name} evolved into ${updated.stage.toUpperCase()}!`
        );
      }
      return updated;
    });
  };

  const handlePet = () => {
    const remaining = checkCooldown(state, "pet");
    if (remaining) {
      showMessage(
        `⏱️  ${state.name} is still enjoying the last pet (${remaining}s left)`
      );
      return;
    }
    setState((prev) => {
      const updated = { ...prev };
      const oldStage = updated.stage;
      applyAction(updated, "pet");
      checkEvolution(updated);
      saveState(updated, petType);
      showMessage(`👋 ${updated.name} enjoyed that! +10 happiness, +2 xp`);
      if (updated.stage !== oldStage) {
        showMessage(
          `⭐ ${updated.name} evolved into ${updated.stage.toUpperCase()}!`
        );
      }
      return updated;
    });
  };

  const handlePlay = () => {
    const remaining = checkCooldown(state, "play");
    if (remaining) {
      showMessage(
        `⏱️  ${state.name} needs a rest before playing again (${remaining}s left)`
      );
      return;
    }
    setState((prev) => {
      const updated = { ...prev };
      const oldStage = updated.stage;
      applyAction(updated, "play");
      checkEvolution(updated);
      saveState(updated, petType);
      showMessage(
        `🎮 ${updated.name} had fun! +20 happiness, -10 hunger, -5 energy, +10 xp`
      );
      if (updated.stage !== oldStage) {
        showMessage(
          `⭐ ${updated.name} evolved into ${updated.stage.toUpperCase()}!`
        );
      }
      return updated;
    });
  };

  const handleSleep = () => {
    const remaining = checkCooldown(state, "sleep");
    if (remaining) {
      showMessage(`⏱️  Wait ${remaining}s before changing sleep state`);
      return;
    }
    setState((prev) => {
      const updated = { ...prev };
      applyAction(updated, "sleep");
      saveState(updated, petType);
      showMessage(`😴 ${updated.name} is now sleeping`);
      return updated;
    });
  };

  const handleWake = () => {
    const remaining = checkCooldown(state, "wake");
    if (remaining) {
      showMessage(`⏱️  Wait ${remaining}s before changing sleep state`);
      return;
    }
    setState((prev) => {
      const updated = { ...prev };
      applyAction(updated, "wake");
      saveState(updated, petType);
      showMessage(`🌅 ${updated.name} woke up refreshed!`);
      return updated;
    });
  };

  const handleRename = () => {
    if (!newName.trim()) {
      showMessage("Name cannot be empty!");
      return;
    }
    setState((prev) => {
      const updated = { ...prev };
      const old = updated.name;
      applyAction(updated, "rename", newName.trim());
      saveState(updated, petType);
      showMessage(`✏️  Renamed from ${old} to ${newName.trim()}!`);
      setRenaming(false);
      return updated;
    });
  };

  const idx = STAGE_ORDER.indexOf(state.stage);
  let xpDisplay = `${state.xp} xp`;
  if (idx + 1 < STAGE_ORDER.length) {
    const nextStage = STAGE_ORDER[idx + 1];
    const nextXp = EVOLUTION_THRESHOLDS[nextStage];
    xpDisplay = `${state.xp} / ${nextXp} xp → ${nextStage.toUpperCase()}`;
  } else {
    xpDisplay = `${state.xp} xp ⭐ MAXED!`;
  }

  if (userId === null && !pendingLogin) {
    return <LoginModal mode="initial" onLogin={handleLogin} />;
  }

  if (pendingLogin) {
    return (
      <SyncConflictModal
        conflict={{
          petType,
          localState: state,
          cloudState: pendingLogin.serverData!,
          localTimestamp: Math.floor(Date.now() / 1000),
          cloudTimestamp: Math.floor(Date.now() / 1000),
        }}
        loading={false}
        onKeepLocal={handleLoginOverwriteServer}
        onDownloadCloud={handleLoginImportServer}
      />
    );
  }

  return (
    <div className="pet-container">
      <Stack gap="md" align="center">
        {/* Autosave Toggle and Account Switcher */}
        <Group justify="center" gap="md">
          <Switch
            label="Cloud Sync"
            checked={autosaveEnabled}
            onChange={handleAutosaveToggle}
            size="sm"
          />
          <Group gap="xs">
            <Text size="sm" c="dimmed">
              👤 {userId}
            </Text>
            <Button
              size="xs"
              variant="subtle"
              onClick={() => setLoginModalOpen(true)}
            >
              Switch
            </Button>
          </Group>
        </Group>

        {/* Pet Switcher */}
        <div className="pet-switcher">
          {(Object.entries(PET_CONFIGS) as [PetType, (typeof PET_CONFIGS)[PetType]][]).map(
            ([type, cfg]) => (
              <button
                key={type}
                className={`pet-switch-btn ${petType === type ? "active" : ""}`}
                onClick={() => handleSwitchPet(type)}
                title={cfg.name}
              >
                <span className="pet-switch-emoji">{cfg.emoji}</span>
                <span className="pet-switch-name">{cfg.name}</span>
              </button>
            )
          )}
        </div>

        {/* Sprite */}
        <div className="pet-sprite-wrapper">
          <PetDisplay petType={petType} mood={state.mood} stage={state.stage} size={120} />
        </div>

        {/* Header Info */}
        <div className="pet-header">
          <Group justify="center" gap="xs">
            <Text fw={600} size="lg">
              {state.name}
            </Text>
            {petType === "dragon" && (
              <Badge variant="dot" color="cyan">
                {state.stage.toUpperCase()}
              </Badge>
            )}
            <Text size="sm" c="dimmed">
              Age: {getAgeString(state)}
            </Text>
          </Group>
          <Text size="sm" ta="center">
            {MOOD_EMOJI[state.mood] || ""} {state.mood.toUpperCase()}
          </Text>
        </div>

        {/* Stats */}
        <div className="pet-stats">
          <div className="stat-row">
            <Text size="sm" fw={500} style={{ minWidth: 90 }}>
              Hunger
            </Text>
            <div style={{ flex: 1, marginRight: 10 }}>
              <Progress
                value={state.hunger}
                color={getStatColor(state.hunger)}
                size="sm"
              />
            </div>
            <Text size="sm" c="dimmed" style={{ minWidth: 45, textAlign: "right" }}>
              {Math.floor(state.hunger)}%
            </Text>
          </div>

          <div className="stat-row">
            <Text size="sm" fw={500} style={{ minWidth: 90 }}>
              Happiness
            </Text>
            <div style={{ flex: 1, marginRight: 10 }}>
              <Progress
                value={state.happiness}
                color={getStatColor(state.happiness)}
                size="sm"
              />
            </div>
            <Text size="sm" c="dimmed" style={{ minWidth: 45, textAlign: "right" }}>
              {Math.floor(state.happiness)}%
            </Text>
          </div>

          <div className="stat-row">
            <Text size="sm" fw={500} style={{ minWidth: 90 }}>
              Energy
            </Text>
            <div style={{ flex: 1, marginRight: 10 }}>
              <Progress
                value={state.energy}
                color={getStatColor(state.energy)}
                size="sm"
              />
            </div>
            <Text size="sm" c="dimmed" style={{ minWidth: 45, textAlign: "right" }}>
              {Math.floor(state.energy)}%
            </Text>
          </div>
        </div>

        {/* XP Section */}
        <div className="pet-xp">
          <Text size="sm" fw={500}>
            {xpDisplay}
          </Text>
          <Text size="xs" c="dimmed">
            Interactions: {state.interactions}
          </Text>
        </div>

        {/* Actions */}
        <div className="pet-actions">
          <Button
            size="sm"
            variant="default"
            onClick={handleFeed}
            disabled={feedCooldown > 0}
            className="pet-action-btn"
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
              <span>🍖 Feed</span>
              <span style={{ fontSize: "0.65rem", opacity: feedCooldown > 0 ? 1 : 0, minHeight: "1em" }}>
                {feedCooldown > 0 ? `${feedCooldown}s` : ""}
              </span>
            </div>
          </Button>
          <Button
            size="sm"
            variant="default"
            onClick={handlePet}
            disabled={petCooldown > 0}
            className="pet-action-btn"
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
              <span>👋 Pet</span>
              <span style={{ fontSize: "0.65rem", opacity: petCooldown > 0 ? 1 : 0, minHeight: "1em" }}>
                {petCooldown > 0 ? `${petCooldown}s` : ""}
              </span>
            </div>
          </Button>
          <Button
            size="sm"
            variant="default"
            onClick={handlePlay}
            disabled={playCooldown > 0}
            className="pet-action-btn"
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
              <span>🎮 Play</span>
              <span style={{ fontSize: "0.65rem", opacity: playCooldown > 0 ? 1 : 0, minHeight: "1em" }}>
                {playCooldown > 0 ? `${playCooldown}s` : ""}
              </span>
            </div>
          </Button>
          {state.mood !== "sleeping" ? (
            <Button
              size="sm"
              variant="default"
              onClick={handleSleep}
              disabled={sleepCooldown > 0}
              className="pet-action-btn"
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                <span>💤 Sleep</span>
                <span style={{ fontSize: "0.65rem", opacity: sleepCooldown > 0 ? 1 : 0, minHeight: "1em" }}>
                  {sleepCooldown > 0 ? `${sleepCooldown}s` : ""}
                </span>
              </div>
            </Button>
          ) : (
            <Button
              size="sm"
              variant="default"
              onClick={handleWake}
              disabled={wakeCooldown > 0}
              className="pet-action-btn"
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                <span>🌅 Wake</span>
                <span style={{ fontSize: "0.65rem", opacity: wakeCooldown > 0 ? 1 : 0, minHeight: "1em" }}>
                  {wakeCooldown > 0 ? `${wakeCooldown}s` : ""}
                </span>
              </div>
            </Button>
          )}
          <Button
            size="sm"
            variant="default"
            onClick={() => setRenaming(!renaming)}
            className="pet-action-btn"
          >
            ✏️ Rename
          </Button>
        </div>

        {/* Rename Input */}
        {renaming && (
          <Group gap="xs">
            <TextInput
              placeholder="New name"
              value={newName}
              onChange={(e) => setNewName(e.currentTarget.value)}
              size="xs"
              style={{ flex: 1 }}
            />
            <Button size="xs" onClick={handleRename}>
              Save
            </Button>
            <Button
              size="xs"
              variant="default"
              onClick={() => setRenaming(false)}
            >
              Cancel
            </Button>
          </Group>
        )}

        {/* Timestamps */}
        <div className="pet-timestamps">
          <Text size="xs" c="dimmed">
            Last fed: {getTimeAgo(state.last_fed)}
          </Text>
          <Text size="xs" c="dimmed">
            Last petted: {getTimeAgo(state.last_petted)}
          </Text>
          <Text size="xs" c="dimmed">
            Last played: {getTimeAgo(state.last_played)}
          </Text>
        </div>

        {/* Message */}
        {message && (
          <div className="pet-message">
            <Text size="sm" fw={500}>
              {message}
            </Text>
          </div>
        )}
      </Stack>

      {/* Sync Conflict Modal */}
      <SyncConflictModal
        conflict={syncConflict}
        loading={syncLoading}
        onKeepLocal={handleKeepLocal}
        onDownloadCloud={handleDownloadCloud}
      />

      {/* Switch Account Modal */}
      {loginModalOpen && (
        <LoginModal
          mode="switch"
          onLogin={handleLogin}
          onClose={() => setLoginModalOpen(false)}
        />
      )}
    </div>
  );
}
