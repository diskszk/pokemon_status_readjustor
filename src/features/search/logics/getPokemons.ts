import { mockPokemons } from "@/mock/pokemons";
import type { PokemonNameChart } from "@/types";

import pokemonsJson from "../../../../pokemon.json";

export function getPokemons(): PokemonNameChart[] {
  return import.meta.env.MODE === "production" ? pokemonsJson : mockPokemons;
}
