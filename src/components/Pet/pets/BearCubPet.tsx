// @ts-nocheck
import { Mood } from "../PetState";
import { Eye, Mouth, ZZZ } from "./AnimalHelpers";

interface BearCubPetProps {
  mood: Mood;
  size?: number;
}

export function BearCubPet({ mood, size = 120 }: BearCubPetProps) {
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
        <radialGradient id="bearHead" cx="38%" cy="30%" r="68%">
          <stop offset="0%" stopColor="#b08040" />
          <stop offset="55%" stopColor="#7a5020" />
          <stop offset="100%" stopColor="#4a2c08" />
        </radialGradient>
        <radialGradient id="bearBody" cx="36%" cy="26%" r="72%">
          <stop offset="0%" stopColor="#a07030" />
          <stop offset="100%" stopColor="#4a2808" />
        </radialGradient>
        <radialGradient id="bearMuzzle" cx="50%" cy="42%" r="62%">
          <stop offset="0%" stopColor="#d8b478" />
          <stop offset="100%" stopColor="#b89050" />
        </radialGradient>
        <radialGradient id="bearEarInner" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#c49860" />
          <stop offset="100%" stopColor="#a07840" />
        </radialGradient>
      </defs>

      {/* Left ear (behind head) */}
      <circle cx="34" cy="26" r="16" fill="url(#bearHead)" />
      <circle cx="34" cy="26" r="10" fill="url(#bearEarInner)" />

      {/* Right ear (behind head) */}
      <circle cx="86" cy="26" r="16" fill="url(#bearHead)" />
      <circle cx="86" cy="26" r="10" fill="url(#bearEarInner)" />

      {/* Body */}
      <ellipse cx="60" cy="106" rx="32" ry="38" fill="url(#bearBody)" />

      {/* Belly lighter patch */}
      <ellipse cx="60" cy="114" rx="18" ry="26" fill="#c49860" opacity="0.7" />

      {/* Hind paws */}
      <ellipse cx="40" cy="140" rx="16" ry="8" fill="#7a5020" />
      <ellipse cx="80" cy="140" rx="16" ry="8" fill="#7a5020" />
      {/* Paw pads */}
      <ellipse cx="40" cy="143" rx="6" ry="3.5" fill="#4a2808" opacity="0.7" />
      <circle cx="32" cy="140" r="2.5" fill="#4a2808" opacity="0.7" />
      <circle cx="36" cy="138" r="2.5" fill="#4a2808" opacity="0.7" />
      <circle cx="44" cy="138" r="2.5" fill="#4a2808" opacity="0.7" />
      <circle cx="48" cy="140" r="2.5" fill="#4a2808" opacity="0.7" />
      <ellipse cx="80" cy="143" rx="6" ry="3.5" fill="#4a2808" opacity="0.7" />
      <circle cx="72" cy="140" r="2.5" fill="#4a2808" opacity="0.7" />
      <circle cx="76" cy="138" r="2.5" fill="#4a2808" opacity="0.7" />
      <circle cx="84" cy="138" r="2.5" fill="#4a2808" opacity="0.7" />
      <circle cx="88" cy="140" r="2.5" fill="#4a2808" opacity="0.7" />

      {/* Front arms */}
      <ellipse cx="30" cy="110" rx="13" ry="9" fill="#7a5020" transform="rotate(-25 30 110)" />
      <ellipse cx="90" cy="110" rx="13" ry="9" fill="#7a5020" transform="rotate(25 90 110)" />
      {/* Front paw pads */}
      <ellipse cx="20" cy="115" rx="5" ry="3" fill="#4a2808" opacity="0.65" />
      <ellipse cx="100" cy="115" rx="5" ry="3" fill="#4a2808" opacity="0.65" />

      {/* Head */}
      <circle cx="60" cy="54" r="32" fill="url(#bearHead)" />

      {/* Fur texture hint - subtle lighter streaks */}
      <path d="M 50 28 Q 60 24 70 28" fill="none" stroke="#a07030" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
      <path d="M 44 36 Q 60 30 76 36" fill="none" stroke="#9a6828" strokeWidth="1.2" opacity="0.4" strokeLinecap="round" />

      {/* Muzzle */}
      <ellipse cx="60" cy="66" rx="16" ry="12" fill="url(#bearMuzzle)" />

      {/* Nose - large black bear nose */}
      <ellipse cx="60" cy="58" rx="8" ry="6" fill="#1c1008" />
      <ellipse cx="57" cy="56" rx="2.5" ry="1.8" fill="#3a2010" opacity="0.55" />
      <ellipse cx="63" cy="56" rx="2.5" ry="1.8" fill="#3a2010" opacity="0.55" />
      <circle cx="63" cy="55" r="1.5" fill="#f0f0f0" opacity="0.65" />

      {/* Snout crease */}
      <line x1="60" y1="64" x2="60" y2="70" stroke="#8a6030" strokeWidth="1.3" />

      <Mouth cx={60} cy={72} mood={mood} />

      {/* Eyes: sclera, dark brown iris */}
      <circle cx={44} cy={48} r={9} fill="#f0ece0" />
      <circle cx={44} cy={48} r={6.5} fill="#4a2c10" />
      <circle cx={46.5} cy={45.5} r={1.8} fill="#f0f0f0" opacity="0.6" />
      <Eye cx={44} cy={48} mood={mood} size={5} />

      <circle cx={76} cy={48} r={9} fill="#f0ece0" />
      <circle cx={76} cy={48} r={6.5} fill="#4a2c10" />
      <circle cx={78.5} cy={45.5} r={1.8} fill="#f0f0f0" opacity="0.6" />
      <Eye cx={76} cy={48} mood={mood} size={5} />

      {mood === "happy" && (
        <>
          <circle cx={38} cy={64} r={5} fill="#ffb6c1" opacity="0.6" />
          <circle cx={82} cy={64} r={5} fill="#ffb6c1" opacity="0.6" />
        </>
      )}
      {mood === "sleeping" && <ZZZ x={82} y={28} />}
    </svg>
  );
}
