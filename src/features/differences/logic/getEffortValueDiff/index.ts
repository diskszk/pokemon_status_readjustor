import type { PokemonStatus } from "@/types";

export function getEffortValueDiff(currentEffortValues: PokemonStatus[],
  adjustedEffortValues: PokemonStatus[]): PokemonStatus[] {
  return currentEffortValues.map((currentEffortValue) => {
    const found = adjustedEffortValues.find(({ name }) => name === currentEffortValue.name);

    if (found) {
      return {
        name: currentEffortValue.name,
        value: currentEffortValue.value - found.value,
      };
    }
  }).filter((value) => value !== undefined);
}
