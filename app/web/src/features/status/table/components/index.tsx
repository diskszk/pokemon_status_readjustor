import { TableContainer, Table, Tbody } from "@chakra-ui/react";
import { Provider, useAtomValue } from "jotai";

import type { PokemonStatus, StatusType } from "@/types";

import { TableHead } from "./ui";
import { TableRow } from "../../tableRow/components";

import type { atom } from "jotai";

type Props = {
  baseStats: PokemonStatus[];
  statusType: StatusType;
  levelAtom: ReturnType<typeof atom<number>>;
};

export function StatusTable({ baseStats, statusType, levelAtom }: Props) {
  const level = useAtomValue(levelAtom);

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
