import { useAtomValue } from "jotai";
import { useState } from "react";

import { adjustedEffortValueAtom, currentEffortValueAtom, pokemonIndividualIdAtom } from "@/atoms";
import { CURRENT } from "@/constants";
import { useErrorToast } from "@/hooks";
import type { StatusType } from "@/types";

import { useEffortValue, usePokemonBaseStats } from "../hooks";
import { Presentation } from "./presentation";

type Props = {
  statusType: StatusType;
  label: string;
};

export function Status({ statusType, label }: Props) {
  const [level, setLevel] = useState(50);

  const effortValueAtom = statusType === CURRENT ? currentEffortValueAtom : adjustedEffortValueAtom;
  const { totalEffortValue } = useEffortValue(effortValueAtom);

  const pokemonIndividualId = useAtomValue(pokemonIndividualIdAtom);

  const { showErrorToast } = useErrorToast();

  // TODO: 外に出す
  const { baseStatsData, error } = usePokemonBaseStats(pokemonIndividualId);

  if (error) {
    showErrorToast({
      description: "データの取得に失敗しました",
    });
  }

  return (
    <Presentation
      baseStats={baseStatsData}
      label={label}
      level={level}
      setLevel={setLevel}
      statusType={statusType}
      totalEffortValue={totalEffortValue}
    />
  );
}
