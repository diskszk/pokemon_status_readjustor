import { expect, test } from "vitest";

import { calcActualValue } from ".";

test("レベル50, 種族値130, 努力値0, 個体値0, 性格補正1の場合、実数値は135となる", () => {
  expect(calcActualValue({
    level: 50,
    baseStat: 130,
    effortValue: 0,
    individualValue: 0,
    natureValue: 1,
  })).toBe(135);
});
test("レベル50, 種族値130, 努力値252, 個体値31, 性格補正1.1の場合、実数値は200となる", () => {
  expect(calcActualValue({
    level: 50,
    baseStat: 130,
    effortValue: 252,
    individualValue: 31,
    natureValue: 1.1,
  })).toBe(200);
});
test("レベル50, 種族値130, 努力値0, 個体値0, 性格補正0.9の場合、実数値は121となる", () => {
  expect(calcActualValue({
    level: 50,
    baseStat: 130,
    effortValue: 0,
    individualValue: 0,
    natureValue: 0.9,
  })).toBe(121);
});
test("レベル61, 種族値81, 努力値96, 個体値31, 性格補正1の場合、時数値は137となる", () => {
  expect(calcActualValue({
    level: 61,
    baseStat: 81,
    effortValue: 96,
    individualValue: 31,
    natureValue: 1,
  })).toBe(137);
});
test("レベル20, 種族値10, 努力値0, 個体値31, 性格補正1.1の場合、実数値は16となる", () => {
  expect(calcActualValue({
    level: 20,
    baseStat: 10,
    effortValue: 0,
    individualValue: 31,
    natureValue: 1.1,
  })).toBe(16);
});
