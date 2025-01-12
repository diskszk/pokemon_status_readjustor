import type { NatureValue } from "@/types";

export function calcEffortValue({
  baseStat,
  level,
  actualValue,
  individualValue,
  natureValue,
}: {
  baseStat: number;
  level: number;
  actualValue: number;
  individualValue: number;
  natureValue: NatureValue;
}): number {
  const calculationResult = ((actualValue / natureValue - 5) * 100 / level - (baseStat * 2 + individualValue)) * 4;

  if (calculationResult < 0) {
    return 0;
  }

  if (calculationResult % 4 === 0) {
    return calculationResult;
  }

  let i = 1;
  for (i; i < 4; i++) {
    if ((Math.round(calculationResult) + i) % 4 === 0) {
      break;
    }
  }

  return Math.round(calculationResult) + i;
};
