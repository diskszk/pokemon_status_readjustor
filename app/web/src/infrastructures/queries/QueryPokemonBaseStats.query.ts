import { gql } from "urql";

export const QueryPokemonBaseStats = gql`
  query QueryPokemonBaseStats ($id: Int!) {
    pokemon(where: {id: {_eq: $id}}) {
      pokemonstats {
        base_stat
        stat {
          name
        }
      }
    }
  }
`;
