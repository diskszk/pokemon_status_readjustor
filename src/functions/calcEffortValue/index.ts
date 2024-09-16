export function calcEffortValue({
  actual, level, baseStat, individual, nature,
}: {
  actual: number;
  level: number;
  baseStat: number;
  individual: number;
  nature: number;
}): number {
  const calculationResult = ((actual / nature - 5) * 100 / level - (baseStat * 2 + individual)) * 4;

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
