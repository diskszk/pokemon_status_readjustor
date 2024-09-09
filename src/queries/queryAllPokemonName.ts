import type { Pokemon_V2_Pokemonspecies } from "@/gql/graphql";

export type ReturnAllPokemonNameType = {
  data: {
    pokemon_v2_pokemonspecies: Pokemon_V2_Pokemonspecies[];
  };
};

export const queryAllPokemonName = `
  query AllPolkemonName {
    pokemon_v2_pokemonspecies(order_by: {id: asc}) {
      name
      pokemon_v2_pokemonspeciesnames(where: {pokemon_v2_language: {name: {_in: "ja"}}}) {
        name
      }
    }
  }
`;
