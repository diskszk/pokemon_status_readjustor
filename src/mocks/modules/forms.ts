import { graphql, HttpResponse } from "msw";

import type { QueryPokemonFormsQueryVariables, QueryPokemonFormsQuery } from "@/features/infrastructures/gql/graphql";

import { graphqlError } from "./graphqlError";
import { formsMockData } from "../mockData";

const QUERY_NAME = "QueryPokemonForms";

const formsQueryHandler = graphql.query<QueryPokemonFormsQuery, QueryPokemonFormsQueryVariables>(QUERY_NAME, ({ variables }) => {
  const { id } = variables;

  const found = formsMockData.find((data) => data.id === id);

  if (!found) {
    return graphqlError(QUERY_NAME, "NOT_FOUND");
  }

  const pokemons = found.forms.map((f) => ({
    name: f.name,
    id: f.id,
    pokemon_v2_pokemonsprites: [
      {
        sprites: f.sprites,
      },
    ],
  }));

  return HttpResponse.json(
    {
      data: {
        pokemon_v2_pokemonspecies: [
          {
            id: found.id,
            pokemon_v2_pokemons: pokemons,
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
