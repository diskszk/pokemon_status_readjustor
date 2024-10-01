import { HStack, Skeleton } from "@chakra-ui/react";
import { useAtomValue } from "jotai";

import { ADJUSTED, CURRENT } from "@/features/constants";
import { useErrorToast } from "@/features/hooks";
import { garchomp } from "@/features/mock/pokemons";
import { pokemonNameAtom } from "@/features/stores";

import { usePokemonBaseStats } from "../hooks";
import { StatusTable } from "./StatusTable";

export function StatusTableWrapper() {
  const pokemonName = useAtomValue(pokemonNameAtom);

  const { showErrorToast } = useErrorToast();
  const { baseStatsData, fetching, error } = usePokemonBaseStats(pokemonName);

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
