import { atom } from "jotai";

import type { PokemonForm } from "@/types";

import { garchomp } from "../features/mock/pokemons";

export const pokemonFormsAtom = atom<PokemonForm[]>([garchomp.forms[0]]);
