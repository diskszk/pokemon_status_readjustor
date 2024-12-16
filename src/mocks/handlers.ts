import { graphql, HttpResponse } from "msw";

export const handlers = [
  graphql.query("QueryPokemonBaseStats", () => {
    return HttpResponse.json(
      {
        data: {
          pokemon_v2_pokemon: [
            {
              pokemon_v2_pokemonstats: [
                {
                  base_stat: 100,
                  pokemon_v2_stat: {
                    name: "hp",
                  },
                },
                {
                  base_stat: 100,
                  pokemon_v2_stat: {
                    name: "attack",
                  },
                },
                {
                  base_stat: 100,
                  pokemon_v2_stat: {
                    name: "defense",
                  },
                },
                {
                  base_stat: 100,
                  pokemon_v2_stat: {
                    name: "special-attack",
                  },
                },
                {
                  base_stat: 100,
                  pokemon_v2_stat: {
                    name: "special-defense",
                  },
                },
                {
                  base_stat: 100,
                  pokemon_v2_stat: {
                    name: "speed",
                  },
                },
              ],
            },
          ],
        },
      },
    );
  }),
];
