import { Tr, Th, Tbody, Td, Text } from "@chakra-ui/react";

import { items } from "@/constants";
import { getItemAmount } from "@/functions";
import type { EffortValueState } from "@/types";
import { toJaStatusSpecies } from "@/utils";

type Props = {
  effortValueDiff: EffortValueState;
};

export function TableBody({ effortValueDiff }: Props) {
  const item = items.find(({ type }) => effortValueDiff.type === type);

  const { largeIncrease, smallIncrease, decrease } = getItemAmount(effortValueDiff.value);

  return (
    <Tbody>
      <Tr>
        <Th py="8px">{toJaStatusSpecies(effortValueDiff.type)}</Th>
        <Td py="8px">
          <Text align="right">
            {effortValueDiff.value}
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
