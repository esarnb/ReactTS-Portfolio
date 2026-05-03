// @ts-nocheck
import { Mood } from "../PetState";
import { Eye, Mouth, ZZZ } from "./AnimalHelpers";

interface PenguinPetProps {
  mood: Mood;
  size?: number;
}

export function PenguinPet({ mood, size = 120 }: PenguinPetProps) {
  const animClass =
    mood === "happy"
      ? "pet-anim-bounce"
      : mood === "sleeping"
        ? "pet-anim-sleeping"
        : mood === "hungry"
          ? "pet-anim-shake"
          : mood === "sad"
            ? "pet-anim-sad"
            : "pet-anim-idle";

  return (
    <svg viewBox="0 0 120 140" width={size} height={(size * 140) / 120} className={animClass}>
      <defs>
        <radialGradient id="penguinBody" cx="35%" cy="28%" r="72%">
          <stop offset="0%" stopColor="#2a2a40" />
          <stop offset="100%" stopColor="#0c0c1a" />
        </radialGradient>
        <radialGradient id="penguinHead" cx="38%" cy="30%" r="68%">
          <stop offset="0%" stopColor="#2e2e44" />
          <stop offset="100%" stopColor="#0e0e20" />
        </radialGradient>
        <radialGradient id="penguinBelly" cx="50%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#fafaf2" />
          <stop offset="100%" stopColor="#e8e8e0" />
        </radialGradient>
      </defs>

      {/* Main body */}
      <ellipse cx="60" cy="92" rx="32" ry="44" fill="url(#penguinBody)" />

      {/* White belly patch */}
      <ellipse cx="60" cy="100" rx="19" ry="32" fill="url(#penguinBelly)" />

      {/* Yellow/gold neck accent stripe */}
      <path
        d="M 42 66 Q 60 62 78 66 Q 80 72 78 76 Q 60 72 42 76 Z"
        fill="#d4a820" opacity="0.85"
      />

      {/* Left flipper */}
      <path
        d="M 30 78 C 14 80 10 96 16 112 C 20 120 30 122 36 118 C 40 114 38 104 34 96 C 32 88 30 82 30 78 Z"
        fill="#12121e"
      />
      {/* Right flipper */}
      <path
        d="M 90 78 C 106 80 110 96 104 112 C 100 120 90 122 84 118 C 80 114 82 104 86 96 C 88 88 90 82 90 78 Z"
        fill="#12121e"
      />

      {/* Feet */}
      <ellipse cx="46" cy="134" rx="10" ry="5.5" fill="#e06010" />
      <ellipse cx="74" cy="134" rx="10" ry="5.5" fill="#e06010" />
      {/* Toe webbing */}
      <path d="M 38 134 Q 41 138 46 136 Q 51 138 54 134" fill="none" stroke="#e06010" strokeWidth="1.5" />
      <path d="M 66 134 Q 69 138 74 136 Q 79 138 82 134" fill="none" stroke="#e06010" strokeWidth="1.5" />

      {/* Head */}
      <circle cx="60" cy="50" r="26" fill="url(#penguinHead)" />

      {/* White face patch */}
      <ellipse cx="60" cy="54" rx="16" ry="18" fill="#f5f5ed" />

      {/* Beak */}
      <path d="M 52 50 L 60 44 L 68 50 L 60 56 Z" fill="#e06010" />
      <line x1="52" y1="50" x2="68" y2="50" stroke="#b84808" strokeWidth="1" />

      {/* Eyes: dark with slight amber iris */}
      <circle cx={46} cy={44} r={7} fill="#f5f0e8" />
      <circle cx={46} cy={44} r={5} fill="#c88020" />
      <Eye cx={46} cy={44} mood={mood} size={4} />

      <circle cx={74} cy={44} r={7} fill="#f5f0e8" />
      <circle cx={74} cy={44} r={5} fill="#c88020" />
      <Eye cx={74} cy={44} mood={mood} size={4} />

      {/* Mood mouth below beak */}
      <Mouth cx={60} cy={60} mood={mood} />

      {mood === "happy" && (
        <>
          <circle cx={43} cy={58} r={4} fill="#ffb6c1" opacity="0.55" />
          <circle cx={77} cy={58} r={4} fill="#ffb6c1" opacity="0.55" />
        </>
      )}
      {mood === "sleeping" && <ZZZ x={76} y={28} />}
    </svg>
  );
}
