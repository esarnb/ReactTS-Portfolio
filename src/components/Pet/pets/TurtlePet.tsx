import { Mood } from "../PetState";
import { Eye, Mouth, ZZZ, Blush } from "./AnimalHelpers";

interface TurtlePetProps {
  mood: Mood;
  size?: number;
}

export function TurtlePet({ mood, size = 120 }: TurtlePetProps) {
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
    <svg viewBox="0 0 120 130" width={size} height={(size * 130) / 120} className={animClass}>
      <ellipse cx="60" cy="70" rx="40" ry="32" fill="#4a7c59" stroke="#2d5016" strokeWidth="2" />

      <path d="M 30 70 Q 25 75 20 75" stroke="#2d5016" strokeWidth="2" fill="none" />
      <path d="M 90 70 Q 95 75 100 75" stroke="#2d5016" strokeWidth="2" fill="none" />
      <path d="M 45 95 Q 40 105 35 110" stroke="#2d5016" strokeWidth="2" fill="none" />
      <path d="M 75 95 Q 80 105 85 110" stroke="#2d5016" strokeWidth="2" fill="none" />

      <line x1="35" y1="50" x2="50" y2="50" stroke="#2d5016" strokeWidth="2" />
      <line x1="70" y1="50" x2="85" y2="50" stroke="#2d5016" strokeWidth="2" />
      <line x1="40" y1="60" x2="52" y2="62" stroke="#2d5016" strokeWidth="2" />
      <line x1="80" y1="60" x2="68" y2="62" stroke="#2d5016" strokeWidth="2" />

      <circle cx="60" cy="45" r="18" fill="#4a7c59" stroke="#2d5016" strokeWidth="1.5" />

      <g transform="translate(60, 45)">
        <Eye cx="-6" cy="-4" mood={mood} size="3.5" />
        <Eye cx="6" cy="-4" mood={mood} size="3.5" />
        <Mouth cx="0" cy="5" mood={mood} />
        {mood === "happy" && <Blush cx={60} cy={45} r={2} />}
        {mood === "sleeping" && <ZZZ x={75} y={25} />}
      </g>
    </svg>
  );
}
