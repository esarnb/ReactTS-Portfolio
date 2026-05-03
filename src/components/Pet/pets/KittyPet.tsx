// @ts-nocheck
import { Mood } from "../PetState";
import { Eye, Mouth, ZZZ } from "./AnimalHelpers";

interface KittyPetProps {
  mood: Mood;
  size?: number;
}

export function KittyPet({ mood, size = 120 }: KittyPetProps) {
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
        <radialGradient id="kittyHead" cx="38%" cy="32%" r="68%">
          <stop offset="0%" stopColor="#f5c080" />
          <stop offset="55%" stopColor="#e8894a" />
          <stop offset="100%" stopColor="#bf5e1a" />
        </radialGradient>
        <radialGradient id="kittyBody" cx="36%" cy="28%" r="70%">
          <stop offset="0%" stopColor="#eda055" />
          <stop offset="100%" stopColor="#b85818" />
        </radialGradient>
      </defs>

      {/* Tail curling around right side */}
      <path
        d="M 85 105 C 112 115 118 88 98 75 C 88 68 80 76 80 78"
        fill="none" stroke="#bf5e1a" strokeWidth="11" strokeLinecap="round"
      />
      <path
        d="M 85 105 C 112 115 118 88 98 75 C 88 68 80 76 80 78"
        fill="none" stroke="#e8894a" strokeWidth="7" strokeLinecap="round"
      />

      {/* Body */}
      <ellipse cx="60" cy="100" rx="27" ry="31" fill="url(#kittyBody)" />
      <ellipse cx="60" cy="110" rx="14" ry="20" fill="#f5e8d8" opacity="0.82" />

      {/* Front paws */}
      <ellipse cx="39" cy="129" rx="13" ry="6.5" fill="#e8894a" />
      <ellipse cx="75" cy="129" rx="13" ry="6.5" fill="#e8894a" />
      <line x1="34" y1="132" x2="34" y2="136" stroke="#bf5e1a" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="39" y1="133" x2="39" y2="137" stroke="#bf5e1a" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="44" y1="132" x2="44" y2="136" stroke="#bf5e1a" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="70" y1="132" x2="70" y2="136" stroke="#bf5e1a" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="75" y1="133" x2="75" y2="137" stroke="#bf5e1a" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="80" y1="132" x2="80" y2="136" stroke="#bf5e1a" strokeWidth="1.5" strokeLinecap="round" />

      {/* Left ear (behind head) */}
      <polygon points="28,32 16,6 48,26" fill="#e8894a" />
      <polygon points="31,29 22,10 44,24" fill="#ffa0c8" />
      {/* Right ear (behind head) */}
      <polygon points="92,32 104,6 72,26" fill="#e8894a" />
      <polygon points="89,29 98,10 76,24" fill="#ffa0c8" />

      {/* Head */}
      <circle cx="60" cy="50" r="29" fill="url(#kittyHead)" />

      {/* Tabby forehead stripes */}
      <path d="M 53 25 Q 60 22 67 25" fill="none" stroke="#bf5e1a" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M 50 31 Q 60 28 70 31" fill="none" stroke="#bf5e1a" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M 49 37 Q 60 34 71 37" fill="none" stroke="#b85818" strokeWidth="1.1" strokeLinecap="round" />

      {/* Muzzle bump */}
      <ellipse cx="60" cy="62" rx="12" ry="9" fill="#f5e8d8" />

      {/* Nose */}
      <path d="M 57 58 Q 60 55 63 58 L 61.5 61 Q 60 62 58.5 61 Z" fill="#cc3474" />
      {/* Philtrum */}
      <line x1="60" y1="61" x2="60" y2="65" stroke="#bf5e1a" strokeWidth="1.1" />

      <Mouth cx={60} cy={66} mood={mood} />

      {/* Whiskers */}
      <line x1="63" y1="59" x2="108" y2="51" stroke="#c8c0b8" strokeWidth="0.9" />
      <line x1="63" y1="62" x2="108" y2="62" stroke="#c8c0b8" strokeWidth="0.9" />
      <line x1="63" y1="65" x2="108" y2="73" stroke="#c8c0b8" strokeWidth="0.9" />
      <line x1="57" y1="59" x2="12" y2="51" stroke="#c8c0b8" strokeWidth="0.9" />
      <line x1="57" y1="62" x2="12" y2="62" stroke="#c8c0b8" strokeWidth="0.9" />
      <line x1="57" y1="65" x2="12" y2="73" stroke="#c8c0b8" strokeWidth="0.9" />

      {/* Eyes: sclera, amber iris, then mood expression */}
      <circle cx={46} cy={46} r={8} fill="#f5f0e5" />
      <circle cx={46} cy={46} r={5.5} fill="#a87028" />
      <Eye cx={46} cy={46} mood={mood} size={4} />

      <circle cx={74} cy={46} r={8} fill="#f5f0e5" />
      <circle cx={74} cy={46} r={5.5} fill="#a87028" />
      <Eye cx={74} cy={46} mood={mood} size={4} />

      {mood === "happy" && (
        <>
          <circle cx={41} cy={61} r={4.5} fill="#ffb6c1" opacity="0.6" />
          <circle cx={79} cy={61} r={4.5} fill="#ffb6c1" opacity="0.6" />
        </>
      )}
      {mood === "sleeping" && <ZZZ x={80} y={26} />}
    </svg>
  );
}
