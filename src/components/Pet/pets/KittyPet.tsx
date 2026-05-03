import { Mood } from "../PetState";
import { Eye, Mouth, ZZZ, Blush } from "./AnimalHelpers";

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
      <circle cx="60" cy="50" r="32" fill="#f4a460" />
      <circle cx="60" cy="95" r="28" fill="#f4a460" />

      <polygon points="35,20 30,5 40,18" fill="#f4a460" />
      <polygon points="85,20 90,5 80,18" fill="#f4a460" />
      <polygon points="37,16 35,8 40,15" fill="#ffb6d9" />
      <polygon points="83,16 85,8 80,15" fill="#ffb6d9" />

      <polygon points="60,48 53,55 67,55" fill="#ffb6d9" />

      <line x1="32" y1="50" x2="18" y2="48" stroke="#333" strokeWidth="1.5" />
      <line x1="32" y1="55" x2="18" y2="58" stroke="#333" strokeWidth="1.5" />
      <line x1="32" y1="45" x2="18" y2="42" stroke="#333" strokeWidth="1.5" />

      <line x1="88" y1="50" x2="102" y2="48" stroke="#333" strokeWidth="1.5" />
      <line x1="88" y1="55" x2="102" y2="58" stroke="#333" strokeWidth="1.5" />
      <line x1="88" y1="45" x2="102" y2="42" stroke="#333" strokeWidth="1.5" />

      <path d="M 45 130 Q 35 125 30 140" stroke="#f4a460" strokeWidth="4" fill="none" />

      <g transform="translate(60, 50)">
        <Eye cx="-9" cy="-6" mood={mood} size="5" />
        <Eye cx="9" cy="-6" mood={mood} size="5" />
        <Mouth cx="0" cy="6" mood={mood} />
        {mood === "happy" && <Blush cx={60} cy={50} r={3} />}
        {mood === "sleeping" && <ZZZ x={75} y={30} />}
      </g>
    </svg>
  );
}
