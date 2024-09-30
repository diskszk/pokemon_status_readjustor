import { mockPokemons } from "@/mock/pokemons";

import pokemonsJson from "../../../../pokemon.json";

import type { PokemonNameChart } from "../types";

export function getPokemons(): PokemonNameChart[] {
  return import.meta.env.MODE === "production" ? pokemonsJson : mockPokemons;
}
