import type { Pokemon_V2_Pokemon } from "@/gql/graphql";

export type StatsReturnType = {
  data: {
    pokemon_v2_pokemon: Pick<Pokemon_V2_Pokemon, "pokemon_v2_pokemonstats">[];
  };
};

export const queryPokemonBaseStats = ({ name }: { name: string }) => `
  query QueryPokemonBaseStats {
    pokemon_v2_pokemon(where: {name: {_eq: "${name}"}}) {
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
    }
  }
`;
