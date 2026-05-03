// @ts-nocheck
import { Mood } from "../PetState";
import { Eye, Mouth, ZZZ } from "./AnimalHelpers";

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
      <defs>
        <radialGradient id="shellBase" cx="42%" cy="32%" r="66%">
          <stop offset="0%" stopColor="#a87840" />
          <stop offset="55%" stopColor="#7a5228" />
          <stop offset="100%" stopColor="#4a3010" />
        </radialGradient>
        <radialGradient id="shellCenter" cx="50%" cy="42%" r="55%">
          <stop offset="0%" stopColor="#c09050" />
          <stop offset="100%" stopColor="#8a5e30" />
        </radialGradient>
        <radialGradient id="turtleSkin" cx="42%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#8aaa5a" />
          <stop offset="100%" stopColor="#527838" />
        </radialGradient>
      </defs>

      {/* Hind legs */}
      <ellipse cx="30" cy="102" rx="12" ry="7" fill="url(#turtleSkin)" transform="rotate(-20 30 102)" />
      <ellipse cx="90" cy="102" rx="12" ry="7" fill="url(#turtleSkin)" transform="rotate(20 90 102)" />

      {/* Tail */}
      <path d="M 58 110 Q 55 122 52 126" fill="none" stroke="#5a8040" strokeWidth="5" strokeLinecap="round" />

      {/* Shell */}
      <ellipse cx="60" cy="78" rx="42" ry="34" fill="url(#shellBase)" />

      {/* Shell scute pattern - large central scute */}
      <ellipse cx="60" cy="75" rx="18" ry="15" fill="url(#shellCenter)" />

      {/* Shell scute borders (ridges) */}
      <ellipse cx="60" cy="75" rx="18" ry="15" fill="none" stroke="#4a3010" strokeWidth="1.5" />

      {/* Lateral scutes */}
      <ellipse cx="36" cy="70" rx="10" ry="9" fill="#9a6c38" stroke="#4a3010" strokeWidth="1.2" />
      <ellipse cx="84" cy="70" rx="10" ry="9" fill="#9a6c38" stroke="#4a3010" strokeWidth="1.2" />
      <ellipse cx="34" cy="88" rx="9" ry="7" fill="#8a5e2c" stroke="#4a3010" strokeWidth="1.2" />
      <ellipse cx="86" cy="88" rx="9" ry="7" fill="#8a5e2c" stroke="#4a3010" strokeWidth="1.2" />

      {/* Posterior scutes */}
      <ellipse cx="48" cy="100" rx="9" ry="6" fill="#7a5228" stroke="#4a3010" strokeWidth="1.2" />
      <ellipse cx="72" cy="100" rx="9" ry="6" fill="#7a5228" stroke="#4a3010" strokeWidth="1.2" />

      {/* Shell rim */}
      <ellipse cx="60" cy="78" rx="42" ry="34" fill="none" stroke="#3a2408" strokeWidth="2.5" />

      {/* Shell ridge lines across surface */}
      <path d="M 40 55 Q 60 48 80 55" fill="none" stroke="#4a3010" strokeWidth="1" opacity="0.6" />
      <path d="M 22 72 Q 60 62 98 72" fill="none" stroke="#4a3010" strokeWidth="1" opacity="0.6" />

      {/* Front legs */}
      <ellipse cx="26" cy="82" rx="11" ry="7" fill="url(#turtleSkin)" transform="rotate(-35 26 82)" />
      <ellipse cx="94" cy="82" rx="11" ry="7" fill="url(#turtleSkin)" transform="rotate(35 94 82)" />

      {/* Front leg toe lines */}
      <line x1="18" y1="78" x2="14" y2="74" stroke="#3a5820" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="20" y1="74" x2="17" y2="70" stroke="#3a5820" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="24" y1="72" x2="22" y2="67" stroke="#3a5820" strokeWidth="1.3" strokeLinecap="round" />

      <line x1="102" y1="78" x2="106" y2="74" stroke="#3a5820" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="100" y1="74" x2="103" y2="70" stroke="#3a5820" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="96" y1="72" x2="98" y2="67" stroke="#3a5820" strokeWidth="1.3" strokeLinecap="round" />

      {/* Neck */}
      <ellipse cx="60" cy="56" rx="10" ry="8" fill="url(#turtleSkin)" />

      {/* Head */}
      <circle cx="60" cy="42" r="20" fill="url(#turtleSkin)" />

      {/* Head markings - yellow-green stripe */}
      <path d="M 46 38 Q 60 34 74 38" fill="none" stroke="#c8d840" strokeWidth="2" opacity="0.6" />

      {/* Nostril dots */}
      <circle cx="57" cy="40" r="1.2" fill="#3a5820" />
      <circle cx="63" cy="40" r="1.2" fill="#3a5820" />

      <Mouth cx={60} cy={47} mood={mood} />

      {/* Eyes: light sclera, amber iris */}
      <circle cx={50} cy={37} r={6.5} fill="#f0ede0" />
      <circle cx={50} cy={37} r={4.5} fill="#c8a028" />
      <Eye cx={50} cy={37} mood={mood} size={3.5} />

      <circle cx={70} cy={37} r={6.5} fill="#f0ede0" />
      <circle cx={70} cy={37} r={4.5} fill="#c8a028" />
      <Eye cx={70} cy={37} mood={mood} size={3.5} />

      {mood === "happy" && (
        <>
          <circle cx={45} cy={46} r={3.5} fill="#ffb6c1" opacity="0.6" />
          <circle cx={75} cy={46} r={3.5} fill="#ffb6c1" opacity="0.6" />
        </>
      )}
      {mood === "sleeping" && <ZZZ x={76} y={20} />}
    </svg>
  );
}
