import { TableContainer, Table, Thead, Tr, Th, Text, Image, Stack, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box, Card, CardBody } from "@chakra-ui/react";
import { css } from "@emotion/react";

import type { PokemonStatus } from "@/types";

import { TableBody } from "./TableBody";

type Props = {
  effortValueDiff: PokemonStatus[];
};

export function Presentation({
  effortValueDiff,
}: Props) {
  return (
    <Accordion
      allowMultiple
      defaultIndex={[0]}
    >
      <Card>
        <CardBody>
          <AccordionItem>
            <h2>
              <AccordionButton
                pb="8px"
                pt="12px"
                textAlign="center"
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  使用するアイテム
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel py="8px">
              <TableContainer>
                <Table
                  size="md"
                  variant="unstyled"
                >
                  <Thead>
                    <Tr css={css(`
                      th {
                        padding-top: 8px;
                        padding-bottom: 8px;
                      }
                      `)}
                    >
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
                  {effortValueDiff.map((effortValueDiff, key) => (
                    <TableBody
                      effortValueDiff={effortValueDiff}
                      key={key}
                    />
                  ))}
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
        </CardBody>
      </Card>
    </Accordion>
  );
}
