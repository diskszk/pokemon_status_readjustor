import { gql } from "urql";

export const QueryPokemonBaseStats = gql`
  query ($name: String!) {
    pokemon_v2_pokemon(where: {name: {_eq: $name}}) {
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
    }
  }
`;
