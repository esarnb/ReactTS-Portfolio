// @ts-nocheck
import { Mood } from "../PetState";

interface EyeProps {
  cx: number;
  cy: number;
  mood: Mood;
  size?: number;
}

export function Eye({ cx, cy, mood, size = 5 }: EyeProps) {
  if (mood === "sleeping") {
    return <line x1={cx - 4} y1={cy} x2={cx + 4} y2={cy} stroke="currentColor" strokeWidth="2" />;
  }
  if (mood === "happy") {
    return (
      <path
        d={`M ${cx - 4} ${cy} Q ${cx} ${cy + 3} ${cx + 4} ${cy}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    );
  }
  if (mood === "sad") {
    return (
      <path
        d={`M ${cx - 4} ${cy} Q ${cx} ${cy - 3} ${cx + 4} ${cy}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    );
  }
  if (mood === "hungry") {
    return <circle cx={cx} cy={cy} r={size + 1} fill="currentColor" />;
  }
  return <circle cx={cx} cy={cy} r={size} fill="currentColor" />;
}

interface MouthProps {
  cx: number;
  cy: number;
  mood: Mood;
}

export function Mouth({ cx, cy, mood }: MouthProps) {
  if (mood === "happy") {
    return (
      <path
        d={`M ${cx - 6} ${cy} Q ${cx} ${cy + 4} ${cx + 6} ${cy}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    );
  }
  if (mood === "sad") {
    return (
      <path
        d={`M ${cx - 6} ${cy} Q ${cx} ${cy - 3} ${cx + 6} ${cy}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    );
  }
  if (mood === "hungry") {
    return <ellipse cx={cx} cy={cy} rx="3" ry="5" fill="currentColor" />;
  }
  if (mood === "sleeping") {
    return null;
  }
  return <line x1={cx - 4} y1={cy} x2={cx + 4} y2={cy} stroke="currentColor" strokeWidth="1.5" />;
}

export function ZZZ({ x = 90, y = 20 }: { x?: number; y?: number }) {
  return (
    <g fontSize="12" fontWeight="bold" fill="currentColor">
      <text x={x} y={y}>
        Z
      </text>
      <text x={x + 12} y={y - 8}>
        Z
      </text>
      <text x={x + 24} y={y - 16}>
        Z
      </text>
    </g>
  );
}

export function Blush({ cx, cy, r = 3 }: { cx: number; cy: number; r?: number }) {
  return (
    <>
      <circle cx={cx - 18} cy={cy + 8} r={r} fill="#ffb6c1" opacity="0.6" />
      <circle cx={cx + 18} cy={cy + 8} r={r} fill="#ffb6c1" opacity="0.6" />
    </>
  );
}
