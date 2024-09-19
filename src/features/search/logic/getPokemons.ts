import type { PokemonNameChart } from "@/_types";
import { mockPokemons } from "@/mock/pokemons";

import pokemonsJson from "../../../../pokemon.json";

export function getPokemons(): PokemonNameChart[] {
  return import.meta.env.MODE === "production" ? pokemonsJson : mockPokemons;
}
