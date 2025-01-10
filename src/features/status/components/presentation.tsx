import {
  Card,
  CardBody,
  VStack,
} from "@chakra-ui/react";

import { garchomp } from "@/mockData/pokemons";
import type { PokemonStatus, StatusType } from "@/types";

import { HeadLine } from "./partials";
import { TotalEffortValue } from "./ui";
import { StatusTable } from "../table/components";

import type { Dispatch, SetStateAction } from "react";

type Props = {
  label: string;
  level: number;
  setLevel: Dispatch<SetStateAction<number>>;
  baseStats: PokemonStatus[] | undefined;
  statusType: StatusType;
  totalEffortValue: number;
};

export function Presentation({
  label,
  level,
  setLevel,
  baseStats = garchomp.baseStats,
  statusType,
  totalEffortValue,
}: Props) {
  return (
    <Card borderRadius="lg">
      <HeadLine
        label={label}
        level={level}
        setLevel={setLevel}
      />
      <CardBody py="8px">
        <VStack>
          <StatusTable
            baseStats={baseStats}
            level={level}
            statusType={statusType}
          />
        </VStack>
        <TotalEffortValue totalEffortValue={totalEffortValue} />
      </CardBody>
    </Card>
  );
}
