import { Mood } from "../PetState";
import { Eye, Mouth, ZZZ, Blush } from "./AnimalHelpers";

interface PenguinPetProps {
  mood: Mood;
  size?: number;
}

export function PenguinPet({ mood, size = 120 }: PenguinPetProps) {
  const scale = size / 120;
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
      <g transform={`scale(${scale})`}>
        <ellipse cx="60" cy="85" rx="35" ry="45" fill="#1a1a1a" />
        <ellipse cx="60" cy="95" rx="20" ry="30" fill="#f5f5f5" />
        <polygon points="60,45 50,55 70,55" fill="#ff6b35" />
        <circle cx="40" cy="80" r="12" fill="#1a1a1a" opacity="0.3" />
        <circle cx="80" cy="80" r="12" fill="#1a1a1a" opacity="0.3" />
        <ellipse cx="45" cy="135" rx="6" ry="8" fill="#ff6b35" />
        <ellipse cx="75" cy="135" rx="6" ry="8" fill="#ff6b35" />

        <g transform="translate(60, 50)">
          <Eye cx="-7" cy="-8" mood={mood} size="4" />
          <Eye cx="7" cy="-8" mood={mood} size="4" />
          <Mouth cx="0" cy="3" mood={mood} />
          {mood === "happy" && <Blush cx={60} cy={50} r={2.5} />}
          {mood === "sleeping" && <ZZZ x={70} y={35} />}
        </g>
      </g>
    </svg>
  );
}
