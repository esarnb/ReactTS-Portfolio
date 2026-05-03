// @ts-nocheck
import { Mood } from "../PetState";
import { ZZZ } from "./AnimalHelpers";

interface FrierenPetProps {
  mood: Mood;
  size?: number;
}

export function FrierenPet({ mood, size = 120 }: FrierenPetProps) {
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

  const leftUpperLid =
    mood === "sleeping" ? "M 46 47 L 58 47"
    : mood === "happy"  ? "M 46 50 Q 52 42 58 47"
    : mood === "sad"    ? "M 46 44 Q 52 50 58 46"
    :                     "M 46 48 Q 52 42 58 48";

  const rightUpperLid =
    mood === "sleeping" ? "M 66 47 L 78 47"
    : mood === "happy"  ? "M 66 50 Q 72 42 78 47"
    : mood === "sad"    ? "M 66 44 Q 72 50 78 46"
    :                     "M 66 48 Q 72 42 78 48";

  const getMouthPath = () => {
    if (mood === "happy")   return "M 58 56 Q 62 60 66 56";
    if (mood === "sad")     return "M 58 56 Q 62 53 66 56";
    if (mood === "hungry")  return "M 58 57 Q 62 63 66 57";
    if (mood === "sleeping") return "";
    return "M 58 56 L 66 56";
  };
  const mouthPath = getMouthPath();

  return (
    <svg viewBox="0 0 120 180" width={size} height={(size * 180) / 120} className={animClass}>
      <defs>
        <radialGradient id="frierenSkin" cx="42%" cy="36%" r="66%">
          <stop offset="0%" stopColor="#faf0e8" />
          <stop offset="65%" stopColor="#f0d8c4" />
          <stop offset="100%" stopColor="#dfc0a0" />
        </radialGradient>
        <radialGradient id="frierenHair" cx="36%" cy="26%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#e8eef5" />
          <stop offset="100%" stopColor="#c4d0df" />
        </radialGradient>
        <radialGradient id="frierenCape" cx="34%" cy="24%" r="72%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#f0f2f8" />
          <stop offset="100%" stopColor="#d4d8e8" />
        </radialGradient>
        <radialGradient id="frierenEyeL" cx="36%" cy="30%" r="66%">
          <stop offset="0%" stopColor="#70e078" />
          <stop offset="50%" stopColor="#28a030" />
          <stop offset="100%" stopColor="#0e5818" />
        </radialGradient>
        <radialGradient id="frierenEyeR" cx="36%" cy="30%" r="66%">
          <stop offset="0%" stopColor="#70e078" />
          <stop offset="50%" stopColor="#28a030" />
          <stop offset="100%" stopColor="#0e5818" />
        </radialGradient>
        <radialGradient id="frierenGem" cx="32%" cy="28%" r="64%">
          <stop offset="0%" stopColor="#ff7070" />
          <stop offset="55%" stopColor="#c41020" />
          <stop offset="100%" stopColor="#7a0010" />
        </radialGradient>
        <linearGradient id="frierenRod" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5a2808" />
          <stop offset="35%" stopColor="#a85e28" />
          <stop offset="65%" stopColor="#c87838" />
          <stop offset="100%" stopColor="#5a2808" />
        </linearGradient>
        <linearGradient id="frierenBoot" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9a6828" />
          <stop offset="100%" stopColor="#5a3a10" />
        </linearGradient>
      </defs>

      {/* ===== STAFF ===== */}
      {/* Rod */}
      <rect x="93.5" y="34" width="5" height="124" rx="2.5" fill="url(#frierenRod)" />
      <rect x="94.5" y="34" width="2" height="124" rx="1" fill="#e8b870" opacity="0.35" />

      {/* Rune marks on rod */}
      <line x1="96" y1="56" x2="96" y2="64" stroke="#d4a020" strokeWidth="1.5" opacity="0.6" />
      <line x1="93" y1="60" x2="99" y2="60" stroke="#d4a020" strokeWidth="1.5" opacity="0.6" />
      <line x1="96" y1="88" x2="96" y2="96" stroke="#d4a020" strokeWidth="1.2" opacity="0.45" />
      <line x1="94" y1="92" x2="98" y2="92" stroke="#d4a020" strokeWidth="1.2" opacity="0.45" />

      {/* Staff binding wrap */}
      <rect x="91" y="30" width="11" height="4.5" rx="2.2" fill="#e8c040" stroke="#c8a018" strokeWidth="0.8" />

      {/* Gem housing – hexagonal */}
      <path d="M 88 14 L 96 7 L 104 14 L 104 26 L 96 33 L 88 26 Z"
            fill="#c8980c" stroke="#a87808" strokeWidth="1" />
      <path d="M 89.5 15 L 96 9 L 102.5 15 L 102.5 25 L 96 31 L 89.5 25 Z"
            fill="url(#frierenGem)" />
      {/* Gem facets */}
      <polygon points="96,9 102.5,15 96,16" fill="#ff9090" opacity="0.6" />
      <polygon points="89.5,15 96,16 89.5,25" fill="#800010" opacity="0.35" />
      <circle cx="92.5" cy="14" r="1.8" fill="#ffb0b0" opacity="0.75" />

      {/* Gem glow */}
      <circle cx="96" cy="20" r="10" fill="#c41020" opacity="0.08" />

      {/* ===== BODY ===== */}
      {/* Legs */}
      <rect x="53" y="96" width="7" height="24" rx="1" fill="#181818" />
      <rect x="64" y="96" width="7" height="24" rx="1" fill="#181818" />
      <rect x="54" y="96" width="2.5" height="24" rx="0.5" fill="#383838" opacity="0.5" />
      <rect x="65" y="96" width="2.5" height="24" rx="0.5" fill="#383838" opacity="0.5" />

      {/* Boots */}
      <path d="M 51 116 C 46 118 42 122 40 128 L 66 128 L 64 120 L 60 118 L 51 116 Z"
            fill="url(#frierenBoot)" />
      <path d="M 63 116 C 68 118 72 122 74 128 L 48 128 L 50 120 L 54 118 L 63 116 Z"
            fill="url(#frierenBoot)" />
      <ellipse cx="53" cy="128" rx="13" ry="5.5" fill="#7a5018" />
      <ellipse cx="61" cy="128" rx="13" ry="5.5" fill="#7a5018" />
      {/* Boot highlight */}
      <path d="M 42 124 Q 52 120 64 124" fill="none" stroke="#b88030" strokeWidth="1.2" opacity="0.7" />

      {/* Skirt */}
      <path d="M 43 88 Q 60 84 79 88 L 82 110 Q 60 116 38 110 Z"
            fill="url(#frierenCape)" stroke="#d4b818" strokeWidth="1" />
      {/* Skirt pleats */}
      <path d="M 52 90 L 50 110" fill="none" stroke="#c4c8d8" strokeWidth="1.2" opacity="0.55" />
      <path d="M 60 88 L 60 112" fill="none" stroke="#c4c8d8" strokeWidth="1.2" opacity="0.55" />
      <path d="M 68 90 L 70 110" fill="none" stroke="#c4c8d8" strokeWidth="1.2" opacity="0.55" />

      {/* Left cape/cloak */}
      <path d="M 43 63 C 37 76 34 94 36 122 C 40 124 46 122 48 112 C 50 98 48 78 50 68 Z"
            fill="url(#frierenCape)" />
      <path d="M 43 63 C 39 76 36 95 38 122" fill="none" stroke="#d4a818" strokeWidth="1" opacity="0.65" />
      <path d="M 46 70 C 42 86 42 102 44 118" fill="none" stroke="#d0d4e2" strokeWidth="1.5" opacity="0.45" />

      {/* Right cape/cloak */}
      <path d="M 79 63 C 85 76 88 94 86 122 C 82 124 76 122 74 112 C 72 98 74 78 72 68 Z"
            fill="url(#frierenCape)" />
      <path d="M 79 63 C 83 76 86 95 84 122" fill="none" stroke="#d4a818" strokeWidth="1" opacity="0.65" />
      <path d="M 76 70 C 80 86 80 102 78 118" fill="none" stroke="#d0d4e2" strokeWidth="1.5" opacity="0.45" />

      {/* Cape brooch */}
      <circle cx="61" cy="69" r="5.5" fill="#c81020" stroke="#e8c040" strokeWidth="1.2" />
      <circle cx="61" cy="69" r="3.5" fill="#e82838" />
      <circle cx="59.5" cy="67.5" r="1.4" fill="#ffaaaa" opacity="0.8" />

      {/* Torso */}
      <rect x="50" y="70" width="22" height="20" rx="3" fill="url(#frierenCape)" stroke="#d4b818" strokeWidth="0.9" />
      {/* Torso fold shadow */}
      <path d="M 58 70 L 58 90" fill="none" stroke="#c8ccda" strokeWidth="1" opacity="0.4" />

      {/* Striped collar */}
      <rect x="54" y="67.5" width="3.5" height="5.5" rx="0.8" fill="#181818" />
      <rect x="57.5" y="67.5" width="3.5" height="5.5" rx="0.8" fill="#f5f5f5" />
      <rect x="61" y="67.5" width="3.5" height="5.5" rx="0.8" fill="#181818" />
      <rect x="64.5" y="67.5" width="3.5" height="5.5" rx="0.8" fill="#f5f5f5" />

      {/* Gold sleeve cuffs */}
      <rect x="47" y="78" width="4.5" height="10" rx="2.2" fill="#e8c040" stroke="#c0a018" strokeWidth="0.8" />
      <rect x="47.5" y="79.5" width="2" height="7" rx="1" fill="#f8d858" opacity="0.5" />
      <rect x="72" y="78" width="4.5" height="10" rx="2.2" fill="#e8c040" stroke="#c0a018" strokeWidth="0.8" />
      <rect x="72.5" y="79.5" width="2" height="7" rx="1" fill="#f8d858" opacity="0.5" />

      {/* Neck */}
      <rect x="57" y="65" width="8" height="8" rx="2" fill="#f0d8c4" />

      {/* ===== LEFT TWINTAIL (behind head) ===== */}
      <ellipse cx="33" cy="46" rx="14" ry="24" fill="url(#frierenHair)" />
      <path d="M 26 34 C 24 44 24 56 28 66" fill="none" stroke="#d4dce8" strokeWidth="1.5" opacity="0.65" />
      <path d="M 31 32 C 29 44 29 58 32 68" fill="none" stroke="#e8eef8" strokeWidth="1" opacity="0.5" />
      <path d="M 37 32 C 36 44 37 58 39 66" fill="none" stroke="#d4dce8" strokeWidth="1" opacity="0.4" />

      {/* ===== RIGHT TWINTAIL (behind head) ===== */}
      <ellipse cx="91" cy="46" rx="14" ry="24" fill="url(#frierenHair)" />
      <path d="M 98 34 C 100 44 100 56 96 66" fill="none" stroke="#d4dce8" strokeWidth="1.5" opacity="0.65" />
      <path d="M 93 32 C 95 44 95 58 92 68" fill="none" stroke="#e8eef8" strokeWidth="1" opacity="0.5" />
      <path d="M 87 32 C 86 44 87 58 85 66" fill="none" stroke="#d4dce8" strokeWidth="1" opacity="0.4" />

      {/* ===== HEAD ===== */}
      <circle cx="62" cy="46" r="27" fill="url(#frierenSkin)" />
      {/* Subtle jaw/chin shading */}
      <path d="M 44 56 Q 62 76 80 56" fill="none" stroke="#dfc0a0" strokeWidth="2" opacity="0.25" />

      {/* ===== ELF EARS ===== */}
      {/* Left ear */}
      <path d="M 37 38 C 26 26 24 10 28 4 C 34 16 37 28 37 38 Z"
            fill="#f0ceb0" stroke="#dfb898" strokeWidth="0.9" />
      <path d="M 37 38 C 29 26 28 12 31 6"
            fill="none" stroke="#f5dcc8" strokeWidth="1.5" opacity="0.65" />
      <path d="M 37 36 C 32 26 32 16 34 8 C 36 18 37 28 37 36 Z"
            fill="#e8c0a0" opacity="0.5" />

      {/* Right ear */}
      <path d="M 87 38 C 98 26 100 10 96 4 C 90 16 87 28 87 38 Z"
            fill="#f0ceb0" stroke="#dfb898" strokeWidth="0.9" />
      <path d="M 87 38 C 95 26 96 12 93 6"
            fill="none" stroke="#f5dcc8" strokeWidth="1.5" opacity="0.65" />
      <path d="M 87 36 C 92 26 92 16 90 8 C 88 18 87 28 87 36 Z"
            fill="#e8c0a0" opacity="0.5" />

      {/* Earrings */}
      <circle cx="36" cy="40" r="3" fill="#e8c040" stroke="#c0a018" strokeWidth="0.8" />
      <circle cx="36" cy="40" r="1.5" fill="#f8d858" />
      <ellipse cx="36" cy="49" rx="2.8" ry="5.5" fill="#c41e3a" stroke="#a01028" strokeWidth="0.7" />
      <circle cx="35" cy="46" r="1.2" fill="#e84060" opacity="0.75" />

      <circle cx="88" cy="40" r="3" fill="#e8c040" stroke="#c0a018" strokeWidth="0.8" />
      <circle cx="88" cy="40" r="1.5" fill="#f8d858" />
      <ellipse cx="88" cy="49" rx="2.8" ry="5.5" fill="#c41e3a" stroke="#a01028" strokeWidth="0.7" />
      <circle cx="87" cy="46" r="1.2" fill="#e84060" opacity="0.75" />

      {/* ===== BANGS ===== */}
      <path d="M 40 28 C 44 20 52 17 62 17 C 72 17 80 20 84 28 L 82 33 C 77 24 68 22 62 22 C 56 22 47 24 42 33 Z"
            fill="url(#frierenHair)" />
      {/* Bang strands */}
      <path d="M 46 20 C 47 30 47 36 45 42" fill="none" stroke="#d4dce8" strokeWidth="1.3" opacity="0.55" />
      <path d="M 56 18 C 56 28 56 36 55 42" fill="none" stroke="#e8f0f8" strokeWidth="1" opacity="0.45" />
      <path d="M 62 17 C 62 27 62 35 62 41" fill="none" stroke="#e8f0f8" strokeWidth="1" opacity="0.4" />
      <path d="M 70 18 C 70 28 70 36 69 42" fill="none" stroke="#e8f0f8" strokeWidth="1" opacity="0.45" />
      <path d="M 78 20 C 77 30 77 36 79 42" fill="none" stroke="#d4dce8" strokeWidth="1.3" opacity="0.55" />
      {/* Side bangs */}
      <path d="M 40 28 C 36 34 36 42 39 48" fill="#e4eaf5" stroke="none" opacity="0.9" />
      <path d="M 84 28 C 88 34 88 42 85 48" fill="#e4eaf5" stroke="none" opacity="0.9" />

      {/* Hairbands */}
      <circle cx="33" cy="26" r="5.5" fill="#f2f6fb" stroke="#d4a820" strokeWidth="1.5" />
      <circle cx="33" cy="26" r="3.2" fill="url(#frierenHair)" />
      <circle cx="91" cy="26" r="5.5" fill="#f2f6fb" stroke="#d4a820" strokeWidth="1.5" />
      <circle cx="91" cy="26" r="3.2" fill="url(#frierenHair)" />

      {/* ===== EYES ===== */}
      {/* Left eye white (almond) */}
      <path d="M 46 48 Q 52 43 58 48 Q 52 53 46 48 Z" fill="#f5f0e8" />
      {/* Left iris */}
      <circle cx="52" cy="47" r="5.2" fill="url(#frierenEyeL)" />
      {/* Left pupil */}
      <circle cx="52" cy="47" r="3.2" fill="#0e1c14" />
      {/* Left eye highlight */}
      <circle cx="53.8" cy="45.2" r="1.4" fill="#ffffff" opacity="0.9" />
      <circle cx="51" cy="48.5" r="0.7" fill="#ffffff" opacity="0.5" />
      {/* Left upper lash */}
      <path d={leftUpperLid} fill="none" stroke="#1c1008" strokeWidth="2.8" strokeLinecap="round" />
      {/* Left lower lash */}
      {mood !== "sleeping" && (
        <path d="M 47 49 Q 52 53 57 49" fill="none" stroke="#3a2818" strokeWidth="1" opacity="0.65" />
      )}

      {/* Right eye white (almond) */}
      <path d="M 66 48 Q 72 43 78 48 Q 72 53 66 48 Z" fill="#f5f0e8" />
      {/* Right iris */}
      <circle cx="72" cy="47" r="5.2" fill="url(#frierenEyeR)" />
      {/* Right pupil */}
      <circle cx="72" cy="47" r="3.2" fill="#0e1c14" />
      {/* Right eye highlight */}
      <circle cx="73.8" cy="45.2" r="1.4" fill="#ffffff" opacity="0.9" />
      <circle cx="71" cy="48.5" r="0.7" fill="#ffffff" opacity="0.5" />
      {/* Right upper lash */}
      <path d={rightUpperLid} fill="none" stroke="#1c1008" strokeWidth="2.8" strokeLinecap="round" />
      {mood !== "sleeping" && (
        <path d="M 67 49 Q 72 53 77 49" fill="none" stroke="#3a2818" strokeWidth="1" opacity="0.65" />
      )}

      {/* Eyebrows */}
      <path d="M 44 37 Q 50 34 57 36" fill="none" stroke="#4a3820" strokeWidth="2" strokeLinecap="round" />
      <path d="M 67 36 Q 74 34 80 37" fill="none" stroke="#4a3820" strokeWidth="2" strokeLinecap="round" />

      {/* Nose – very subtle, as in anime style */}
      <path d="M 60 54 Q 62 56 64 54" fill="none" stroke="#c8a888" strokeWidth="1.2" strokeLinecap="round" />

      {/* Mouth */}
      {mouthPath && (
        <path d={mouthPath} stroke="#b07060" strokeWidth="2" fill="none" strokeLinecap="round" />
      )}

      {mood === "happy" && (
        <>
          <circle cx="48" cy="53" r="4.5" fill="#ffb6c1" opacity="0.5" />
          <circle cx="76" cy="53" r="4.5" fill="#ffb6c1" opacity="0.5" />
        </>
      )}
      {mood === "sleeping" && <ZZZ x={82} y={20} />}
    </svg>
  );
}
