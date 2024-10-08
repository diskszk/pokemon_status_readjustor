/*
  参照: https://wiki.xn--rckteqa2e.com/wiki/%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9#%E7%AC%AC%E4%B8%89%E4%B8%96%E4%BB%A3%E4%BB%A5%E9%99%8D
  HP実数値 = (種族値×2+個体値+努力値÷4)×レベル÷100+レベル+10
*/

export function calcHPActualValue({ baseStat, individual, effort, level, pokemonName }: {
  baseStat: number; individual: number; effort: number; level: number; pokemonName: string;
}): number {
  if (pokemonName === "shedinja") {
    return 1;
  }

  return Math.trunc((baseStat * 2 + individual + effort / 4) * level / 100 + level + 10);
}
