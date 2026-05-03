import { Mood } from "../PetState";
import { Eye, Mouth, ZZZ, Blush } from "./AnimalHelpers";

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
      <ellipse cx="60" cy="85" rx="38" ry="40" fill="#808080" />
      <ellipse cx="60" cy="92" rx="26" ry="30" fill="#d9d9d9" />
      <circle cx="60" cy="45" r="26" fill="#808080" />

      <circle cx="55" cy="45" r="3.5" fill="#f0f0f0" />
      <circle cx="65" cy="45" r="3.5" fill="#f0f0f0" />

      <line x1="50" y1="55" x2="35" y2="60" stroke="#999" strokeWidth="1.5" />
      <line x1="50" y1="59" x2="35" y2="65" stroke="#999" strokeWidth="1.5" />
      <line x1="70" y1="55" x2="85" y2="60" stroke="#999" strokeWidth="1.5" />
      <line x1="70" y1="59" x2="85" y2="65" stroke="#999" strokeWidth="1.5" />

      <ellipse cx="30" cy="100" rx="10" ry="18" fill="#808080" />
      <ellipse cx="90" cy="100" rx="10" ry="18" fill="#808080" />

      <path d="M 45 125 Q 50 135 55 130 Q 60 125 65 130 Q 70 135 75 125" fill="#808080" />

      <g transform="translate(60, 45)">
        <Eye cx="-6" cy="-3" mood={mood} size="3.5" />
        <Eye cx="6" cy="-3" mood={mood} size="3.5" />
        <Mouth cx="0" cy="6" mood={mood} />
        {mood === "happy" && <Blush cx={60} cy={45} r={2} />}
        {mood === "sleeping" && <ZZZ x={70} y={25} />}
      </g>
    </svg>
  );
}
