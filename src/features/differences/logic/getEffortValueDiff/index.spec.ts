import { expect, test } from "vitest";

import type { EffortValueState } from "@/_types";

import { getEffortValueDiff } from ".";

test("現在のこうげきが252, 調整後の攻撃が180の場合、差は72", () => {
  const currentEffortValues = [
    { value: 0, type: "hp" },
    { value: 252, type: "attack" },
    { value: 0, type: "defense" },
    { value: 0, type: "special-attack" },
    { value: 0, type: "special-defense" },
    { value: 0, type: "speed" },
  ] satisfies EffortValueState[];
  const adjustedEffortValues = [
    { value: 0, type: "hp" },
    { value: 180, type: "attack" },
    { value: 0, type: "defense" },
    { value: 0, type: "special-attack" },
    { value: 0, type: "special-defense" },
    { value: 0, type: "speed" },
  ] satisfies EffortValueState[];

  expect(getEffortValueDiff(currentEffortValues, adjustedEffortValues)).toEqual([
    { value: 0, type: "hp" },
    { value: 72, type: "attack" },
    { value: 0, type: "defense" },
    { value: 0, type: "special-attack" },
    { value: 0, type: "special-defense" },
    { value: 0, type: "speed" },
  ]);
});
