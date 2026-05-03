import { useState, useEffect } from "react";
import { Stage, Mood } from "./PetState";
import { getSprite } from "./PetSprites";

interface PetSpriteProps {
  stage: Stage;
  mood: Mood;
  size?: number;
}

export function PetSprite({ stage, mood, size = 24 }: PetSpriteProps) {
  const [frameIdx, setFrameIdx] = useState(0);
  const sprite = getSprite(stage, mood);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIdx((prev) => (prev + 1) % sprite.frames.length);
    }, 400);
    return () => clearInterval(interval);
  }, [sprite.frames.length]);

  const frame = sprite.frames[frameIdx];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(8, ${size}px)`,
        gap: 0,
        margin: "0 auto",
      }}
    >
      {frame.map((row, rowIdx) =>
        row.map((cell, colIdx) => (
          <div
            key={`${rowIdx}-${colIdx}`}
            style={{
              width: size,
              height: size,
              backgroundColor: cell === 0 ? "transparent" : sprite.palette[cell] || "transparent",
            }}
          />
        ))
      )}
    </div>
  );
}
