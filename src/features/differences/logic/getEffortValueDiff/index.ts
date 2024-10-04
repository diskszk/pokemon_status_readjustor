import type { PokemonStatus } from "@/types";

export function getEffortValueDiff(currentEffortValues: PokemonStatus[],
  adjustedEffortValues: PokemonStatus[]): PokemonStatus[] {
  return adjustedEffortValues.map((adjustedEffortValue) => {
    const found = currentEffortValues.find(({ name }) => name === adjustedEffortValue.name);

    if (found) {
      return {
        name: adjustedEffortValue.name,
        value: adjustedEffortValue.value - found.value,
      };
    }
  }).filter((value) => value !== undefined);
}
