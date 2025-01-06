import {
  Card,
  CardBody,
  Table,
  TableContainer,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

import { adjustedEffortValueAtom, currentEffortValueAtom } from "@/atoms";
import { CURRENT } from "@/constants";
import { useEffortValue } from "@/features/hooks";
import type { PokemonStatus, StatusType } from "@/types";

import { HeadLine, TableBody } from "./partials";
import { TableHead, TotalEffortValue } from "./ui";

type Props = {
  pokemonBaseStats: PokemonStatus[];
  statusType: StatusType;
  label: string;
};

export function StatusTable({ pokemonBaseStats, statusType, label }: Props) {
  const [level, setLevel] = useState(50);

  const effortValueAtom = statusType === CURRENT ? currentEffortValueAtom : adjustedEffortValueAtom;
  const { totalEffortValue } = useEffortValue(effortValueAtom);

  return (
    <Card borderRadius="lg">
      <HeadLine
        label={label}
        level={level}
        setLevel={setLevel}
      />
      <CardBody py="8px">
        <VStack>
          <TableContainer>
            <Table
              size="sm"
              variant="simple"
            >
              <TableHead />
              <TableBody
                level={level}
                pokemonBaseStats={pokemonBaseStats}
                statusType={statusType}
              />
            </Table>
          </TableContainer>
        </VStack>
        <TotalEffortValue totalEffortValue={totalEffortValue} />
      </CardBody>
    </Card>
  );
}
