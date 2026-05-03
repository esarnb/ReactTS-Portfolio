// @ts-nocheck
import { Mood } from "../PetState";
import { ZZZ, Blush } from "./AnimalHelpers";

interface FrierenPetProps {
  mood: Mood;
  size?: number;
}

export function FrierenPet({ mood, size = 120 }: FrierenPetProps) {
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

  const getEyeExpression = () => {
    if (mood === "sleeping") return { lx1: 48, ly1: 45, lx2: 56, ly2: 45, rx1: 68, ry1: 45, rx2: 76, ry2: 45 };
    if (mood === "happy")
      return {
        lx1: 48,
        ly1: 48,
        lx2: 56,
        ly2: 42,
        rx1: 68,
        ry1: 48,
        rx2: 76,
        ry2: 42,
      };
    if (mood === "sad")
      return {
        lx1: 48,
        ly1: 42,
        lx2: 56,
        ly2: 48,
        rx1: 68,
        ry1: 42,
        rx2: 76,
        ry2: 48,
      };
    return { lx1: 48, ly1: 45, lx2: 56, ly2: 45, rx1: 68, ry1: 45, rx2: 76, ry2: 45 };
  };
  const eyes = getEyeExpression();

  const getMouthPath = () => {
    if (mood === "happy") return `M 58 55 Q 62 58 66 55`;
    if (mood === "sad") return `M 58 55 Q 62 52 66 55`;
    if (mood === "hungry") return `M 62 52 L 62 58`;
    return `M 58 55 L 66 55`;
  };

  return (
    <svg viewBox="0 0 120 180" width={size} height={(size * 180) / 120} className={animClass}>
      {/* Staff */}
      <line x1="95" y1="130" x2="95" y2="20" stroke="#c41e3a" strokeWidth="3" />
      <path
        d="M 95 18 L 90 28 Q 95 25 100 28 L 95 18"
        fill="#ffd700"
        stroke="#daa520"
        strokeWidth="1"
      />
      <circle cx="95" cy="23" r="3" fill="#c41e3a" />
      <path d="M 92 22 Q 95 18 98 22" stroke="#c41e3a" strokeWidth="2" fill="none" />

      {/* Body - Legs */}
      <rect x="54" y="95" width="4" height="20" fill="#1a1a1a" />
      <rect x="66" y="95" width="4" height="20" fill="#1a1a1a" />

      {/* Boots */}
      <ellipse cx="56" cy="116" rx="4" ry="5" fill="#8b6914" />
      <ellipse cx="68" cy="116" rx="4" ry="5" fill="#8b6914" />

      {/* Skirt */}
      <ellipse cx="62" cy="92" rx="16" ry="12" fill="#f5f5f5" stroke="#ffd700" strokeWidth="1" />

      {/* Cape */}
      <path d="M 48 65 Q 45 80 50 110" stroke="#f5f5f5" strokeWidth="12" fill="none" />
      <path d="M 76 65 Q 79 80 74 110" stroke="#f5f5f5" strokeWidth="12" fill="none" />
      <circle cx="62" cy="68" r="4" fill="#c41e3a" />

      {/* Cape trim */}
      <path d="M 48 65 Q 45 80 50 110" stroke="#ffd700" strokeWidth="1" fill="none" />
      <path d="M 76 65 Q 79 80 74 110" stroke="#ffd700" strokeWidth="1" fill="none" />

      {/* Body - Torso */}
      <rect x="48" y="70" width="28" height="25" rx="4" fill="#f5f5f5" stroke="#ffd700" strokeWidth="1" />

      {/* Striped shirt visible at neck */}
      <rect x="52" y="68" width="4" height="6" fill="#1a1a1a" />
      <rect x="56" y="68" width="4" height="6" fill="#f5f5f5" />
      <rect x="60" y="68" width="4" height="6" fill="#1a1a1a" />
      <rect x="64" y="68" width="4" height="6" fill="#f5f5f5" />

      {/* Gold cuffs */}
      <rect x="46" y="78" width="3" height="8" fill="#ffd700" />
      <rect x="75" y="78" width="3" height="8" fill="#ffd700" />

      {/* Head */}
      <circle cx="62" cy="48" r="26" fill="#f5e6d3" />

      {/* Elf Ears */}
      <path d="M 40 30 Q 35 15 40 5" stroke="#f5e6d3" strokeWidth="5" fill="none" />
      <path d="M 40 30 Q 37 18 40 8" stroke="#f5f5f5" strokeWidth="2" fill="none" />

      <path d="M 84 30 Q 89 15 84 5" stroke="#f5e6d3" strokeWidth="5" fill="none" />
      <path d="M 84 30 Q 87 18 84 8" stroke="#f5f5f5" strokeWidth="2" fill="none" />

      {/* Earrings */}
      <circle cx="38" cy="32" r="2" fill="#ffd700" />
      <ellipse cx="38" cy="40" rx="2" ry="4" fill="#c41e3a" />

      <circle cx="86" cy="32" r="2" fill="#ffd700" />
      <ellipse cx="86" cy="40" rx="2" ry="4" fill="#c41e3a" />

      {/* Hair - Twintails */}
      <ellipse cx="35" cy="35" rx="10" ry="18" fill="#f5f5f5" />
      <ellipse cx="89" cy="35" rx="10" ry="18" fill="#f5f5f5" />

      {/* Hair - Hairbands */}
      <circle cx="35" cy="20" r="4" fill="#f5f5f5" stroke="#daa520" strokeWidth="1" />
      <circle cx="89" cy="20" r="4" fill="#f5f5f5" stroke="#daa520" strokeWidth="1" />

      {/* Hair - Bangs/Fringe */}
      <path d="M 50 30 Q 55 25 62 25 Q 69 25 74 30" fill="#f5f5f5" />

      {/* Eyes */}
      <line x1={eyes.lx1} y1={eyes.ly1} x2={eyes.lx2} y2={eyes.ly2} stroke="#228b22" strokeWidth="2" />
      <line x1={eyes.rx1} y1={eyes.ry1} x2={eyes.rx2} y2={eyes.ry2} stroke="#228b22" strokeWidth="2" />

      {/* Eyebrows */}
      <line x1="46" y1="38" x2="58" y2="36" stroke="#2c2c2c" strokeWidth="1.5" />
      <line x1="66" y1="36" x2="78" y2="38" stroke="#2c2c2c" strokeWidth="1.5" />

      {/* Mouth */}
      <path d={getMouthPath()} stroke="#2c2c2c" strokeWidth="1.5" fill="none" />

      {/* Blush */}
      {mood === "happy" && <Blush cx={62} cy={48} r={3} />}

      {/* Sleeping */}
      {mood === "sleeping" && <ZZZ x={80} y={20} />}
    </svg>
  );
}
