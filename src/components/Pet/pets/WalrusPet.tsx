// @ts-nocheck
import { Mood } from "../PetState";
import { Eye, Mouth, ZZZ } from "./AnimalHelpers";

interface WalrusPetProps {
  mood: Mood;
  size?: number;
}

export function WalrusPet({ mood, size = 120 }: WalrusPetProps) {
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
        <radialGradient id="walrusBody" cx="36%" cy="28%" r="72%">
          <stop offset="0%" stopColor="#9aacb8" />
          <stop offset="55%" stopColor="#6a7e8c" />
          <stop offset="100%" stopColor="#3a4e5c" />
        </radialGradient>
        <radialGradient id="walrusHead" cx="38%" cy="30%" r="68%">
          <stop offset="0%" stopColor="#a0b0bc" />
          <stop offset="60%" stopColor="#708090" />
          <stop offset="100%" stopColor="#404e5c" />
        </radialGradient>
        <radialGradient id="walrusMuzzle" cx="50%" cy="40%" r="62%">
          <stop offset="0%" stopColor="#b0bec8" />
          <stop offset="100%" stopColor="#7a8e9c" />
        </radialGradient>
      </defs>

      {/* Large body */}
      <ellipse cx="60" cy="108" rx="44" ry="38" fill="url(#walrusBody)" />

      {/* Lighter belly */}
      <ellipse cx="60" cy="116" rx="26" ry="25" fill="#b8c8d4" opacity="0.6" />

      {/* Left flipper */}
      <path
        d="M 18 100 C 8 106 6 120 12 132 C 18 140 30 138 34 130 C 38 122 34 112 28 106 C 24 102 20 100 18 100 Z"
        fill="#506070"
      />
      <path d="M 14 118 C 18 116 26 118 28 124" fill="none" stroke="#40505e" strokeWidth="1.5" opacity="0.7" />

      {/* Right flipper */}
      <path
        d="M 102 100 C 112 106 114 120 108 132 C 102 140 90 138 86 130 C 82 122 86 112 92 106 C 96 102 100 100 102 100 Z"
        fill="#506070"
      />
      <path d="M 106 118 C 102 116 94 118 92 124" fill="none" stroke="#40505e" strokeWidth="1.5" opacity="0.7" />

      {/* Head */}
      <circle cx="60" cy="60" r="36" fill="url(#walrusHead)" />

      {/* Thick muzzle */}
      <ellipse cx="60" cy="72" rx="24" ry="18" fill="url(#walrusMuzzle)" />

      {/* Whisker pad dots */}
      <circle cx="44" cy="70" r="2.5" fill="#5a6e7c" />
      <circle cx="44" cy="76" r="2.5" fill="#5a6e7c" />
      <circle cx="50" cy="73" r="2" fill="#5a6e7c" />
      <circle cx="76" cy="70" r="2.5" fill="#5a6e7c" />
      <circle cx="76" cy="76" r="2.5" fill="#5a6e7c" />
      <circle cx="70" cy="73" r="2" fill="#5a6e7c" />

      {/* Whiskers */}
      <line x1="50" y1="70" x2="10" y2="62" stroke="#d8d0c8" strokeWidth="1.1" />
      <line x1="50" y1="74" x2="10" y2="74" stroke="#d8d0c8" strokeWidth="1.1" />
      <line x1="50" y1="78" x2="10" y2="86" stroke="#d8d0c8" strokeWidth="1.1" />
      <line x1="70" y1="70" x2="110" y2="62" stroke="#d8d0c8" strokeWidth="1.1" />
      <line x1="70" y1="74" x2="110" y2="74" stroke="#d8d0c8" strokeWidth="1.1" />
      <line x1="70" y1="78" x2="110" y2="86" stroke="#d8d0c8" strokeWidth="1.1" />

      {/* Nostrils */}
      <ellipse cx="55" cy="64" rx="3" ry="2" fill="#506070" />
      <ellipse cx="65" cy="64" rx="3" ry="2" fill="#506070" />

      {/* Tusks - large curved ivory */}
      <path
        d="M 50 80 C 46 88 44 100 48 110 C 50 116 54 116 56 110 C 58 100 56 88 52 80 Z"
        fill="#f5f3e8" stroke="#d8d4c0" strokeWidth="1"
      />
      <path
        d="M 70 80 C 74 88 76 100 72 110 C 70 116 66 116 64 110 C 62 100 64 88 68 80 Z"
        fill="#f5f3e8" stroke="#d8d4c0" strokeWidth="1"
      />
      {/* Tusk shading */}
      <path d="M 50 83 C 48 92 46 104 48 112" fill="none" stroke="#c8c4b0" strokeWidth="1" opacity="0.7" />
      <path d="M 70 83 C 72 92 74 104 72 112" fill="none" stroke="#c8c4b0" strokeWidth="1" opacity="0.7" />

      <Mouth cx={60} cy={80} mood={mood} />

      {/* Small eyes with bluish-gray iris */}
      <circle cx={44} cy={52} r={7.5} fill="#e8f0f4" />
      <circle cx={44} cy={52} r={5} fill="#5a7888" />
      <Eye cx={44} cy={52} mood={mood} size={3.5} />

      <circle cx={76} cy={52} r={7.5} fill="#e8f0f4" />
      <circle cx={76} cy={52} r={5} fill="#5a7888" />
      <Eye cx={76} cy={52} mood={mood} size={3.5} />

      {mood === "happy" && (
        <>
          <circle cx={38} cy={62} r={4.5} fill="#ffb6c1" opacity="0.55" />
          <circle cx={82} cy={62} r={4.5} fill="#ffb6c1" opacity="0.55" />
        </>
      )}
      {mood === "sleeping" && <ZZZ x={80} y={30} />}
    </svg>
  );
}
