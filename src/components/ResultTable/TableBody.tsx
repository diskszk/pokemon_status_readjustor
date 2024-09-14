import { Tr, Th, Tbody, Td, Text } from "@chakra-ui/react";

import { items } from "@/constants";
import { getItemAmount } from "@/functions";
import type { StatusSpeciesEN } from "@/types";
import { toJaStatusSpecies } from "@/utils";

type Props = {
  speciesName: StatusSpeciesEN;
  diffAmount: number;
};

export function TableBody({ speciesName, diffAmount }: Props) {
  const item = items.find(({ type }) => speciesName === type);

  const { largeIncrease, smallIncrease, decrease } = getItemAmount(diffAmount);

  return (
    <Tbody>
      <Tr>
        <Th py="8px">{toJaStatusSpecies(speciesName)}</Th>
        <Td py="8px">
          <Text align="right">
            {diffAmount}
          </Text>
        </Td>
        <Td py="8px">
          {largeIncrease ? (
            <Text align="right">
              {item?.largeIncrease}
              {" / "}
              {largeIncrease}
            </Text>
          ) : (
            <Text align="right">
              0
            </Text>
          )}
        </Td>
        <Td py="8px">
          {smallIncrease ? (
            <Text align="right">
              {item?.smallIncrease}
              {" / "}
              {smallIncrease}
            </Text>
          ) : (
            <Text align="right">
              0
            </Text>
          )}
        </Td>
        <Td py="8px">
          {decrease ? (
            <Text align="right">
              {item?.decrease}
              {" / "}
              {decrease}
            </Text>
          ) : (
            <Text align="right">
              0
            </Text>
          )}
        </Td>
      </Tr>
    </Tbody>
  );
}
