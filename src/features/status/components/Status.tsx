import { useState } from "react";

import { adjustedEffortValueAtom, currentEffortValueAtom } from "@/atoms";
import { CURRENT } from "@/constants";
import type { PokemonStatus, StatusType } from "@/types";

import { useEffortValue } from "../hooks";
import { Presentation } from "./presentation";

type Props = {
  statusType: StatusType;
  label: string;
  baseStats: PokemonStatus[];
};

export function Status({ statusType, label, baseStats }: Props) {
  const [level, setLevel] = useState(50);

  const effortValueAtom = statusType === CURRENT ? currentEffortValueAtom : adjustedEffortValueAtom;
  const { totalEffortValue } = useEffortValue(effortValueAtom);

  return (
    <Presentation
      baseStats={baseStats}
      label={label}
      level={level}
      setLevel={setLevel}
      statusType={statusType}
      totalEffortValue={totalEffortValue}
    />
  );
}
