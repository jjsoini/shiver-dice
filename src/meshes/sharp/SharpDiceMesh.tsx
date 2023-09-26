import React from "react";
import { DiceType } from "../../types/DiceType";
import { D6 } from "./D6";
import { D8 } from "./D8";

type Props = JSX.IntrinsicElements["group"] & { diceType: DiceType };

export const SharpDiceMesh = React.forwardRef<THREE.Group, Props>(
  ({ diceType, ...props }, ref) => {
    switch (diceType) {
      case "D6":
        return <D6 ref={ref} {...props} />;
      case "D8":
        return <D8 ref={ref} {...props} />;
      default:
        throw Error(`Dice type ${diceType} error: not implemented`);
    }
  }
);
