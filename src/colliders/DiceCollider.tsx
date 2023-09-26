import { DiceType } from "../types/DiceType";
import { D6Collider } from "./D6Collider";
import { D8Collider } from "./D8Collider";

export function DiceCollider({ diceType }: { diceType: DiceType }) {
  switch (diceType) {
    case "D6":
      return <D6Collider />;
    case "D8":
      return <D8Collider />;
    default:
      throw Error(`Dice type ${diceType} error: not implemented`);
  }
}
