import { TableContainer, Table, Tbody } from "@chakra-ui/react";
import { Provider } from "jotai";

import type { PokemonStatus, StatusType } from "@/types";

import { TableHead } from "./ui";
import { TableRow } from "../../tableRow/components/TableRow";

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
        <Tbody>
          {baseStats.map((b, key) => (
            <Provider key={key}>
              <TableRow
                baseStat={b.value}
                level={level}
                speciesName={b.name}
                statusType={statusType}
              />
            </Provider>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
