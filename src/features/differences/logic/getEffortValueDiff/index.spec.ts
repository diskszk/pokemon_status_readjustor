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
    { value: 72, name: "attack" },
    { value: 0, name: "defense" },
    { value: 0, name: "special-attack" },
    { value: 0, name: "special-defense" },
    { value: 0, name: "speed" },
  ]);
});
