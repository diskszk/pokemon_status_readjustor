import { gql } from "urql";

export const QueryPokemonForms = gql`
  query QueryPokemonForms ($id: Int!) {
    pokemon_v2_pokemonspecies(where: {id: {_eq: $id}}) {
      pokemon_v2_pokemonspeciesnames(
        where: {
          language_id: {
            _eq: 1
          }
        }
      ) {
        name
      }
      pokemon_v2_pokemons {
        id
        pokemon_v2_pokemonforms {
          pokemon_v2_pokemonformnames(where: {language_id: {_eq: 1}}) {
            name
          }
        }
      }
    }
  }
`;
