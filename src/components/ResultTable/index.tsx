import { Card, CardBody, CardHeader, TableContainer, Table, Thead, Tr, Th, Heading, Text, Image, Stack } from "@chakra-ui/react";

import { TableBody } from "./TableBody";

export function ResultTable() {
  return (
    <Card>
      <CardHeader textAlign="center">
        <Heading size="sm">
          使用するアイテム
        </Heading>
      </CardHeader>
      <CardBody>
        <TableContainer>
          <Table
            size="sm"
            variant="unstyled"
          >
            <Thead>
              <Tr>
                <Th />
                <Th>増減値</Th>
                <Th>
                  <Stack
                    align="center"
                    direction="row"
                    gap="0"
                  >
                    <Text>増加アイテム</Text>
                    <Image
                      alt="ドリンク"
                      boxSize="24px"
                      src="/images/drink.png"
                    />
                    <Text> / 個数</Text>
                  </Stack>
                </Th>
                <Th>
                  <Stack
                    align="center"
                    direction="row"
                    gap="0"
                  >
                    <Text>増加アイテム</Text>
                    <Image
                      alt="ハネ"
                      boxSize="24px"
                      src="/images/wing.png"
                    />
                    <Text> / 個数</Text>
                  </Stack>
                </Th>
                <Th>
                  <Stack
                    align="center"
                    direction="row"
                    gap="0"
                  >
                    <Text>減少アイテム</Text>
                    <Image
                      alt="きのみ"
                      boxSize="24px"
                      src="/images/berry.png"
                    />
                    <Text> / 個数</Text>
                  </Stack>
                </Th>
              </Tr>
              <Tr />
            </Thead>
            <TableBody />
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
}
