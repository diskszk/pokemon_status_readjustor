import { useQuery } from "urql";

import type { QueryPokemonBaseStatsQuery, QueryPokemonBaseStatsQueryVariables } from "@/infrastructures/gql/graphql";
import { QueryPokemonBaseStats } from "@/infrastructures/queries";
import type { PokemonStatus, StatusSpecies } from "@/types";

import type { CombinedError } from "urql";

export function usePokemonBaseStatsQuery(variables: QueryPokemonBaseStatsQueryVariables): {
  baseStatsData: PokemonStatus[] | undefined;
  error: CombinedError | undefined;
} {
  const [{ data, error }] = useQuery<QueryPokemonBaseStatsQuery>({
    query: QueryPokemonBaseStats,
    variables: { id: variables.id },
    pause: !variables.id,
  });

  if (error || !data) {
    return {
      error,
      baseStatsData: undefined,
    };
  }

  const pokemonStats = data.pokemon[0].pokemonstats;

  const baseStatsData = pokemonStats.map((p) => ({
    value: p.base_stat,
    name: p.stat?.name as StatusSpecies,
  }));

  return {
    baseStatsData,
    error,
  };
}
