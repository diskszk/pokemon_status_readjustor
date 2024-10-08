import { useQuery } from "urql";

import type { Pokemon_V2_Pokemon } from "@/features/infrastructures/gql/graphql";
import { QueryPokemonBaseStats } from "@/features/infrastructures/queries";
import type { PokemonStatus, StatusSpecies } from "@/types";

import type { CombinedError } from "urql";

 type QueryReturnType = {
   pokemon_v2_pokemon: Pick<Pokemon_V2_Pokemon, "pokemon_v2_pokemonstats">[];
 };

export function usePokemonBaseStats(name: string): {
  baseStatsData: PokemonStatus[] | undefined;
  fetching: boolean;
  error: CombinedError | undefined;
} {
  const [result] = useQuery<QueryReturnType>({
    query: QueryPokemonBaseStats,
    variables: { name },
    pause: !name,
  });
  const { data, fetching, error } = result;

  const pokemonStats = data?.pokemon_v2_pokemon[0].pokemon_v2_pokemonstats;

  const baseStatsData = pokemonStats?.map((p) => ({
    value: p.base_stat,
    name: p.pokemon_v2_stat?.name as StatusSpecies,
  }));

  return {
    baseStatsData,
    fetching,
    error,
  };
}
