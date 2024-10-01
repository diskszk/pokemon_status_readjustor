import { expect, test } from "vitest";

import { calcHPActualValue } from ".";

test("レベル50,種族値108, 努力値0, 個体値0の場合、HP実数値は168となる", () => {
  expect(calcHPActualValue({
    baseStat: 108,
    individual: 0,
    effort: 0,
    level: 50,
    pokemonName: "garchomp",
  })).toBe(168);
});
test("レベル50,種族値108, 努力値252, 個体値31の場合、HP実数値は215となる", () => {
  expect(calcHPActualValue({
    baseStat: 108,
    individual: 31,
    effort: 252,
    level: 50,
    pokemonName: "garchomp",
  })).toBe(215);
});
test("レベル1, 種族値50, 努力値0, 個体値31の場合、HP実数値は12となる", () => {
  expect(calcHPActualValue({
    baseStat: 50,
    individual: 31,
    effort: 0,
    level: 1,
    pokemonName: "scorbunny",
  })).toBe(12);
});
test("レベル76, 種族値110, 努力値192, 個体値31の場合, HP実数値は313となる", () => {
  expect(calcHPActualValue({
    baseStat: 110,
    individual: 31,
    effort: 192,
    level: 76,
    pokemonName: "annihilape",
  })).toBe(313);
});
test("レベル38, 種族値108, 個体値31, 努力値204の場合、 HP実数値は161となる", () => {
  expect(calcHPActualValue({
    baseStat: 108,
    individual: 31,
    effort: 204,
    level: 38,
    pokemonName: "garchomp",
  })).toBe(161);
});
test("ヌケニンの場合、値がなんであれ1になる", () => {
  expect(calcHPActualValue({
    pokemonName: "shedinja",
    baseStat: 1,
    individual: 31,
    effort: 252,
    level: 100,
  })).toBe(1);
});
