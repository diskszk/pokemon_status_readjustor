import { type StatsReturnType as ReturnType, queryPokemonBaseStats } from "@/queries";

import { queryPokeAPI } from "./queryPokeAPI";

// TODO: 戻り値の型を明記する
export async function getPokemonBaseStats(name: string) {
  const response = await queryPokeAPI<ReturnType>(queryPokemonBaseStats({ name }));

  if (response.isErr()) {
    throw response.error;
  }

  const { data } = response.value;

  const pokemonStats = data.pokemon_v2_pokemon[0].pokemon_v2_pokemonstats;

  return pokemonStats;
}
