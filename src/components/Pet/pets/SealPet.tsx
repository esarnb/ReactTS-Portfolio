// @ts-nocheck
import { Mood } from "../PetState";
import { Eye, Mouth, ZZZ } from "./AnimalHelpers";

interface SealPetProps {
  mood: Mood;
  size?: number;
}

export function SealPet({ mood, size = 120 }: SealPetProps) {
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
    <svg viewBox="0 0 120 150" width={size} height={(size * 150) / 120} className={animClass}>
      <defs>
        <radialGradient id="sealBody" cx="36%" cy="28%" r="72%">
          <stop offset="0%" stopColor="#9aaca8" />
          <stop offset="55%" stopColor="#6a7e7a" />
          <stop offset="100%" stopColor="#3c5050" />
        </radialGradient>
        <radialGradient id="sealHead" cx="38%" cy="30%" r="68%">
          <stop offset="0%" stopColor="#a8b8b4" />
          <stop offset="60%" stopColor="#708480" />
          <stop offset="100%" stopColor="#405454" />
        </radialGradient>
        <radialGradient id="sealBelly" cx="50%" cy="35%" r="62%">
          <stop offset="0%" stopColor="#e8ecea" />
          <stop offset="100%" stopColor="#c8d0ce" />
        </radialGradient>
      </defs>

      {/* Tail fluke */}
      <path
        d="M 42 138 C 36 144 34 150 44 148 C 52 146 56 140 60 140 C 64 140 68 146 76 148 C 86 150 84 144 78 138 C 72 132 66 128 60 128 C 54 128 48 132 42 138 Z"
        fill="#506060"
      />
      <path d="M 60 128 L 60 144" fill="none" stroke="#3c5050" strokeWidth="2" />
      <path d="M 44 142 C 50 140 56 140 60 140" fill="none" stroke="#3c5050" strokeWidth="1.2" opacity="0.6" />
      <path d="M 76 142 C 70 140 64 140 60 140" fill="none" stroke="#3c5050" strokeWidth="1.2" opacity="0.6" />

      {/* Main body */}
      <ellipse cx="60" cy="96" rx="36" ry="44" fill="url(#sealBody)" />

      {/* Belly patch */}
      <ellipse cx="60" cy="104" rx="20" ry="32" fill="url(#sealBelly)" opacity="0.88" />

      {/* Dark spots pattern */}
      <circle cx="42" cy="88" r="3" fill="#3c5050" opacity="0.4" />
      <circle cx="50" cy="78" r="2.5" fill="#3c5050" opacity="0.35" />
      <circle cx="72" cy="82" r="3.5" fill="#3c5050" opacity="0.4" />
      <circle cx="80" cy="96" r="2.5" fill="#3c5050" opacity="0.35" />
      <circle cx="38" cy="104" r="2" fill="#3c5050" opacity="0.3" />
      <circle cx="76" cy="108" r="2.5" fill="#3c5050" opacity="0.35" />

      {/* Left front flipper */}
      <path
        d="M 26 88 C 12 86 8 98 14 112 C 18 120 28 120 32 114 C 36 106 34 96 28 90 C 28 90 26 88 26 88 Z"
        fill="#506060"
      />
      <path d="M 12 104 C 16 102 24 106 26 112" fill="none" stroke="#3c5050" strokeWidth="1.2" opacity="0.65" />

      {/* Right front flipper */}
      <path
        d="M 94 88 C 108 86 112 98 106 112 C 102 120 92 120 88 114 C 84 106 86 96 92 90 C 92 90 94 88 94 88 Z"
        fill="#506060"
      />
      <path d="M 108 104 C 104 102 96 106 94 112" fill="none" stroke="#3c5050" strokeWidth="1.2" opacity="0.65" />

      {/* Head */}
      <circle cx="60" cy="46" r="28" fill="url(#sealHead)" />

      {/* Lighter muzzle */}
      <ellipse cx="60" cy="54" rx="14" ry="11" fill="#c8d4d2" opacity="0.8" />

      {/* Nose - small dark button */}
      <ellipse cx="60" cy="48" rx="5" ry="3.5" fill="#1c2c2c" />
      <circle cx="62" cy="47" r="1.2" fill="#f0f0f0" opacity="0.6" />

      {/* Whiskers */}
      <line x1="63" y1="50" x2="108" y2="43" stroke="#d0ccc4" strokeWidth="1" />
      <line x1="63" y1="53" x2="108" y2="53" stroke="#d0ccc4" strokeWidth="1" />
      <line x1="63" y1="56" x2="108" y2="63" stroke="#d0ccc4" strokeWidth="1" />
      <line x1="57" y1="50" x2="12" y2="43" stroke="#d0ccc4" strokeWidth="1" />
      <line x1="57" y1="53" x2="12" y2="53" stroke="#d0ccc4" strokeWidth="1" />
      <line x1="57" y1="56" x2="12" y2="63" stroke="#d0ccc4" strokeWidth="1" />

      <Mouth cx={60} cy={60} mood={mood} />

      {/* Very large liquid dark eyes - seal signature feature */}
      <circle cx={44} cy={40} r={10} fill="#e8f0ee" />
      <circle cx={44} cy={40} r={7.5} fill="#1c2c30" />
      <circle cx={47} cy={37} r={2} fill="#f0f8f8" opacity="0.75" />
      <Eye cx={44} cy={40} mood={mood} size={5.5} />

      <circle cx={76} cy={40} r={10} fill="#e8f0ee" />
      <circle cx={76} cy={40} r={7.5} fill="#1c2c30" />
      <circle cx={79} cy={37} r={2} fill="#f0f8f8" opacity="0.75" />
      <Eye cx={76} cy={40} mood={mood} size={5.5} />

      {mood === "happy" && (
        <>
          <circle cx={38} cy={53} r={4.5} fill="#ffb6c1" opacity="0.6" />
          <circle cx={82} cy={53} r={4.5} fill="#ffb6c1" opacity="0.6" />
        </>
      )}
      {mood === "sleeping" && <ZZZ x={80} y={22} />}
    </svg>
  );
}
