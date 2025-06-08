import type { NatureValue } from "@/types";

type CalculatorsParams = {
  baseStat: number;
  level: number;
  actualValue: number;
  effortValue: number;
  individualValue: number;
  natureValue: NatureValue;
};

export type CalcActualValueParams = Omit<CalculatorsParams, "actualValue">;

export type CalcEffortValueParams = Omit<CalculatorsParams, "effortValue">;
