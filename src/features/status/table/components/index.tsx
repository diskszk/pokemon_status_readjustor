import { TableContainer, Table } from "@chakra-ui/react";

import type { PokemonStatus, StatusType } from "@/types";

import { TableBody } from "./partials";
import { TableHead } from "./ui";

type Props = {
  level: number;
  baseStats: PokemonStatus[];
  statusType: StatusType;
};

export function StatusTable({ level, baseStats, statusType }: Props) {
  return (
    <TableContainer>
      <Table
        size="sm"
        variant="simple"
      >
        <TableHead />
        <TableBody
          level={level}
          pokemonBaseStats={baseStats}
          statusType={statusType}
        />
      </Table>
    </TableContainer>
  );
}
