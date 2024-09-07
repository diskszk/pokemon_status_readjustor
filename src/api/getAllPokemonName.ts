import type { Pokemon_V2_Pokemonspecies } from "@/gql/graphql";
import { queryAllPokemonName } from "@/queries";
import type { PokemonNameChart } from "@/types";

import { queryPokeAPI } from "./queryPokeAPI";

type Pokemon = {
  pokemon_v2_pokemonspecies: Pokemon_V2_Pokemonspecies[];
};

export async function getAllPokemonName(): Promise<PokemonNameChart[]> {
  const respone = await queryPokeAPI(queryAllPokemonName);

  if (respone.isErr()) {
    return [];
  }

  const data: Pokemon = respone.value;

  return data.pokemon_v2_pokemonspecies.flatMap((species) => {
    return species.pokemon_v2_pokemonspeciesnames.map((speciesName) => (
      {
        en: species.name,
        ja: speciesName.name,
      }
    ));
  });
}
