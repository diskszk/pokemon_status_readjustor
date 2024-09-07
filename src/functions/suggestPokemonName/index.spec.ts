import { expect, test } from "vitest";

import type { PokemonNameChart } from "@/types";

import pokemonNameChartJson from "./pokemon.test.json";

import { suggeestPokemonName } from ".";

test("「やど」の入力を受け取ると、「ヤドン、ヤドラン、ヤドキング」それぞれの英和名両方を返す", () => {
  const pokemonNameChart: PokemonNameChart[] = pokemonNameChartJson;

  const searchResult = suggeestPokemonName("やど", pokemonNameChart);

  expect(searchResult).toEqual([
    { en: "slowpoke", ja: "ヤドン" },
    { en: "slowbro", ja: "ヤドラン" },
    { en: "slowking", ja: "ヤドキング" },
  ]);
});
