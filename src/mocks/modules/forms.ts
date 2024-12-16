import { graphql, HttpResponse } from "msw";

import type { CombinedError } from "urql";

const QUERY_NAME = "QueryPokemonForms";

type Forms = {
  pokemon_v2_pokemonspecies: [
    {
      pokemon_v2_pokemons: [
        {
          name: string;
          pokemon_v2_pokemonsprites: [
            {
              sprites: string;
            },
          ];
        },
      ];
    },
  ];
};

type FormsQuery = {
  data: Forms | null;
  errors: CombinedError[] | null;
};

type FormsQueryVariable = {
  speciesId: number;
};

const mockData = {
  data: {
    pokemon_v2_pokemonspecies: [
      {
        id: 3,
        pokemon_v2_pokemons: [
          {
            name: "venusaur",
            pokemon_v2_pokemonsprites: [
              {
                sprites: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
              },
            ],
          },
          {
            name: "venusaur-mega",
            pokemon_v2_pokemonsprites: [
              {
                sprites: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10033.png",
              },
            ],
          },
          {
            name: "venusaur-gmax",
            pokemon_v2_pokemonsprites: [
              {
                sprites: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10195.png",
              },
            ],
          },
        ],
      },
    ],
  },
};

const formsQueryHandler = graphql.query<Forms, FormsQueryVariable>(QUERY_NAME, ({ variables }) => {
  const { speciesId } = variables;

  // const mockFound = mockData.data.pokemon_v2_pokemonspecies.find((mockData) => mockData.id === speciesId);

  // if (!mockFound) {
  //   return graphqlError(QUERY_NAME, "NOT_FOUND");
  // }

  return HttpResponse.json<FormsQuery>(
    {
      data: {
        pokemon_v2_pokemonspecies: [
          {
            pokemon_v2_pokemons: [
              {
                name: "mew",
                pokemon_v2_pokemonsprites: [
                  {
                    sprites: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
                  },
                ],
              },
            ],
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
