import { graphql, HttpResponse } from "msw";

import type { QueryPokemonIdQueryVariables, QueryPokemonIdQuery } from "@/features/infrastructures/gql/graphql";

import { graphqlError } from "./graphqlError";
import { speciesIdMockData } from "../mockData";

const QUERY_NAME = "QueryPokemonId";

const idQueryHandler = graphql.query<QueryPokemonIdQuery, QueryPokemonIdQueryVariables>(QUERY_NAME, ({ variables }) => {
  const { inputName } = variables;
  const id = speciesIdMockData.find(({ name }) => name === inputName)?.id;

  if (!id) {
    return graphqlError(QUERY_NAME, "NOT_FOUND");
  }

  return HttpResponse.json(
    {
      data: {
        pokemon_v2_pokemonspeciesname: [
          {
            pokemon_species_id: id,
          },
        ],
      },
      errors: null,
    },
  );
});

export const speciesIdQueryMock = {
  name: QUERY_NAME,
  handler: idQueryHandler,
};
