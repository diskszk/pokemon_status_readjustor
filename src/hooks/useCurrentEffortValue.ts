import { atom, useAtom, useAtomValue } from "jotai";

import { currentEffortValueAtom } from "@/atoms";
import type { EffortValueState } from "@/types";

export function useCurrentEffortValue() {
  const allEffortValue = useAtomValue(currentEffortValueAtom);

  const totalEffortValue = allEffortValue.reduce((prev, current) => prev + current.value, 0);

  const [, setEffortValue] = useAtom(atom(null, (get, set, update: EffortValueState) => {
    const target = get(currentEffortValueAtom).find((d) => d.type === update.type);

    set(currentEffortValueAtom, (prev) => prev.map((d) => d.type === target?.type ? { type: d.type, value: update.value } : d));
  }));

  return {
    allEffortValue, totalEffortValue, setEffortValue,
  };
}
