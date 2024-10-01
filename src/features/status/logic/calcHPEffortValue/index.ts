export function calcHPEffortValue({
  actual, level, baseStat, individual,
}: {
  actual: number;
  level: number;
  baseStat: number;
  individual: number;
}): number {
  const calculationResult = ((actual - level - 10) * 100 / level - baseStat * 2 - individual) * 4;

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
