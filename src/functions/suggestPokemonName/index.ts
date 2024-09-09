import type { PokemonNameChart } from "@/types";

import { hiraganaToKana } from "../utils";

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
