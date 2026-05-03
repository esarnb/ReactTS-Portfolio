// @ts-nocheck
import { Mood } from "../PetState";
import { Eye, Mouth, ZZZ } from "./AnimalHelpers";

interface ParrotPetProps {
  mood: Mood;
  size?: number;
}

export function ParrotPet({ mood, size = 120 }: ParrotPetProps) {
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
        <radialGradient id="parrotBody" cx="36%" cy="28%" r="70%">
          <stop offset="0%" stopColor="#50c858" />
          <stop offset="55%" stopColor="#2a8830" />
          <stop offset="100%" stopColor="#145a18" />
        </radialGradient>
        <radialGradient id="parrotHead" cx="38%" cy="30%" r="68%">
          <stop offset="0%" stopColor="#60d868" />
          <stop offset="60%" stopColor="#30982e" />
          <stop offset="100%" stopColor="#186018" />
        </radialGradient>
        <linearGradient id="parrotWingL" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e03020" />
          <stop offset="40%" stopColor="#e88020" />
          <stop offset="75%" stopColor="#2060c8" />
          <stop offset="100%" stopColor="#1040a0" />
        </linearGradient>
        <linearGradient id="parrotWingR" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e03020" />
          <stop offset="40%" stopColor="#e88020" />
          <stop offset="75%" stopColor="#2060c8" />
          <stop offset="100%" stopColor="#1040a0" />
        </linearGradient>
      </defs>

      {/* Perch */}
      <rect x="12" y="118" width="96" height="7" rx="3.5" fill="#8b5e28" />
      <rect x="12" y="118" width="96" height="3" rx="1.5" fill="#a87840" />

      {/* Left wing */}
      <path
        d="M 36 68 C 18 62 8 78 12 98 C 16 114 30 118 38 116 C 46 112 44 100 42 90 C 40 80 38 72 36 68 Z"
        fill="url(#parrotWingL)"
      />
      {/* Wing feather detail */}
      <path d="M 22 86 C 28 88 36 90 38 100" fill="none" stroke="#c02018" strokeWidth="1.2" opacity="0.6" />
      <path d="M 18 96 C 24 96 34 98 36 108" fill="none" stroke="#1840a0" strokeWidth="1.2" opacity="0.6" />

      {/* Right wing */}
      <path
        d="M 84 68 C 102 62 112 78 108 98 C 104 114 90 118 82 116 C 74 112 76 100 78 90 C 80 80 82 72 84 68 Z"
        fill="url(#parrotWingR)"
      />
      <path d="M 98 86 C 92 88 84 90 82 100" fill="none" stroke="#c02018" strokeWidth="1.2" opacity="0.6" />
      <path d="M 102 96 C 96 96 86 98 84 108" fill="none" stroke="#1840a0" strokeWidth="1.2" opacity="0.6" />

      {/* Body */}
      <ellipse cx="60" cy="92" rx="26" ry="30" fill="url(#parrotBody)" />

      {/* Breast lighter patch */}
      <ellipse cx="60" cy="98" rx="12" ry="18" fill="#40b848" opacity="0.7" />

      {/* Tail feathers */}
      <path d="M 50 118 C 44 128 42 140 48 140 C 54 140 56 132 60 132 C 64 132 66 140 72 140 C 78 140 76 128 70 118"
            fill="#1a6820" />
      <path d="M 60 120 L 60 140" fill="none" stroke="#145818" strokeWidth="1.5" />
      <path d="M 52 122 C 50 132 50 138 54 140" fill="none" stroke="#145818" strokeWidth="1" />
      <path d="M 68 122 C 70 132 70 138 66 140" fill="none" stroke="#145818" strokeWidth="1" />

      {/* Feet gripping perch */}
      <path d="M 46 118 C 42 120 38 122 36 126" fill="none" stroke="#a09020" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 48 118 C 46 122 44 124 44 128" fill="none" stroke="#a09020" strokeWidth="3" strokeLinecap="round" />
      <path d="M 74 118 C 78 120 82 122 84 126" fill="none" stroke="#a09020" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 72 118 C 74 122 76 124 76 128" fill="none" stroke="#a09020" strokeWidth="3" strokeLinecap="round" />

      {/* Head */}
      <circle cx="60" cy="52" r="24" fill="url(#parrotHead)" />

      {/* Head crest feathers */}
      <path d="M 54 30 C 50 20 48 12 52 8 C 54 16 56 24 56 30" fill="#28a030" />
      <path d="M 60 28 C 58 18 60 10 62 6 C 62 14 62 22 62 28" fill="#40c040" />
      <path d="M 66 30 C 68 20 72 12 68 8 C 66 16 64 24 64 30" fill="#28a030" />

      {/* White eye ring */}
      <circle cx={46} cy={48} r={9} fill="#f0f0e8" />
      <circle cx={74} cy={48} r={9} fill="#f0f0e8" />

      {/* Yellow iris */}
      <circle cx={46} cy={48} r={6.5} fill="#d8c020" />
      <circle cx={74} cy={48} r={6.5} fill="#d8c020" />
      <Eye cx={46} cy={48} mood={mood} size={4.5} />
      <Eye cx={74} cy={48} mood={mood} size={4.5} />

      {/* Hooked beak */}
      <path d="M 52 56 L 60 50 L 68 56 C 66 62 62 66 60 64 C 58 66 54 62 52 56 Z" fill="#d4a020" />
      <path d="M 52 56 L 68 56" stroke="#b88010" strokeWidth="1.2" />
      <path d="M 60 58 C 57 62 56 64 56 66" fill="none" stroke="#b88010" strokeWidth="1" />

      <Mouth cx={60} cy={68} mood={mood} />

      {mood === "happy" && (
        <>
          <circle cx={40} cy={57} r={4} fill="#ffb6c1" opacity="0.55" />
          <circle cx={80} cy={57} r={4} fill="#ffb6c1" opacity="0.55" />
        </>
      )}
      {mood === "sleeping" && <ZZZ x={78} y={28} />}
    </svg>
  );
}
