import { atom } from "jotai";

import type { PokemonForm } from "@/_types";

export const pokemonFormsAtom = atom<PokemonForm[]>([]);
