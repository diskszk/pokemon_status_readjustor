import { atom } from "jotai";

import type { PokemonForm } from "@/types";

export const pokemonFormsAtom = atom<PokemonForm[]>([]);
