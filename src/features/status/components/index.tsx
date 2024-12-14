import { HStack, Skeleton } from "@chakra-ui/react";
import { useAtomValue } from "jotai";

import { pokemonNameAtom } from "@/atoms";
import { ADJUSTED, CURRENT } from "@/features/constants";
import { useErrorToast } from "@/features/hooks";
import { garchomp } from "@/features/mock/pokemons";

import { usePokemonBaseStats } from "../hooks";
import { StatusTable } from "./StatusTable";

export function StatusTableWrapper() {
  const pokemonName = useAtomValue(pokemonNameAtom);

  const { showErrorToast } = useErrorToast();
  const { baseStatsData, fetching, error } = usePokemonBaseStats(151); // Build Error 回避

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
          header="現在のステータス"
          pokemonBaseStats={baseStats}
          pokemonName={pokemonName}
          statusType={CURRENT}
        />
      </Skeleton>
      <Skeleton isLoaded={!fetching}>
        <StatusTable
          header="調整後のステータス"
          pokemonBaseStats={baseStats}
          pokemonName={pokemonName}
          statusType={ADJUSTED}
        />
      </Skeleton>
    </HStack>
  );
}
