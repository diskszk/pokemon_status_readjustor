import { expect, test } from "vitest";

import { calcEffortValue } from ".";

test("レベル50, 種族値100, 実数値120, 個体値31, 性格補正1の場合、努力値は0となる", () => {
  expect(calcEffortValue({
    level: 50,
    baseStat: 100,
    actualValue: 120,
    individualValue: 31,
    natureValue: 1,
  })).toBe(0);
});

test("レベル50, 種族値100, 実数値152, 個体値31, 性格補正1の場合、努力値は252となる", () => {
  expect(calcEffortValue({
    level: 50,
    baseStat: 100,
    actualValue: 152,
    individualValue: 31,
    natureValue: 1,
  })).toBe(252);
});
