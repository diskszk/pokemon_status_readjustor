import { expect, test } from "vitest";

import { calcHPEffortValue } from ".";

test("レベル50, 種族値45, 実数値120, 個体値31, 性格補正1の場合、努力値は0となる", () => {
  expect(calcHPEffortValue({
    level: 50,
    baseStat: 45,
    actualValue: 120,
    individualValue: 31,
  })).toBe(0);
});

test("レベル50, 種族値45, 実数値152, 個体値31, 性格補正1の場合、努力値は252となる", () => {
  expect(calcHPEffortValue({
    level: 50,
    baseStat: 45,
    actualValue: 152,
    individualValue: 31,
  })).toBe(252);
});
