import { Mood } from "../PetState";
import { Eye, Mouth, ZZZ, Blush } from "./AnimalHelpers";

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
      <circle cx="60" cy="50" r="30" fill="#d4a574" />
      <circle cx="60" cy="100" r="28" fill="#d4a574" />

      <ellipse cx="32" cy="25" rx="12" ry="22" fill="#b8956a" />
      <ellipse cx="88" cy="25" rx="12" ry="22" fill="#b8956a" />

      <circle cx="60" cy="38" r="8" fill="#2c2c2c" />

      <polygon points="58,50 55,65 65,65 62,50" fill="#d4a574" />
      <path d="M 60 130 L 58 145 L 62 145 Z" fill="#b8956a" />

      <g transform="translate(60, 50)">
        <Eye cx="-9" cy="-8" mood={mood} size="5" />
        <Eye cx="9" cy="-8" mood={mood} size="5" />
        <Mouth cx="0" cy="8" mood={mood} />
        {mood === "happy" && <Blush cx={60} cy={50} r={3} />}
        {mood === "sleeping" && <ZZZ x={75} y={30} />}
      </g>
    </svg>
  );
}
