import type { PokemonNameChart } from "@/types";

import { hiraganaToKana } from "../hiraganaToKana";

export function suggestPokemonName(input: string, pokemonNameChart: PokemonNameChart[]): PokemonNameChart[] {
  if (!input) {
    return [];
  }
  const inputKana = hiraganaToKana(input);
  return pokemonNameChart.filter((val) => {
    if (val.ja.startsWith(inputKana)) {
      return val;
    }
  });
}
