import { queryPokeAPI } from "cli/infrastructures/api";
import { QueryAllPokemonName } from "cli/infrastructures/queries";

import type { ReturnAllPokemonNameType } from "./types";
import type { Pokemon_V2_Pokemonspecies } from "cli/infrastructures/gql/graphql";

export async function getAllPokemonName(): Promise<Pokemon_V2_Pokemonspecies[]> {
  const response = await queryPokeAPI<ReturnAllPokemonNameType>(QueryAllPokemonName);

  if (response.isErr()) {
    throw response.error;
  }

  const { data } = response.value;

  return data.pokemon_v2_pokemonspecies;
}
