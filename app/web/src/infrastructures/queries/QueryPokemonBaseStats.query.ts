import { gql } from "urql";

export const QueryPokemonBaseStats = gql`
  query QueryPokemonBaseStats ($id: Int!) {
    pokemon_v2_pokemon(where: {id: {_eq: $id}}) {
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
    }
  }
`;
