import { atom } from "jotai";

import { ATK, DEF, HP, SP_ATK, SP_DEF, SPD } from "@/constants";
import type { EffortValueState } from "@/types";

export const initialState = [
  { type: HP, value: 0 },
  { type: ATK, value: 0 },
  { type: DEF, value: 0 },
  { type: SP_ATK, value: 0 },
  { type: SP_DEF, value: 0 },
  { type: SPD, value: 0 },
] satisfies EffortValueState[];

export const currentEffortValueAtom = atom<EffortValueState[]>(initialState);
export const adjustedEffortValueAtom = atom<EffortValueState[]>(initialState);
