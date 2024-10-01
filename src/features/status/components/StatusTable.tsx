import {
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Table,
  TableContainer,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

import type { BaseStat, StatusType } from "@/_types";
import { HP } from "@/features/constants";

import { HpStatusTableBody, StatusTableBody } from "./StatusTableBody";

type Props = {
  pokemonBaseStats: BaseStat[];
  statusType: StatusType;
  pokemonName: string;
  header: string;
};

export function StatusTable({ pokemonBaseStats, statusType, pokemonName, header }: Props) {
  const [level, setLevel] = useState(50);

  return (
    <Card borderRadius="lg">
      <CardHeader
        pb="8px"
        pt="12px"
      >
        <HStack alignItems="center">
          <Heading
            as="h3"
            px="16px"
            size="sm"
            width="100%"
          >
            {header}
          </Heading>
          <FormControl>
            <HStack>
              <FormLabel m="0 2px">レベル</FormLabel>
              <NumberInput
                aria-label="レベル"
                max={100}
                min={1}
                onChange={(value) => setLevel(Number(value))}
                size="sm"
                value={level}
                variant="flushed"
                width="60px"
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </HStack>
          </FormControl>
        </HStack>
      </CardHeader>
      <CardBody py="8px">
        <VStack>
          <TableContainer>
            <Table
              size="sm"
              variant="simple"
            >
              <Thead alignItems="center">
                <Tr>
                  <Th />
                  <Th>実数値</Th>
                  <Th>努力値</Th>
                  <Th>個体値</Th>
                  <Th>性格</Th>
                </Tr>
                <Tr />
              </Thead>
              {pokemonBaseStats.map((p, key) => (
                p.name === HP ? (
                  <HpStatusTableBody
                    baseStat={p.value}
                    key={key}
                    level={level}
                    pokemonName={pokemonName}
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
      </CardBody>
    </Card>
  );
}
