import { gql } from "urql";

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
