import { useState, useCallback, useEffect } from "react";

import type { StatusType } from "@/_types";
import { CURRENT, HP } from "@/features/constants";
import { useEffortValue, useErrorToast } from "@/features/hooks";
import { currentEffortValueAtom, adjustedEffortValueAtom } from "@/features/stores/effortValueAtom";

import { Presentation } from "./presentation";
import { MAX_EFFORT_VALUE, MAX_INDIVIDUAL_VALUE } from "../../constants";
import { calcHPActualValue } from "../../logic/calcHPActualValue";
import { calcHPEffortValue } from "../../logic/calcHPEffortValue";

import type { calcActualValue } from "../../logic/calcActualValue";
import type { MouseEventHandler } from "react";

type Props = {
  level: number;
  pokemonName: string;
  baseStat: number;
  statusType: StatusType;
};

export function HpStatusTableBody({
  baseStat,
  level,
  pokemonName,
  statusType,
}: Props) {
  const [individualValue, setIndividualValue] = useState(31);
  const effortValueAtom = statusType === CURRENT ? currentEffortValueAtom : adjustedEffortValueAtom;

  const { totalEffortValue, allEffortValue, updateEffortValue } = useEffortValue(effortValueAtom);

  const effortValue = allEffortValue.find((v) => v.type === HP);

  const { showErrorToast } = useErrorToast();
  if (!effortValue) {
    showErrorToast({
      description: "努力値が不正な値です。",
    });
    throw Error();
  }

  const [actualValue, setActualValue] = useState(calcHPActualValue({
    baseStat,
    individual: individualValue,
    effort: effortValue.value,
    level,
    pokemonName,
  }));

  const minimumActualValue = calcHPActualValue({
    baseStat,
    individual: individualValue,
    effort: 0,
    level,
    pokemonName,
  });

  const maximumActualValue = calcHPActualValue({
    baseStat,
    individual: individualValue,
    effort: 252,
    level,
    pokemonName,
  });

  const updateActualValue = useCallback((updateValue: Partial<typeof calcActualValue | typeof calcHPActualValue>) => {
    const newActualValue = calcHPActualValue({
      baseStat, individual: individualValue, effort: effortValue.value, level, pokemonName, ...updateValue,
    });

    setActualValue(newActualValue);
  }, [baseStat, effortValue.value, individualValue, level, pokemonName]);

  useEffect(() => {
    updateActualValue(level);
  }, [level, updateActualValue]);

  const handleChangeActualValue: (_: string, valueAsNumber: number) => void = useCallback((_, value) => {
    setActualValue((value));
    const newEffortValue = calcHPEffortValue({
      actual: value, level, baseStat, individual: individualValue,
    });
    updateEffortValue({ type: HP, value: newEffortValue });
  }, [baseStat, individualValue, level, updateEffortValue]);

  const handleChangeEffortValue: (_: string, valueAsNumber: number) => void = useCallback((_, value) => {
    updateEffortValue({ type: HP, value });

    updateActualValue({ effort: value });
  }, [updateActualValue, updateEffortValue]);

  const maximizeEffortValue: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    updateEffortValue({
      ...effortValue,
      value: MAX_EFFORT_VALUE,
    });
    updateActualValue({ effort: MAX_EFFORT_VALUE });
  }, [effortValue, updateActualValue, updateEffortValue]);

  const minimizeEffortValue: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    updateEffortValue({
      ...effortValue,
      value: 0,
    });
    updateActualValue({ effort: 0 });
  }, [effortValue, updateActualValue, updateEffortValue]);

  const handleChangeIndividualValue: (_: string, valueAsNumber: number) => void = useCallback((_, value) => {
    setIndividualValue((value));
    updateActualValue({ individual: value });
  }, [updateActualValue]);

  const maximizeIndividualValue: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    setIndividualValue(MAX_INDIVIDUAL_VALUE);
    updateActualValue({ individual: MAX_INDIVIDUAL_VALUE });
  }, [updateActualValue]);

  const minimizeIndividualValue: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    setIndividualValue(0);
    updateActualValue({ individual: 0 });
  }, [updateActualValue]);

  return (
    <Presentation
      actualValue={actualValue}
      effortValue={effortValue.value}
      handleChangeActualValue={handleChangeActualValue}
      handleChangeEffortValue={handleChangeEffortValue}
      handleChangeIndividualValue={handleChangeIndividualValue}
      individualValue={individualValue}
      maximizeEffortValue={maximizeEffortValue}
      maximizeIndividualValue={maximizeIndividualValue}
      maximumActualValue={maximumActualValue}
      minimizeEffortValue={minimizeEffortValue}
      minimizeIndividualValue={minimizeIndividualValue}
      minimumActualValue={minimumActualValue}
      speciesName={HP}
      totalEffortValue={totalEffortValue}
    />
  );
}
