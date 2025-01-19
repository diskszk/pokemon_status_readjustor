export function calcHPEffortValue({
  baseStat,
  level,
  actualValue,
  individualValue,
}: {
  baseStat: number;
  level: number;
  actualValue: number;
  individualValue: number;
}): number {
  const calculationResult = ((actualValue - level - 10) * 100 / level - baseStat * 2 - individualValue) * 4;

  if (calculationResult < 0) {
    return 0;
  }

  if (calculationResult % 4 === 0) {
    return calculationResult;
  }

  let i = 1;
  for (i; i < 4; i++) {
    if ((Math.trunc(calculationResult) + i) % 4 === 0) {
      break;
    }
  }

  return Math.trunc(calculationResult) + i;
}
