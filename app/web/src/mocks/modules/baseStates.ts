import { graphql, HttpResponse } from "msw";

import type { QueryPokemonBaseStatsQueryVariables, QueryPokemonBaseStatsQuery } from "@/infrastructures/gql/graphql";

import { graphqlError } from "./graphqlError";
import { baseStatsMockData } from "../mockData/baseStatsMockData";

const QUERY_NAME = "QueryPokemonBaseStats";

const baseStatsQueryHandler = graphql.query<QueryPokemonBaseStatsQuery, QueryPokemonBaseStatsQueryVariables>(QUERY_NAME, ({ variables }) => {
  const { id } = variables;

  const found = baseStatsMockData.find((data) => data.id === id);

  if (!found) {
    return graphqlError(QUERY_NAME, "NOT_FOUND");
  }

  const baseStats = found.baseStats.map((baseStat) => ({
    base_stat: baseStat.value,
    stat: {
      name: baseStat.name,
    },
  }));

  return HttpResponse.json({
    data: {
      pokemon: [{
        pokemonstats: baseStats,
      }],
    },
    errors: null,
  });
});

export const baseStatsQueryMock = {
  name: QUERY_NAME,
  handler: baseStatsQueryHandler,
};
