import type { PokemonNameChart } from "@/types";

import { hiraganaToKatakana } from "../";

export function suggestPokemonName(input: string, pokemonNameChart: PokemonNameChart[]): PokemonNameChart[] {
  if (!input) {
    return [];
  }
  const inputKatakana = hiraganaToKatakana(input);
  return pokemonNameChart.filter((val) => {
    if (val.ja.includes(inputKatakana)) {
      return val;
    }
  });
}
