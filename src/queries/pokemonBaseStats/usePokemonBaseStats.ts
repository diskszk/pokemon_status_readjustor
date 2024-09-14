import { useQuery } from "urql";

import type { Pokemon_V2_Pokemon } from "@/gql/graphql";
import type { StatusSpeciesEN } from "@/types";

import { QueryPokemonBaseStats } from "./query";

import type { CombinedError } from "urql";

 type QueryReturnType = {
   pokemon_v2_pokemon: Pick<Pokemon_V2_Pokemon, "pokemon_v2_pokemonstats">[];
 };

 type BaseStat = {
   baseStat: number;
   type: StatusSpeciesEN;
 };

export function usePokemonBaseStats(name: string): {
  data: BaseStat[] | undefined;
  fetching: boolean;
  error: CombinedError | undefined;
} {
  const [result] = useQuery<QueryReturnType>({
    query: QueryPokemonBaseStats,
    variables: { name },
  });
  const { data, fetching, error } = result;

  const pokemonStats = data?.pokemon_v2_pokemon[0].pokemon_v2_pokemonstats;

  const stats = pokemonStats?.map((p) => ({
    baseStat: p.base_stat,
    type: p.pokemon_v2_stat?.name as StatusSpeciesEN,
  }));

  return {
    data: stats,
    fetching,
    error,
  };
}
