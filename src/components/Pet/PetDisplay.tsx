import { Mood, PetType, Stage } from "./PetState";
import { DragonPet } from "./pets/DragonPet";
import { PenguinPet } from "./pets/PenguinPet";
import { KittyPet } from "./pets/KittyPet";
import { PuppyPet } from "./pets/PuppyPet";
import { TurtlePet } from "./pets/TurtlePet";
import { OtterPet } from "./pets/OtterPet";
import { WalrusPet } from "./pets/WalrusPet";
import { SealPet } from "./pets/SealPet";
import { BearCubPet } from "./pets/BearCubPet";
import { FrierenPet } from "./pets/FrierenPet";
import { ParrotPet } from "./pets/ParrotPet";

interface PetDisplayProps {
  petType: PetType;
  mood: Mood;
  stage?: Stage;
  size?: number;
}

export function PetDisplay({ petType, mood, stage, size = 120 }: PetDisplayProps) {
  switch (petType) {
    case "dragon":
      return <DragonPet mood={mood} stage={stage || "egg"} size={size} />;
    case "penguin":
      return <PenguinPet mood={mood} size={size} />;
    case "kitty":
      return <KittyPet mood={mood} size={size} />;
    case "puppy":
      return <PuppyPet mood={mood} size={size} />;
    case "turtle":
      return <TurtlePet mood={mood} size={size} />;
    case "otter":
      return <OtterPet mood={mood} size={size} />;
    case "walrus":
      return <WalrusPet mood={mood} size={size} />;
    case "seal":
      return <SealPet mood={mood} size={size} />;
    case "bearcub":
      return <BearCubPet mood={mood} size={size} />;
    case "frieren":
      return <FrierenPet mood={mood} size={size} />;
    case "parrot":
      return <ParrotPet mood={mood} size={size} />;
    default:
      return <DragonPet mood={mood} stage={stage || "egg"} size={size} />;
  }
}
