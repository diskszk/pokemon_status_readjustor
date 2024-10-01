export function getItemAmount(diffAmount: number): {
  largeIncrease: number;
  smallIncrease: number;
  decrease: number;
} {
  if (diffAmount === -252) {
    return {
      largeIncrease: 0,
      smallIncrease: 0,
      decrease: 26,
    };
  }

  const largeIncrease = diffAmount > 0 ? Math.trunc(diffAmount / 10) : 0;
  let smallIncrease = (diffAmount % 10 !== Math.abs(0)) ? diffAmount % 10 : 0;
  let decrease = diffAmount < 0 ? Math.abs(Math.trunc(diffAmount / 10)) : 0;

  if (smallIncrease < 0) {
    smallIncrease = 10 + smallIncrease;
  }

  if (smallIncrease && decrease) {
    decrease += 1;
  }

  return {
    largeIncrease,
    smallIncrease: Math.abs(smallIncrease),
    decrease,
  };
}
