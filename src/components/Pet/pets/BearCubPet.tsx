// @ts-nocheck
import { Mood } from "../PetState";
import { Eye, Mouth, ZZZ, Blush } from "./AnimalHelpers";

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
      <circle cx="60" cy="85" r="36" fill="#8b6914" />
      <circle cx="60" cy="50" r="32" fill="#8b6914" />

      <circle cx="35" cy="25" r="14" fill="#8b6914" />
      <circle cx="85" cy="25" r="14" fill="#8b6914" />

      <ellipse cx="60" cy="65" rx="16" ry="12" fill="#c9a961" />

      <circle cx="60" cy="58" r="6" fill="#2c2c2c" />

      <circle cx="40" cy="130" r="6" fill="#c9a961" />
      <circle cx="80" cy="130" r="6" fill="#c9a961" />

      <g transform="translate(60, 50)">
        <Eye cx="-10" cy="-8" mood={mood} size="5" />
        <Eye cx="10" cy="-8" mood={mood} size="5" />
        <Mouth cx="0" cy="8" mood={mood} />
        {mood === "happy" && <Blush cx={60} cy={50} r={3.5} />}
        {mood === "sleeping" && <ZZZ x={75} y={30} />}
      </g>
    </svg>
  );
}
