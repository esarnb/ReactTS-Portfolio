import { Mood, Stage } from "../PetState";
import { PetSprite } from "../PetSprite";

interface DragonPetProps {
  mood: Mood;
  stage: Stage;
  size?: number;
}

export function DragonPet({ mood, stage, size = 120 }: DragonPetProps) {
  const cellSize = size / 8;
  return <PetSprite stage={stage} mood={mood} size={cellSize} />;
}
