import { expect, test } from "vitest";

import { calcHPActualValue } from ".";

test("レベル50,種族値108, 努力値0, 個体値0の場合、HP実数値は168となる", () => {
  expect(calcHPActualValue({
    baseStat: 108,
    individualValue: 0,
    effortValue: 0,
    level: 50,
  })).toBe(168);
});
test("レベル50,種族値108, 努力値252, 個体値31の場合、HP実数値は215となる", () => {
  expect(calcHPActualValue({
    baseStat: 108,
    individualValue: 31,
    effortValue: 252,
    level: 50,
  })).toBe(215);
});
test("レベル1, 種族値50, 努力値0, 個体値31の場合、HP実数値は12となる", () => {
  expect(calcHPActualValue({
    baseStat: 50,
    individualValue: 31,
    effortValue: 0,
    level: 1,
  })).toBe(12);
});
test("レベル76, 種族値110, 努力値192, 個体値31の場合, HP実数値は313となる", () => {
  expect(calcHPActualValue({
    baseStat: 110,
    individualValue: 31,
    effortValue: 192,
    level: 76,
  })).toBe(313);
});
test("レベル38, 種族値108, 個体値31, 努力値204の場合、 HP実数値は161となる", () => {
  expect(calcHPActualValue({
    baseStat: 108,
    individualValue: 31,
    effortValue: 204,
    level: 38,
  })).toBe(161);
});
test("ヌケニンの場合、値がなんであれ1になる", () => {
  expect(calcHPActualValue({
    baseStat: 1,
    individualValue: 31,
    effortValue: 252,
    level: 100,
  })).toBe(1);
});
