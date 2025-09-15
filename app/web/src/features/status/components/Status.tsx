import type { PokemonStatus, StatusType } from "@/types";

import { useEffortValues } from "../hooks";
import { Presentation } from "./presentation";

type Props = {
  statusType: StatusType;
  label: string;
  baseStats: PokemonStatus[];
};

export function Status({ statusType, label, baseStats }: Props) {
  const { getTotalEffortValue } = useEffortValues();

  return (
    <Presentation
      baseStats={baseStats}
      label={label}
      statusType={statusType}
      totalEffortValue={getTotalEffortValue({ type: statusType })}
    />
  );
}
