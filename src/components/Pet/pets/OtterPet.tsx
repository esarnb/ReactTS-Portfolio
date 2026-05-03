// @ts-nocheck
import { Mood } from "../PetState";
import { Eye, Mouth, ZZZ } from "./AnimalHelpers";

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
      <defs>
        <radialGradient id="otterHead" cx="38%" cy="32%" r="68%">
          <stop offset="0%" stopColor="#c49868" />
          <stop offset="55%" stopColor="#a06838" />
          <stop offset="100%" stopColor="#6a3e18" />
        </radialGradient>
        <radialGradient id="otterBody" cx="36%" cy="28%" r="72%">
          <stop offset="0%" stopColor="#aa7040" />
          <stop offset="100%" stopColor="#5c3018" />
        </radialGradient>
        <radialGradient id="otterFace" cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#ddb888" />
          <stop offset="100%" stopColor="#c09060" />
        </radialGradient>
      </defs>

      {/* Flat tail */}
      <path
        d="M 46 130 C 38 138 36 148 50 148 C 70 148 84 144 84 136 C 84 128 72 126 60 126 C 52 126 48 128 46 130 Z"
        fill="#7a4820"
      />
      <path
        d="M 50 134 C 50 140 62 144 74 140"
        fill="none" stroke="#5c3010" strokeWidth="1.5" opacity="0.6"
      />

      {/* Body */}
      <ellipse cx="60" cy="96" rx="32" ry="38" fill="url(#otterBody)" />

      {/* Belly lighter patch */}
      <ellipse cx="60" cy="104" rx="18" ry="26" fill="#d4a870" opacity="0.75" />

      {/* Front paws/arms holding a rock when happy */}
      {mood === "happy" ? (
        <>
          <ellipse cx="36" cy="106" rx="10" ry="8" fill="#a06838" transform="rotate(-20 36 106)" />
          <ellipse cx="84" cy="106" rx="10" ry="8" fill="#a06838" transform="rotate(20 84 106)" />
          <ellipse cx="60" cy="116" rx="14" ry="9" fill="#888880" />
          <ellipse cx="60" cy="114" rx="10" ry="6" fill="#aaa898" />
        </>
      ) : (
        <>
          <ellipse cx="34" cy="110" rx="10" ry="7" fill="#aa7040" />
          <ellipse cx="86" cy="110" rx="10" ry="7" fill="#aa7040" />
        </>
      )}

      {/* Paw toe lines */}
      <line x1="29" y1="112" x2="27" y2="116" stroke="#6a3e18" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="34" y1="114" x2="34" y2="118" stroke="#6a3e18" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="39" y1="112" x2="41" y2="116" stroke="#6a3e18" strokeWidth="1.3" strokeLinecap="round" />

      {/* Small rounded ears */}
      <circle cx="40" cy="34" r="10" fill="#a06838" />
      <circle cx="80" cy="34" r="10" fill="#a06838" />
      <circle cx="40" cy="34" r="6" fill="#c49060" />
      <circle cx="80" cy="34" r="6" fill="#c49060" />

      {/* Head */}
      <circle cx="60" cy="50" r="28" fill="url(#otterHead)" />

      {/* Lighter face mask */}
      <ellipse cx="60" cy="56" rx="18" ry="16" fill="url(#otterFace)" />

      {/* Nose - small dark button */}
      <ellipse cx="60" cy="50" rx="5" ry="4" fill="#2c1808" />
      <circle cx="62" cy="49" r="1.2" fill="#f0f0f0" opacity="0.65" />

      {/* Whiskers */}
      <line x1="63" y1="52" x2="100" y2="47" stroke="#c8c0b0" strokeWidth="0.9" />
      <line x1="63" y1="54" x2="100" y2="54" stroke="#c8c0b0" strokeWidth="0.9" />
      <line x1="63" y1="56" x2="100" y2="61" stroke="#c8c0b0" strokeWidth="0.9" />
      <line x1="57" y1="52" x2="20" y2="47" stroke="#c8c0b0" strokeWidth="0.9" />
      <line x1="57" y1="54" x2="20" y2="54" stroke="#c8c0b0" strokeWidth="0.9" />
      <line x1="57" y1="56" x2="20" y2="61" stroke="#c8c0b0" strokeWidth="0.9" />

      <Mouth cx={60} cy={60} mood={mood} />

      {/* Eyes: sclera, dark warm iris */}
      <circle cx={46} cy={44} r={8} fill="#f0ece0" />
      <circle cx={46} cy={44} r={5.5} fill="#5a3010" />
      <Eye cx={46} cy={44} mood={mood} size={4} />

      <circle cx={74} cy={44} r={8} fill="#f0ece0" />
      <circle cx={74} cy={44} r={5.5} fill="#5a3010" />
      <Eye cx={74} cy={44} mood={mood} size={4} />

      {mood === "happy" && (
        <>
          <circle cx={41} cy={58} r={4.5} fill="#ffb6c1" opacity="0.6" />
          <circle cx={79} cy={58} r={4.5} fill="#ffb6c1" opacity="0.6" />
        </>
      )}
      {mood === "sleeping" && <ZZZ x={78} y={28} />}
    </svg>
  );
}
