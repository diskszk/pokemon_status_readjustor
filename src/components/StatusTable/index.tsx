import { Button, Flex, Table, TableContainer, Th, Thead, Tr, VStack } from "@chakra-ui/react";

import { TableBody } from "./TableBody";

export function StatusTable() {
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

  return (
    <Flex>
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
                <Th>種族値</Th>
                <Th>性格補正</Th>
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
        <Button
          alignSelf="start"
          aria-label="リセット"
        >
          reset
        </Button>
      </VStack>
    </Flex>
  );
}
