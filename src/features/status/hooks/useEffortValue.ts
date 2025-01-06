import { useAtom, useAtomValue } from "jotai";
import { useCallback } from "react";

import type { PokemonStatus } from "@/types";

import type { PrimitiveAtom } from "jotai";

export function useEffortValue(effortValueAtom: PrimitiveAtom<PokemonStatus[]>): {
  allEffortValue: PokemonStatus[];
  totalEffortValue: number;
  updateEffortValue: (newValue: PokemonStatus) => void;
} {
  const allEffortValue = useAtomValue(effortValueAtom);

  const totalEffortValue = allEffortValue.reduce((prev, current) => prev + current.value, 0);

  const [, setEffortValue] = useAtom(effortValueAtom);

  const updateEffortValue = useCallback((newValue: PokemonStatus) => {
    setEffortValue((prev) => {
      return prev.map((effortValue) => {
        if (effortValue.name === newValue.name) {
          return { name: effortValue.name, value: newValue.value };
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
