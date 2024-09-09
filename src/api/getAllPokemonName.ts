import { type ReturnAllPokemonNameType as ReturnType, queryAllPokemonName } from "@/queries";
import type { PokemonNameChart } from "@/types";

import { queryPokeAPI } from "./queryPokeAPI";

export async function getAllPokemonName(): Promise<PokemonNameChart[]> {
  const response = await queryPokeAPI<ReturnType>(queryAllPokemonName);

  if (response.isErr()) {
    throw response.error;
  }

  const { data } = response.value;

  return data.pokemon_v2_pokemonspecies.flatMap((species) => {
    return species.pokemon_v2_pokemonspeciesnames.map((speciesName) => (
      {
        en: species.name,
        ja: speciesName.name,
      }
    ));
  });
}
