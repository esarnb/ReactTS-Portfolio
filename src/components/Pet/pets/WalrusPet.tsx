// @ts-nocheck
import { Mood } from "../PetState";
import { Eye, Mouth, ZZZ, Blush } from "./AnimalHelpers";

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
      <ellipse cx="60" cy="85" rx="42" ry="38" fill="#708090" />
      <circle cx="60" cy="50" r="28" fill="#708090" />

      <polygon points="50,65 48,75 52,65" fill="#f5f5f5" />
      <polygon points="70,65 72,75 68,65" fill="#f5f5f5" />

      <circle cx="40" cy="75" r="3" fill="#999" />
      <circle cx="50" cy="80" r="2.5" fill="#999" />
      <circle cx="80" cy="75" r="3" fill="#999" />
      <circle cx="70" cy="80" r="2.5" fill="#999" />

      <ellipse cx="35" cy="115" rx="8" ry="12" fill="#708090" />
      <ellipse cx="85" cy="115" rx="8" ry="12" fill="#708090" />

      <g transform="translate(60, 50)">
        <Eye cx="-8" cy="-4" mood={mood} size="4" />
        <Eye cx="8" cy="-4" mood={mood} size="4" />
        <Mouth cx="0" cy="8" mood={mood} />
        {mood === "happy" && <Blush cx={60} cy={50} r={2.5} />}
        {mood === "sleeping" && <ZZZ x={70} y={30} />}
      </g>
    </svg>
  );
}
