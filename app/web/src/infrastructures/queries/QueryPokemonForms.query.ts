import { gql } from "urql";

export const QueryPokemonForms = gql`
  query QueryPokemonForms ($id: Int!) {
    pokemonspecies(where: {id: {_eq: $id}}) {
      pokemons {
        id
        pokemonforms {
          pokemonformnames(where: {language_id: {_eq: 1}}) {
            name
          }
        }
      }
    }
  }
`;
