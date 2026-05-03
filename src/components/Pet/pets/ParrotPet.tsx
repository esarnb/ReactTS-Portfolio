import { Mood } from "../PetState";
import { Eye, Mouth, ZZZ, Blush } from "./AnimalHelpers";

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
      <circle cx="60" cy="85" r="32" fill="#2ecc40" />
      <circle cx="60" cy="50" r="28" fill="#2ecc40" />

      <polygon
        points="72,50 88,45 85,55 95,50 85,60 88,70 72,65"
        fill="#2ecc40"
        stroke="#1a7a1a"
        strokeWidth="1"
      />
      <polygon points="75,48 85,43 84,58" fill="#e74c3c" />
      <polygon points="78,52 90,48 88,63" fill="#f39c12" />
      <polygon points="80,56 92,52 90,68" fill="#3498db" />

      <polygon points="48,60 35,55 38,68" fill="#ff6b35" />

      <circle cx="55" cy="80" r="4" fill="#ffeb3b" />
      <circle cx="65" cy="80" r="4" fill="#ffeb3b" />

      <circle cx="48" cy="40" r="3" fill="#f81f1f" opacity="0.7" />

      <g transform="translate(60, 50)">
        <Eye cx="-7" cy="-6" mood={mood} size="4" />
        <Eye cx="7" cy="-6" mood={mood} size="4" />
        <Mouth cx="0" cy="6" mood={mood} />
        {mood === "happy" && <Blush cx={60} cy={50} r={2} />}
        {mood === "sleeping" && <ZZZ x={70} y={28} />}
      </g>
    </svg>
  );
}
