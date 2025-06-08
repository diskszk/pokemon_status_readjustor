import { atom } from "jotai";

import type { EffortValue } from "@/types";

type EffortValuesAtom = {
  current: EffortValue;
  adjusted: EffortValue;
};

export const initialValue = {
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

export const effortValuesAtom = atom<EffortValuesAtom>(initialValue);
