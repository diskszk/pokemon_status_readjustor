import { useState, useCallback, useEffect } from "react";

import { currentEffortValueAtom, adjustedEffortValueAtom } from "@/atoms";
import { CURRENT } from "@/constants";
import { useErrorToast } from "@/hooks";
import type { StatusSpecies, StatusType } from "@/types";

import { Presentation } from "./presentation";
import { useEffortValue } from "../../hooks";
import { calcActualValue } from "../../logic/calcActualValue";
import { calcEffortValue } from "../../logic/calcEffortValue";
import { MAX_EFFORT_VALUE, MAX_INDIVIDUAL_VALUE } from "../styleConfig";

import type { MouseEventHandler } from "react";

type Props = {
  level: number;
  speciesName: StatusSpecies;
  baseStat: number;
  statusType: StatusType;
};

export function StatusTableBody({
  speciesName,
  baseStat,
  level,
  statusType,
}: Props) {
  const [individualValue, setIndividualValue] = useState(31);
  const effortValueAtom = statusType === CURRENT ? currentEffortValueAtom : adjustedEffortValueAtom;
  const [nature, setNature] = useState(1);

  const { totalEffortValue, allEffortValue, updateEffortValue } = useEffortValue(effortValueAtom);

  const effortValue = allEffortValue.find((v) => v.name === speciesName);

  const { showErrorToast } = useErrorToast();
  if (!effortValue) {
    showErrorToast({
      description: "努力値が不正な値です。",
    });
    throw Error();
  }

  const [actualValue, setActualValue] = useState(calcActualValue({
    baseStat,
    individual: individualValue,
    effort: effortValue.value,
    level,
    nature,
  }));

  const minimumActualValue = calcActualValue({
    baseStat,
    individual: individualValue,
    effort: 0,
    level,
    nature,
  });

  const maximumActualValue = calcActualValue({
    baseStat,
    individual: individualValue,
    effort: 252,
    level,
    nature,
  });

  const updateActualValue = useCallback((updateValue: Partial<typeof calcActualValue>) => {
    const newActualValue = calcActualValue({
      baseStat, individual: individualValue, effort: effortValue.value, level, nature, ...updateValue,
    });

    setActualValue(newActualValue);
  }, [baseStat, effortValue.value, individualValue, level, nature]);

  useEffect(() => {
    updateActualValue(level);
  }, [level, updateActualValue]);

  const handleChangeActualValue: (_: string, valueAsNumber: number) => void = useCallback((_, value) => {
    setActualValue((value));
    const newEffortValue = calcEffortValue({
      actual: value, level, baseStat, individual: individualValue, nature,
    });
    updateEffortValue({ name: speciesName, value: newEffortValue });
  }, [baseStat, individualValue, level, nature, speciesName, updateEffortValue]);

  const handleChangeEffortValue: (_: string, valueAsNumber: number) => void = useCallback((_, value) => {
    updateEffortValue({ name: speciesName, value });

    updateActualValue({ effort: value });
  }, [speciesName, updateActualValue, updateEffortValue]);

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

  const handleChangeNature: (_: string, valueAsNumber: number) => void = useCallback((_, value) => {
    setNature(value);
    updateActualValue({ nature: value });
  }, [updateActualValue]);

  return (
    <Presentation
      actualValue={actualValue}
      effortValue={effortValue.value}
      handleChangeActualValue={handleChangeActualValue}
      handleChangeEffortValue={handleChangeEffortValue}
      handleChangeIndividualValue={handleChangeIndividualValue}
      handleChangeNature={handleChangeNature}
      individualValue={individualValue}
      maximizeEffortValue={maximizeEffortValue}
      maximizeIndividualValue={maximizeIndividualValue}
      maximumActualValue={maximumActualValue}
      minimizeEffortValue={minimizeEffortValue}
      minimizeIndividualValue={minimizeIndividualValue}
      minimumActualValue={minimumActualValue}
      speciesName={speciesName}
      totalEffortValue={totalEffortValue}
    />
  );
}
