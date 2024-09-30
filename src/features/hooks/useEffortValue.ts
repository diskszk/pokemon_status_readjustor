import { useAtom, useAtomValue } from "jotai";
import { useCallback } from "react";

import type { EffortValueState } from "@/_types";

import type { PrimitiveAtom } from "jotai";

export function useEffortValue(effortValueAtom: PrimitiveAtom<EffortValueState[]>): {
  allEffortValue: EffortValueState[];
  totalEffortValue: number;
  updateEffortValue: (newValue: EffortValueState) => void;
} {
  const allEffortValue = useAtomValue(effortValueAtom);

  const totalEffortValue = allEffortValue.reduce((prev, current) => prev + current.value, 0);

  const [, setEffortValue] = useAtom(effortValueAtom);

  const updateEffortValue = useCallback((newValue: EffortValueState) => {
    setEffortValue((prev) => {
      return prev.map((effortValue) => {
        if (effortValue.type === newValue.type) {
          return { type: effortValue.type, value: newValue.value };
        }
        return effortValue;
      });
    });
  }, [setEffortValue]);

  return {
    allEffortValue,
    totalEffortValue,
    updateEffortValue,
  };
}
