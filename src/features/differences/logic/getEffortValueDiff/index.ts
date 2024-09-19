import type { EffortValueState } from "@/_types";

export function getEffortValueDiff(currentEffortValues: EffortValueState[],
  adjustedEffortValues: EffortValueState[]): EffortValueState[] {
  return currentEffortValues.map((currentEffortValue) => {
    const found = adjustedEffortValues.find(({ type }) => type === currentEffortValue.type);

    if (found) {
      return {
        type: currentEffortValue.type,
        value: currentEffortValue.value - found.value,
      };
    }
  }).filter((value) => value !== undefined);
}
