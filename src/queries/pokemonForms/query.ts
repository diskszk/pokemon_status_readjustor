import { gql } from "urql";

import type { Pokemon_V2_Pokemon, Query_Root } from "@/gql/graphql";

type Pokemon = Pick<Pokemon_V2_Pokemon, "name" | "pokemon_v2_pokemonsprites">;

type PokemonSpecies = Pick<Query_Root, "pokemon_v2_pokemonspecies"> & {
  pokemon_v2_pokemons: Pokemon[];
};
export type FormsReturnType = {
  pokemon_v2_pokemonspecies: PokemonSpecies[];
};

export const QueryPokemonForms = gql`
  query ($name: String!) {
    pokemon_v2_pokemonspecies(where: {name: {_eq: $name}}) {
      pokemon_v2_pokemons {
        name
        pokemon_v2_pokemonsprites {
          sprites(path: "other.official-artwork.front_default")
        }
      }
    }
  }
`;
