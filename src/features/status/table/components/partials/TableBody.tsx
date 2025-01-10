import { Tbody } from "@chakra-ui/react";

import { HP } from "@/constants";
import type { PokemonStatus, StatusType } from "@/types";

import { HpStatusTableBody, StatusTableBody } from "../../../tableRow/components";

type Props = {
  pokemonBaseStats: PokemonStatus[];
  level: number;
  statusType: StatusType;
};

export function TableBody({ pokemonBaseStats, level, statusType }: Props) {
  return (
    <Tbody>
      {pokemonBaseStats.map((p, key) => (
        p.name === HP ? (
          <HpStatusTableBody
            baseStat={p.value}
            key={key}
            level={level}
            statusType={statusType}
          />
        ) : (
          <StatusTableBody
            baseStat={p.value}
            key={key}
            level={level}
            speciesName={p.name}
            statusType={statusType}
          />
        )
      ))}
    </Tbody>
  );
}
