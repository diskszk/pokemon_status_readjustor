import { gql } from "urql";

export const QueryPokemonForms = gql`
  query QueryPokemonForms ($id: Int!) {
    pokemon_v2_pokemonspecies(where: {id: {_eq: $id}}) {
      id
      pokemon_v2_pokemons {
        name
        id
        pokemon_v2_pokemonsprites {
          sprites(path: "other.official-artwork.front_default")
        }
      }
    }
  }
`;
