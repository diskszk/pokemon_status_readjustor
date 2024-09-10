import { Button, Card, CardBody, CardHeader, FormControl, FormLabel, Heading, HStack, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Table, TableContainer, Th, Thead, Tr, VStack } from "@chakra-ui/react";

import { TableBody } from "./TableBody";

const garchomp = {
  baseStats: [
    { value: 108, name: "hp" },
    { value: 130, name: "attack" },
    { value: 95, name: "defense" },
    { value: 80, name: "special-attack" },
    { value: 85, name: "special-defense" },
    { value: 102, name: "speed" },
  ],
};

export function StatusTable() {
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
              <FormLabel m="0 2px">
                レベル
              </FormLabel>
              <NumberInput
                aria-label="レベル"
                defaultValue={50}
                max={100}
                min={1}
                size="sm"
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
          <Button
            aria-label="リセット"
            size="xs"
          >
            リセット
          </Button>
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
              {garchomp.baseStats.map((stat, key) => (
                <TableBody
                  {...stat}
                  key={key}
                />
              ))}
            </Table>
          </TableContainer>
        </VStack>
      </CardBody>
    </Card>
  );
}
