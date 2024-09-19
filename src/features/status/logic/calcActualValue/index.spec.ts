import { expect, test } from "vitest";

import { calcActualValue } from ".";

test("レベル50, 種族値130, 努力値0, 個体値0, 性格補正1の場合、実数値は135となる", () => {
  expect(calcActualValue({
    level: 50,
    baseStat: 130,
    effort: 0,
    individual: 0,
    nature: 1,
  })).toBe(135);
});
test("レベル50, 種族値130, 努力値252, 個体値31, 性格補正1.1の場合、実数値は200となる", () => {
  expect(calcActualValue({
    level: 50,
    baseStat: 130,
    effort: 252,
    individual: 31,
    nature: 1.1,
  })).toBe(200);
});
test("レベル50, 種族値130, 努力値0, 個体値0, 性格補正0.9の場合、実数値は121となる", () => {
  expect(calcActualValue({
    level: 50,
    baseStat: 130,
    effort: 0,
    individual: 0,
    nature: 0.9,
  })).toBe(121);
});
test("レベル61, 種族値81, 努力値96, 個体値31, 性格補正1の場合、時数値は137となる", () => {
  expect(calcActualValue({
    level: 61,
    baseStat: 81,
    effort: 96,
    individual: 31,
    nature: 1,
  })).toBe(137);
});
test("レベル20, 種族値10, 努力値0, 個体値31, 性格補正1.1の場合、実数値は16となる", () => {
  expect(calcActualValue({
    level: 20,
    baseStat: 10,
    effort: 0,
    individual: 31,
    nature: 1.1,
  })).toBe(16);
});
