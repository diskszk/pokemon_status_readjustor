import { useAtomValue } from "jotai";
import { useMemo } from "react";

import { MAX_EFFORT_VALUE, MINIMUM_EFFORT_VALUE } from "@/features/status/constants";
import type { StatusSpecies, StatusType } from "@/types";

import { calculators } from "../../../logic";
import { useUserInputValues } from "../../hooks";
import { controllersReducerAtom } from "../../reducers";
import { InputField } from "../ui";

import type { AriaLabel } from "./types";

type Props = {
  ariaLabel: AriaLabel<"実数値">;
  baseStat: number;
  statusType: StatusType;
  speciesName: StatusSpecies;
};

export function ActualValueInput({
  ariaLabel,
  baseStat,
  statusType,
  speciesName,
}: Props) {
  const controller = useAtomValue(controllersReducerAtom);
  const { updateActualValueInput } = useUserInputValues();

  const minimumActualValue = useMemo(() =>
    calculators.actualValue(speciesName, {
      baseStat,
      individualValue: controller.individualValue,
      effortValue: MINIMUM_EFFORT_VALUE,
      level: controller.level,
      natureValue: controller.natureValue,
    }), [baseStat, controller.individualValue, controller.level, controller.natureValue, speciesName]);

  const maximumActualValue = useMemo(() =>
    calculators.actualValue(speciesName, {
      baseStat,
      individualValue: controller.individualValue,
      effortValue: MAX_EFFORT_VALUE,
      level: controller.level,
      natureValue: controller.natureValue,
    }), [baseStat, controller.individualValue, controller.level, controller.natureValue, speciesName]);

  return (
    <InputField
      aria-label={ariaLabel}
      defaultValue={controller.actualValue}
      max={maximumActualValue}
      min={minimumActualValue}
      onChange={(_, value) => {
        updateActualValueInput({ type: statusType, value });
      }}
      value={controller.actualValue}
    />
  );
}
