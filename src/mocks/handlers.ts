import { graphql, HttpResponse } from "msw";

export const handlers = [
  graphql.query("QueryPokemonId", () => {
    return HttpResponse.json(
      {
        data: {
          pokemon_v2_pokemonspeciesname: [
            {
              pokemon_species_id: 151,
            },
          ],
        },
      },
    );
  }),
  graphql.query("QueryPokemonForms", () => {
    return HttpResponse.json(
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
      },
    );
  }),
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
