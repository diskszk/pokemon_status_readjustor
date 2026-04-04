import { graphql, HttpResponse } from "msw";

import type { QueryPokemonFormsQueryVariables, QueryPokemonFormsQuery } from "@/infrastructures/gql/graphql";

import { graphqlError } from "./graphqlError";
import { formsMockData } from "../mockData";

const QUERY_NAME = "QueryPokemonForms";

const formsQueryHandler = graphql.query<QueryPokemonFormsQuery, QueryPokemonFormsQueryVariables>(QUERY_NAME, ({ variables }) => {
  const { id } = variables;

  const found = formsMockData.find((data) => data.id === id);

  if (!found) {
    return graphqlError(QUERY_NAME, "NOT_FOUND");
  }

  const pokemons = found.forms.pokemonForms.map((p) => ({
    id: p.id,
    pokemonforms: [
      {
        pokemonformnames: [
          {
            name: p.name,
          },
        ],
      },
    ],
  }));

  return HttpResponse.json(
    {
      data: {
        pokemonspecies: [
          {
            pokemons: pokemons,
          },
        ],
      },
      errors: null,
    },
  );
});

export const formsQueryMock = {
  name: QUERY_NAME,
  handler: formsQueryHandler,
};
