import { atom } from "jotai";

import type { PokemonForm } from "@/types";

import { garchomp } from "../mock/pokemons";

export const pokemonFormsAtom = atom<PokemonForm[]>([garchomp.forms[0]]);
