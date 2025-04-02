import { queryPokeAPI } from "@/infrastructures/api/index.js";
import type { Pokemon_V2_Pokemonspecies } from "@/infrastructures/gql/graphql.js";
import { QueryAllPokemonName } from "@/infrastructures/queries/queryAllPokemonName.js";
import type { ReturnAllPokemonNameType } from "@/types.js";

export async function getAllPokemonName(): Promise<Pokemon_V2_Pokemonspecies[]> {
  const response = await queryPokeAPI<ReturnAllPokemonNameType>(QueryAllPokemonName);

  if (response.isErr()) {
    throw response.error;
  }

  const { data } = response.value;

  return data.pokemon_v2_pokemonspecies;
}
