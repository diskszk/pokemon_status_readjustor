import type { PokemonNameChart } from "@/types";

import { hiraToKana } from "../utils";

export function suggeestPokemonName(input: string, pokemonNameChart: PokemonNameChart[]): PokemonNameChart[] {
  const inputKana = hiraToKana(input);

  return pokemonNameChart.filter((val) => {
    if (val.ja.startsWith(inputKana)) {
      return val;
    }
  });
}
