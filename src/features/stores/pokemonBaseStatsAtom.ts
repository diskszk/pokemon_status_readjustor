import { atom } from "jotai";

import type { PokemonStatus } from "@/types";

export const pokemonBaseStatsAtom = atom<PokemonStatus[]>([]);
