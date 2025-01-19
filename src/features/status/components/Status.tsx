import { useState } from "react";

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

  const { getTotalEffortValue } = useEffortValue();

  return (
    <Presentation
      baseStats={baseStats}
      label={label}
      level={level}
      setLevel={setLevel}
      statusType={statusType}
      totalEffortValue={getTotalEffortValue({ type: statusType })}
    />
  );
}
