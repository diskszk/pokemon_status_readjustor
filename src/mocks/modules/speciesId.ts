import { graphql, HttpResponse } from "msw";

import { graphqlError } from "./graphqlError";

import type { CombinedError } from "urql";

const QUERY_NAME = "QueryPokemonId";

type SpeciesId = {
  pokemon_v2_pokemonspeciesname: [
    {
      pokemon_species_id: number;
    },
  ];
};

type SpeciesIdQuery = {
  data: SpeciesId | null;
  errors: CombinedError[] | null;
};

type SpeciesIdQueryVariable = {
  inputName: string;
};

function getMockSpeciesIdByName(inputName: string): number | null {
  switch (inputName) {
    case "フシギダネ": {
      return 1;
    }
    case "フシギソウ": {
      return 2;
    }
    case "フシギバナ": {
      return 3;
    }
    case "リザードン": {
      return 6;
    }
    case "ミュウ": {
      return 151;
    }
    case "ガブリアス": {
      return 445;
    }
    default: {
      return null;
    }
  }
}

const idQueryHandler = graphql.query<SpeciesId, SpeciesIdQueryVariable>(QUERY_NAME, ({ variables }) => {
  const id = getMockSpeciesIdByName(variables.inputName);

  if (!id) {
    return graphqlError(QUERY_NAME, "NOT_FOUND");
  }

  return HttpResponse.json<SpeciesIdQuery>(
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
