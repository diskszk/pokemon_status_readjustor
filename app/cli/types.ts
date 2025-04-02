import type { Pokemon_V2_Pokemonspecies } from "@/infrastructures/gql/graphql.js";

export type ReturnAllPokemonNameType = {
  data: {
    pokemon_v2_pokemonspecies: Pokemon_V2_Pokemonspecies[];
  };
};

export type PokemonNameChart = {
  en: string;
  ja: string;
};
