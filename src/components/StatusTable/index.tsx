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

import type { BaseStat, StatusType } from "@/types";

import { TableBody } from "./TableBody";

type Props = {
  pokemonBaseStats: BaseStat[];
  statusType: StatusType;
  pokemonName: string;
};

export function StatusTable({ pokemonBaseStats, statusType, pokemonName }: Props) {
  const [level, setLevel] = useState(50);

  return (
    <Card borderRadius="lg">
      <CardHeader
        pb="8px"
        pt="12px"
        textAlign="center"
      >
        <HStack alignItems="center">
          <Heading
            as="h3"
            size="sm"
          >
            header
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
                <TableBody
                  baseStat={p.value}
                  key={key}
                  level={level}
                  pokemonName={pokemonName}
                  speciesName={p.name}
                  statusType={statusType}
                />
              ))}
            </Table>
          </TableContainer>
        </VStack>
      </CardBody>
    </Card>
  );
}
