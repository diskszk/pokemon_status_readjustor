import { useCallback } from "react";
import { useClient } from "urql";

import type { Pokemon_V2_Pokemon } from "@/gql/graphql";
import type { BaseStat, StatusSpeciesEN } from "@/types";

import { QueryPokemonBaseStats } from "./query";

import type { CombinedError } from "urql";

type QueryReturnType = {
  pokemon_v2_pokemon: Pick<Pokemon_V2_Pokemon, "pokemon_v2_pokemonstats">[];
};

export function usePokemonBaseStats() {
  const client = useClient();

  const queryBaseStats = useCallback(async (name: string): Promise<{
    stats: BaseStat[] | undefined;
    error: CombinedError | undefined;
  }> => {
    const { data, error } = await client.query<QueryReturnType>(QueryPokemonBaseStats, { name });

    const pokemonStats = data?.pokemon_v2_pokemon[0].pokemon_v2_pokemonstats;

    const stats = pokemonStats?.map((p) => ({
      value: p.base_stat,
      name: p.pokemon_v2_stat?.name as StatusSpeciesEN,
    }));

    return {
      stats,
      error,
    };
  }, [client]);

  return {
    queryBaseStats,
  };
}
