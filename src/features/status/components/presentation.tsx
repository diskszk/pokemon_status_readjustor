import {
  Card,
  CardBody,
  VStack,
} from "@chakra-ui/react";

import type { PokemonStatus, StatusType } from "@/types";

import { HeadLine } from "./partials";
import { TotalEffortValue } from "./ui";
import { StatusTable } from "../table/components";

import type { Dispatch, SetStateAction } from "react";

type Props = {
  label: string;
  level: number;
  setLevel: Dispatch<SetStateAction<number>>;
  baseStats: PokemonStatus[];
  statusType: StatusType;
  totalEffortValue: number;
};

export function Presentation({
  label,
  level,
  setLevel,
  baseStats,
  statusType,
  totalEffortValue,
}: Props) {
  return (
    <Card
      borderRadius="lg"
      position="static"
    >
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
