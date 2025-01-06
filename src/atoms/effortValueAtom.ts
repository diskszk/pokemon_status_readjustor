import { atom } from "jotai";

import { ATK, DEF, HP, SP_ATK, SP_DEF, SPD } from "@/features/constants";
import type { PokemonStatus } from "@/types";

export const initialState = [
  { name: HP, value: 0 },
  { name: ATK, value: 0 },
  { name: DEF, value: 0 },
  { name: SP_ATK, value: 0 },
  { name: SP_DEF, value: 0 },
  { name: SPD, value: 0 },
] satisfies PokemonStatus[];

export const currentEffortValueAtom = atom<PokemonStatus[]>(initialState);
export const adjustedEffortValueAtom = atom<PokemonStatus[]>(initialState);
