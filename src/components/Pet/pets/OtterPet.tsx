// @ts-nocheck
import { Mood } from "../PetState";
import { Eye, Mouth, ZZZ, Blush } from "./AnimalHelpers";

interface OtterPetProps {
  mood: Mood;
  size?: number;
}

export function OtterPet({ mood, size = 120 }: OtterPetProps) {
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
      <ellipse cx="60" cy="85" rx="35" ry="38" fill="#a0522d" />
      <circle cx="60" cy="50" r="28" fill="#d4b8a0" />
      <circle cx="45" cy="35" r="7" fill="#a0522d" />
      <circle cx="75" cy="35" r="7" fill="#a0522d" />

      <circle cx="60" cy="48" r="6" fill="#2c2c2c" />

      {mood === "happy" && (
        <polygon points="50,90 45,100 55,95" fill="#8b6914" />
      )}

      <ellipse cx="40" cy="100" rx="8" ry="12" fill="#d4b8a0" opacity="0.6" />
      <ellipse cx="80" cy="100" rx="8" ry="12" fill="#d4b8a0" opacity="0.6" />

      <g transform="translate(60, 50)">
        <Eye cx="-8" cy="-6" mood={mood} size="4" />
        <Eye cx="8" cy="-6" mood={mood} size="4" />
        <Mouth cx="0" cy="7" mood={mood} />
        {mood === "happy" && <Blush cx={60} cy={50} r={2.5} />}
        {mood === "sleeping" && <ZZZ x={70} y={30} />}
      </g>
    </svg>
  );
}
