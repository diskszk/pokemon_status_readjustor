import { expect, test } from "vitest";

import { mockPokemons } from "@/mock/pokemons";

import type { PokemonNameChart } from "../../types";

import { suggestPokemonName } from ".";

test("「やど」の入力を受け取ると、「ヤドン、ヤドラン、ヤドキング」それぞれの英和名両方を返す", () => {
  const pokemonNameChart: PokemonNameChart[] = mockPokemons;

  const searchResult = suggestPokemonName("やど", pokemonNameChart);

  expect(searchResult).toEqual([
    { en: "slowpoke", ja: "ヤドン" },
    { en: "slowbro", ja: "ヤドラン" },
    { en: "slowking", ja: "ヤドキング" },
  ]);
});
