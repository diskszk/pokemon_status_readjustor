import { atom, createStore, useAtom } from "jotai";
import { createContext, useCallback, useContext } from "react";

import type { StatusSpecies, StatusType } from "@/types";

export type EffortValue = Record<StatusSpecies, number>;

type EffortValueAtom = {
  current: EffortValue;
  adjusted: EffortValue;
};

const initialValue = {
  current: {
    "hp": 0,
    "attack": 0,
    "defense": 0,
    "special-attack": 0,
    "special-defense": 0,
    "speed": 0,
  },
  adjusted: {
    "hp": 0,
    "attack": 0,
    "defense": 0,
    "special-attack": 0,
    "special-defense": 0,
    "speed": 0,
  },
};

export const effortValuesAtom = atom<EffortValueAtom>(initialValue);

export const store = createStore();
store.set(effortValuesAtom, initialValue);

export const EffortValueContext = createContext<typeof store>(store);

export function useEffortValue() {
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
