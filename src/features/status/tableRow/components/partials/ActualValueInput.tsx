import { useAtom } from "jotai";

import { controllersReducerAtom } from "@/features/status/reducers";
import type { StatusSpecies } from "@/types";

import { calculators } from "../../../logic";
import { InputField } from "../ui";

import type { AriaLabel } from "./types";

type Props = {
  ariaLabel: AriaLabel<"実数値">;
  baseStat: number;
  level: number;
  speciesName: StatusSpecies;
};

export function ActualValueInput({ ariaLabel, baseStat, level, speciesName }: Props) {
  const [controller, dispatch] = useAtom(controllersReducerAtom);

  const minimumActualValue = calculators.actualValue(speciesName, {
    baseStat,
    individualValue: 31,
    effortValue: 0,
    level,
    natureValue: 1,
  });

  const maximumActualValue = calculators.actualValue(speciesName, {
    baseStat,
    individualValue: 31,
    effortValue: 252,
    level,
    natureValue: 1,
  });

  return (
    <InputField
      aria-label={ariaLabel}
      defaultValue={controller.actualValue}
      max={maximumActualValue}
      min={minimumActualValue}
      onChange={(_, value) => {
        dispatch({ type: "UPDATE_ACTUAL_VALUE_ACTION", payload: value });
      }}
      value={controller.actualValue}
    />
  );
}
