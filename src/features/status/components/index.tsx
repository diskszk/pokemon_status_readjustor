import { HStack, Skeleton } from "@chakra-ui/react";
import { useAtomValue } from "jotai";

import { pokemonIndividualIdAtom } from "@/atoms";
import { ADJUSTED, CURRENT } from "@/constants";
import { useErrorToast } from "@/features/hooks";
import { garchomp } from "@/mockData/pokemons";

import { usePokemonBaseStats } from "../hooks";
import { StatusTable } from "./table/StatusTable";

export function StatusTableWrapper() {
  const pokemonIndividualId = useAtomValue(pokemonIndividualIdAtom);

  const { showErrorToast } = useErrorToast();
  const { baseStatsData, fetching, error } = usePokemonBaseStats(pokemonIndividualId);

  if (error) {
    showErrorToast({
      description: "データの取得に失敗しました",
    });
  }

  const baseStats = baseStatsData || garchomp.baseStats;

  return (
    <HStack spacing="32px">
      <Skeleton isLoaded={!fetching}>
        <StatusTable
          label="現在のステータス"
          pokemonBaseStats={baseStats}
          statusType={CURRENT}
        />
      </Skeleton>
      <Skeleton isLoaded={!fetching}>
        <StatusTable
          label="調整後のステータス"
          pokemonBaseStats={baseStats}
          statusType={ADJUSTED}
        />
      </Skeleton>
    </HStack>
  );
}
