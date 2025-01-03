import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Table,
  TableContainer,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

import { adjustedEffortValueAtom, currentEffortValueAtom } from "@/atoms/effortValueAtom";
import { CURRENT, HP } from "@/features/constants";
import { useEffortValue } from "@/features/hooks";
import type { PokemonStatus, StatusType } from "@/types";

import { HpStatusTableBody, StatusTableBody } from "../StatusTableBody";
import { LevelControl } from "./ui/LevelControl";
import { TableHead } from "./ui/TableHead";
import { TableHeading } from "./ui/TableHeading";
import { TotalEffortValue } from "./ui/TotalEffortValue";

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
      <CardHeader
        pb="8px"
        pt="12px"
      >
        <HStack alignItems="center">
          <TableHeading label={label} />
          <LevelControl
            level={level}
            setLevel={setLevel}
          />
        </HStack>
      </CardHeader>
      <CardBody py="8px">
        <VStack>
          <TableContainer>
            <Table
              size="sm"
              variant="simple"
            >
              <TableHead />
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
            </Table>
          </TableContainer>
        </VStack>
        <TotalEffortValue totalEffortValue={totalEffortValue} />
      </CardBody>
    </Card>
  );
}
