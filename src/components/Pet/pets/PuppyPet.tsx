// @ts-nocheck
import { Mood } from "../PetState";
import { Eye, Mouth, ZZZ } from "./AnimalHelpers";

interface PuppyPetProps {
  mood: Mood;
  size?: number;
}

export function PuppyPet({ mood, size = 120 }: PuppyPetProps) {
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
        <radialGradient id="puppyHead" cx="38%" cy="30%" r="68%">
          <stop offset="0%" stopColor="#f0c878" />
          <stop offset="55%" stopColor="#d4a050" />
          <stop offset="100%" stopColor="#a06828" />
        </radialGradient>
        <radialGradient id="puppyBody" cx="38%" cy="28%" r="70%">
          <stop offset="0%" stopColor="#dcaa54" />
          <stop offset="100%" stopColor="#9c6428" />
        </radialGradient>
        <radialGradient id="puppyEar" cx="48%" cy="28%" r="72%">
          <stop offset="0%" stopColor="#c49040" />
          <stop offset="100%" stopColor="#885520" />
        </radialGradient>
      </defs>

      {/* Tail wagging up */}
      <path
        d="M 82 102 C 108 94 112 72 100 60"
        fill="none" stroke="#9c6428" strokeWidth="10" strokeLinecap="round"
      />
      <path
        d="M 82 102 C 108 94 112 72 100 60"
        fill="none" stroke="#d4a050" strokeWidth="6.5" strokeLinecap="round"
      />

      {/* Left floppy ear (behind head) */}
      <path
        d="M 38 33 C 16 42 14 62 18 80 C 22 94 36 96 46 90 C 52 85 52 70 48 54 C 46 42 42 34 38 33 Z"
        fill="url(#puppyEar)"
      />
      {/* Right floppy ear (behind head) */}
      <path
        d="M 82 33 C 104 42 106 62 102 80 C 98 94 84 96 74 90 C 68 85 68 70 72 54 C 74 42 78 34 82 33 Z"
        fill="url(#puppyEar)"
      />

      {/* Body */}
      <ellipse cx="60" cy="104" rx="26" ry="32" fill="url(#puppyBody)" />
      <ellipse cx="60" cy="114" rx="13" ry="21" fill="#f0ddb0" opacity="0.72" />

      {/* Front paws */}
      <ellipse cx="39" cy="133" rx="13" ry="7" fill="#d4a050" />
      <ellipse cx="75" cy="133" rx="13" ry="7" fill="#d4a050" />
      <line x1="34" y1="136" x2="34" y2="140" stroke="#9c6428" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="39" y1="137" x2="39" y2="141" stroke="#9c6428" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="44" y1="136" x2="44" y2="140" stroke="#9c6428" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="70" y1="136" x2="70" y2="140" stroke="#9c6428" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="75" y1="137" x2="75" y2="141" stroke="#9c6428" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="80" y1="136" x2="80" y2="140" stroke="#9c6428" strokeWidth="1.5" strokeLinecap="round" />

      {/* Head */}
      <circle cx="60" cy="50" r="28" fill="url(#puppyHead)" />

      {/* Muzzle area - lighter */}
      <ellipse cx="60" cy="63" rx="15" ry="11" fill="#f0ddb0" />

      {/* Large wet nose */}
      <ellipse cx="60" cy="56" rx="8" ry="6" fill="#1e1408" />
      <ellipse cx="56.5" cy="53.5" rx="2.5" ry="1.8" fill="#443020" opacity="0.55" />
      <ellipse cx="63.5" cy="53.5" rx="2.5" ry="1.8" fill="#443020" opacity="0.55" />
      <circle cx="63" cy="53" r="1.5" fill="#f8f8f8" opacity="0.7" />

      {/* Snout crease line */}
      <line x1="60" y1="62" x2="60" y2="66" stroke="#a06828" strokeWidth="1.2" />

      <Mouth cx={60} cy={70} mood={mood} />

      {/* Eyes: sclera, warm brown iris, mood expression */}
      <circle cx={46} cy={44} r={8.5} fill="#f5f0e8" />
      <circle cx={46} cy={44} r={6} fill="#7a4818" />
      <Eye cx={46} cy={44} mood={mood} size={4} />

      <circle cx={74} cy={44} r={8.5} fill="#f5f0e8" />
      <circle cx={74} cy={44} r={6} fill="#7a4818" />
      <Eye cx={74} cy={44} mood={mood} size={4} />

      {mood === "happy" && (
        <>
          <circle cx={40} cy={59} r={5} fill="#ffb6c1" opacity="0.6" />
          <circle cx={80} cy={59} r={5} fill="#ffb6c1" opacity="0.6" />
        </>
      )}
      {mood === "sleeping" && <ZZZ x={78} y={28} />}
    </svg>
  );
}
