import {
  Card,
  CardBody,
  VStack,
} from "@chakra-ui/react";
import { atom, Provider } from "jotai";
import { useMemo } from "react";

import type { PokemonStatus, StatusType } from "@/types";

import * as styles from "./styles.css";
import { TotalEffortValue } from "./ui/TotalEffortValue";
import { StatusTable } from "../table/components";
import { LevelControl } from "./ui/LevelControl";

type Props = {
  label: string;
  baseStats: PokemonStatus[];
  statusType: StatusType;
  totalEffortValue: number;
};

export function Presentation({
  label,
  baseStats,
  statusType,
  totalEffortValue,
}: Props) {
  // TODO: Presentationパターン再考する
  const levelAtom = useMemo(() => atom(50), []);

  return (

    <Provider>
      <Card borderRadius="lg">
        <div
          className={styles.headlineContainer}
        >
          <h2 className={styles.heading}>
            {label}
          </h2>
          <LevelControl levelAtom={levelAtom} />
        </div>
        <CardBody py="8px">
          <VStack>
            <StatusTable
              baseStats={baseStats}
              levelAtom={levelAtom}
              statusType={statusType}
            />
          </VStack>
          <TotalEffortValue totalEffortValue={totalEffortValue} />
        </CardBody>
      </Card>
    </Provider>

  );
}
