import { useState, useCallback, useEffect } from "react";

import { currentEffortValueAtom, adjustedEffortValueAtom } from "@/atoms";
import { CURRENT, HP } from "@/constants";
import { useErrorToast } from "@/hooks";
import type { StatusType } from "@/types";

import { Presentation } from "./presentation";
import { MAX_EFFORT_VALUE, MAX_INDIVIDUAL_VALUE } from "./styleConfig";
import { useEffortValue } from "../../hooks";
import { calcHPActualValue } from "../../logic/calcHPActualValue";
import { calcHPEffortValue } from "../../logic/calcHPEffortValue";

import type { calcActualValue } from "../../logic/calcActualValue";
import type { MouseEventHandler } from "react";

type Props = {
  level: number;
  baseStat: number;
  statusType: StatusType;
};

export function HpStatusTableBody({
  baseStat,
  level,
  statusType,
}: Props) {
  const [individualValue, setIndividualValue] = useState(31);
  const effortValueAtom = statusType === CURRENT ? currentEffortValueAtom : adjustedEffortValueAtom;

  const { totalEffortValue, allEffortValue, updateEffortValue } = useEffortValue(effortValueAtom);

  const effortValue = allEffortValue.find((v) => v.name === HP);

  const { showErrorToast } = useErrorToast();
  if (!effortValue) {
    showErrorToast({
      description: "努力値が不正な値です。",
    });
    throw Error();
  }

  const [actualValue, setActualValue] = useState(calcHPActualValue({
    baseStat,
    individualValue,
    effortValue: effortValue.value,
    level,
  }));

  const minimumActualValue = calcHPActualValue({
    baseStat,
    individualValue,
    effortValue: 0,
    level,
  });

  const maximumActualValue = calcHPActualValue({
    baseStat,
    individualValue,
    effortValue: 252,
    level,
  });

  const updateActualValue = useCallback((updateValue: Partial<typeof calcActualValue | typeof calcHPActualValue>) => {
    const newActualValue = calcHPActualValue({
      baseStat, individualValue, effortValue: effortValue.value, level, ...updateValue,
    });

    setActualValue(newActualValue);
  }, [baseStat, effortValue.value, individualValue, level]);

  useEffect(() => {
    updateActualValue(level);
  }, [level, updateActualValue]);

  const handleChangeActualValue: (_: string, valueAsNumber: number) => void = useCallback((_, value) => {
    setActualValue((value));
    const newEffortValue = calcHPEffortValue({
      actualValue: value, level, baseStat, individualValue,
    });
    updateEffortValue({ name: HP, value: newEffortValue });
  }, [baseStat, individualValue, level, updateEffortValue]);

  const handleChangeEffortValue: (_: string, valueAsNumber: number) => void = useCallback((_, value) => {
    updateEffortValue({ name: HP, value });

    updateActualValue({ effortValue: value });
  }, [updateActualValue, updateEffortValue]);

  const maximizeEffortValue: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    updateEffortValue({
      ...effortValue,
      value: MAX_EFFORT_VALUE,
    });
    updateActualValue({ effortValue: MAX_EFFORT_VALUE });
  }, [effortValue, updateActualValue, updateEffortValue]);

  const minimizeEffortValue: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    updateEffortValue({
      ...effortValue,
      value: 0,
    });
    updateActualValue({ effortValue: 0 });
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
      statusType={statusType}
      totalEffortValue={totalEffortValue}
    />
  );
}
