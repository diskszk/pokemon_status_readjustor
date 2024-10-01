import { atom } from "jotai";

import type { PokemonForm } from "@/_types";
import { garchomp } from "@/mock/pokemons";

export const pokemonFormsAtom = atom<PokemonForm[]>([garchomp.forms[0]]);
