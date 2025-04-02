import { useAtom } from "jotai";
import { useCallback, useContext } from "react";

import { effortValuesAtom } from "@/atoms";
import { EffortValueContext } from "@/contexts";
import type { StatusSpecies, StatusType } from "@/types";

export function useEffortValues() {
  const store = useContext(EffortValueContext);

  const [effortValues, setEffortValue] = useAtom(effortValuesAtom, { store });

  const getTotalEffortValue = useCallback(({ type }: { type: StatusType }) => {
    let totalEffortValue = 0;
    for (const [_, value] of Object.entries(effortValues[type])) {
      totalEffortValue += value;
    }
    return totalEffortValue;
  }, [effortValues]);

  const updateEffortValue = useCallback(({
    type,
    statusSpecies,
    value,
  }: {
    type: StatusType;
    statusSpecies: StatusSpecies;
    value: number;
  }) => {
    const newValue = {
      ...effortValues[type],
      [statusSpecies]: value,
    };

    setEffortValue({
      ...effortValues,
      [type]: newValue,
    });
  }, [effortValues, setEffortValue]);

  return {
    getTotalEffortValue,
    updateEffortValue,
    effortValues,
  };
}
