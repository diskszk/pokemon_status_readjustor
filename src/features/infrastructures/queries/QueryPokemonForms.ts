import { gql } from "urql";

export const QueryPokemonForms = gql`
  query ($id: Int!) {
    pokemon_v2_pokemonspecies(where: {id: {_eq: $id}}) {
      pokemon_v2_pokemons {
        name
        pokemon_v2_pokemonsprites {
          sprites(path: "other.official-artwork.front_default")
        }
      }
    }
  }
`;
