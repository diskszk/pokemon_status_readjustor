import { atom } from "jotai";

import type { BaseStat } from "@/types";

export const pokemonBaseStatsAtom = atom<BaseStat[]>([]);
