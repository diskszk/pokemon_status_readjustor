import type { Pokemon_V2_Pokemonspecies } from "@/infrastructures/gql/graphql.js";
import type { PokemonNameChart } from "@/types.js";

export function convert(data: Pokemon_V2_Pokemonspecies[],
): PokemonNameChart[] {
  return data.flatMap((species) => {
    return species.pokemon_v2_pokemonspeciesnames.map((speciesName) => (
      {
        en: species.name,
        ja: speciesName.name,
      }
    ));
  });
}
