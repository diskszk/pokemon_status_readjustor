import { ATK, DEF, HP, SP_ATK, SP_DEF, SPD } from "@/constants";
import type { EffortValue } from "@/features/status/hooks";
import { useEffortValue } from "@/features/status/hooks";
import type { PokemonStatus, StatusSpecies } from "@/types";

import { Presentation } from "./presentation";
import { getEffortValueDiff } from "../logic/getEffortValueDiff";

const isStatusSpecies = (value: string): value is StatusSpecies => {
  return value === HP || value === ATK || value === DEF || value === SP_ATK || value === SP_DEF || value === SPD;
};

const convert = (object: EffortValue): PokemonStatus[] => {
  return Object.entries(object).map(([name, value]) => {
    if (isStatusSpecies(name)) {
      return {
        name,
        value,
      };
    }
  }).filter((v) => v !== undefined);
};

export function Container() {
  const { effortValues } = useEffortValue();

  const currentEffortValues = convert(effortValues.current);
  const adjustedEffortValues = convert(effortValues.adjusted);

  const effortValueDiff = getEffortValueDiff(currentEffortValues, adjustedEffortValues);

  return (
    <Presentation effortValueDiff={effortValueDiff} />
  );
}
