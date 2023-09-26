import { DiceStyle } from "../types/DiceStyle";
import { ShiverMaterial } from "./shiver/ShiverMaterial";

export function DiceMaterial({ diceStyle }: { diceStyle: DiceStyle }) {
  switch (diceStyle) {
    case "SHIVER":
      return <ShiverMaterial />;
    default:
      throw Error(`Dice style ${diceStyle} error: not implemented`);
  }
}
