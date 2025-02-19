import { HStack, Skeleton } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { Suspense } from "react";

import { usePokemonBaseStatsQuery } from "@/api";
import { pokemonIndividualIdAtom } from "@/atoms";
import { ADJUSTED, CURRENT } from "@/constants";
import { useErrorToast } from "@/hooks";
import { garchomp } from "@/mockData/pokemons";

import { Status } from "./Status";

export function StatusTableList() {
  const pokemonIndividualId = useAtomValue(pokemonIndividualIdAtom);

  const { showErrorToast } = useErrorToast();

  const { baseStatsData, error } = usePokemonBaseStatsQuery(pokemonIndividualId);

  if (error) {
    showErrorToast({
      description: "データの取得に失敗しました",
    });
  }
  return (
    <HStack spacing="32px">
      <Suspense fallback={<Skeleton />}>
        <Status
          baseStats={baseStatsData || garchomp.baseStats}
          label="現在のステータス"
          statusType={CURRENT}
        />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <Status
          baseStats={baseStatsData || garchomp.baseStats}
          label="調整後のステータス"
          statusType={ADJUSTED}
        />
      </Suspense>
    </HStack>
  );
}
