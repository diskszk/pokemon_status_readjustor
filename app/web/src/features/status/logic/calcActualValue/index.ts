/*
  参照: https://wiki.xn--rckteqa2e.com/wiki/%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9#%E7%AC%AC%E4%B8%89%E4%B8%96%E4%BB%A3%E4%BB%A5%E9%99%8D
  実数値 = {(種族値×2+個体値+努力値÷4)×レベル÷100+5}×せいかく補正
 */

import type { CalcActualValueParams } from "../types";

export function calcActualValue({
  baseStat,
  level,
  effortValue,
  individualValue,
  natureValue,
}: CalcActualValueParams): number {
  return Math.trunc(((baseStat * 2 + individualValue + effortValue / 4) * level / 100 + 5) * natureValue);
}
