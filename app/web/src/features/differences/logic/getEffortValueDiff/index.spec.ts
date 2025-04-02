import { expect, test } from "vitest";

import type { PokemonStatus } from "@/types";

import { getEffortValueDiff } from ".";

test("現在のこうげきが252, 調整後の攻撃が180の場合、差は72", () => {
  const currentEffortValues = [
    { value: 0, name: "hp" },
    { value: 252, name: "attack" },
    { value: 0, name: "defense" },
    { value: 0, name: "special-attack" },
    { value: 0, name: "special-defense" },
    { value: 0, name: "speed" },
  ] satisfies PokemonStatus[];
  const adjustedEffortValues = [
    { value: 0, name: "hp" },
    { value: 180, name: "attack" },
    { value: 0, name: "defense" },
    { value: 0, name: "special-attack" },
    { value: 0, name: "special-defense" },
    { value: 0, name: "speed" },
  ] satisfies PokemonStatus[];

  expect(getEffortValueDiff(currentEffortValues, adjustedEffortValues)).toEqual([
    { value: 0, name: "hp" },
    { value: -72, name: "attack" },
    { value: 0, name: "defense" },
    { value: 0, name: "special-attack" },
    { value: 0, name: "special-defense" },
    { value: 0, name: "speed" },
  ]);
});
test("努力値がそれぞれ現在のHが4, Aが252Bが4、Dが92、Sさが156, 調整後のHが44Aが252、Bが36、Dが4のSが172の場合、差はそれぞれHが+40,Aが+-0,Bが+32,Dが-88,Sが+16である", () => {
  const currentEffortValues = [
    { value: 4, name: "hp" },
    { value: 252, name: "attack" },
    { value: 4, name: "defense" },
    { value: 0, name: "special-attack" },
    { value: 92, name: "special-defense" },
    { value: 156, name: "speed" },
  ] satisfies PokemonStatus[];
  const adjustedEffortValues = [
    { value: 44, name: "hp" },
    { value: 252, name: "attack" },
    { value: 36, name: "defense" },
    { value: 0, name: "special-attack" },
    { value: 4, name: "special-defense" },
    { value: 172, name: "speed" },
  ] satisfies PokemonStatus[];

  expect(getEffortValueDiff(currentEffortValues, adjustedEffortValues)).toEqual([
    { value: 40, name: "hp" },
    { value: 0, name: "attack" },
    { value: 32, name: "defense" },
    { value: 0, name: "special-attack" },
    { value: -88, name: "special-defense" },
    { value: 16, name: "speed" },
  ]);
});
