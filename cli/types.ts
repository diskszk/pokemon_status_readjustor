import type { Pokemon_V2_Pokemonspecies } from "cli/infrastructures/gql/graphql";

export type ReturnAllPokemonNameType = {
  data: {
    pokemon_v2_pokemonspecies: Pokemon_V2_Pokemonspecies[];
  };
};

export type PokemonNameChart = {
  en: string;
  ja: string;
};
