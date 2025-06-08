import { HP } from "@/constants";
import type { StatusSpecies } from "@/types";

import { calcActualValue } from "./calcActualValue";
import { calcEffortValue } from "./calcEffortValue";
import { calcHPActualValue } from "./calcHPActualValue";
import { calcHPEffortValue } from "./calcHPEffortValue";

import type { CalcActualValueParams, CalcEffortValueParams } from "./types";

function actualValue(type: StatusSpecies, params: CalcActualValueParams): ReturnType<typeof calcActualValue | typeof calcHPActualValue> {
  if (type === HP) {
    return calcHPActualValue(params);
  }
  return calcActualValue(params);
}

function effortValue(type: StatusSpecies, params: CalcEffortValueParams): ReturnType<typeof calcEffortValue | typeof calcHPEffortValue> {
  if (type === HP) {
    return calcHPEffortValue(params);
  }
  return calcEffortValue(params);
};

export const calculators = {
  actualValue,
  effortValue,
};
