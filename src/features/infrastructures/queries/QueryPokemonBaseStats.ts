import { gql } from "urql";

export const QueryPokemonBaseStats = gql`
  query ($id: Int!) {
    pokemon_v2_pokemon(where: {name: {_eq: $id}}) {
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
    }
  }
`;
