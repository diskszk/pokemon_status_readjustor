import { atom, useAtom } from "jotai";

import type { StatusSpeciesEN } from "@/types";

const plusNatureAtom = atom<StatusSpeciesEN | null>(null);
const minusNatureAtom = atom<StatusSpeciesEN | null>(null);

export function useNature() {
  const [plusNature, setPlusNature] = useAtom(plusNatureAtom);

  const [minusNature, setMinusNature] = useAtom(minusNatureAtom);

  return {
    plusNature, minusNature, setPlusNature, setMinusNature,
  };
}
