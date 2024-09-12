import { atom, useAtom, useAtomValue } from "jotai";

import { adjustedEffortValueAtom } from "@/atoms";
import type { EffortValueState } from "@/types";

export function useAdjustedEffortValue() {
  const allEffortValue = useAtomValue(adjustedEffortValueAtom);

  const totalEffortValue = allEffortValue.reduce((prev, current) => prev + current.value, 0);

  const [, setEffortValue] = useAtom(atom(null, (get, set, update: EffortValueState) => {
    const target = get(adjustedEffortValueAtom).find((d) => d.type === update.type);

    set(adjustedEffortValueAtom, (prev) => prev.map((d) => d.type === target?.type ? { type: d.type, value: update.value } : d));
  }));

  return {
    allEffortValue, totalEffortValue, setEffortValue,
  };
}
