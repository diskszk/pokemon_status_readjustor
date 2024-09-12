import { MinusIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Button, IconButton, InputGroup, InputRightElement, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Tbody, Td, Th, Tr, VStack } from "@chakra-ui/react";
import { useState } from "react";

import { HP } from "@/constants";
import { calcActualValue, calcHPActualValue } from "@/functions";
import { useAdjustedEffortValue, useCurrentEffortValue } from "@/hooks";
import type { StatusSpeciesEN } from "@/types";
import { toJaStatusSpecies } from "@/utils";

type Props = {
  level: number;
  pokemonName: string;
  speciesName: StatusSpeciesEN;
  baseStat: number;
  type: "current" | "readjusted";
};

const INPUT_GROUP_WIDTH = "152px";
const TABLE_WIDTH = "100px";

const MAX_EFFORT_VALUE = 252;
const MAX_TOTAL_EFFORT_VALUE = 510;

export function TableBody({ speciesName, baseStat, level, pokemonName, type }: Props) {
  const [individual, setIndividual] = useState(31);
  const hooks = type === "current" ? useCurrentEffortValue : useAdjustedEffortValue;

  const { setEffortValue, totalEffortValue, allEffortValue } = hooks();

  const effortValue = allEffortValue.find((v) => v.type === speciesName);

  if (!effortValue) {
    throw new Error();
  }

  const natureCorrection = 1;

  const actualValue = speciesName === HP ? calcHPActualValue({
    baseStat, individual, effort: effortValue.value, level, pokemonName,
  }) : calcActualValue({
    baseStat, individual, effort: effortValue.value, level, natureCorrection,
  });

  return (
    <Tbody>
      <Tr>
        <Th>{toJaStatusSpecies(speciesName)}</Th>
        <Td>
          <NumberInput
            aria-label="実数値"
            defaultValue={actualValue}
            min={1}
            variant="flushed"
            width={TABLE_WIDTH}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Td>
        <Td>
          <InputGroup width={INPUT_GROUP_WIDTH}>
            <NumberInput
              aria-label="努力値"
              defaultValue={0}
              isInvalid={totalEffortValue > MAX_TOTAL_EFFORT_VALUE}
              max={MAX_EFFORT_VALUE}
              min={0}
              onChange={(value) => setEffortValue({ type: speciesName, value: Number(value) })}
              step={4}
              value={effortValue.value}
              variant="flushed"
              width={TABLE_WIDTH}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <InputRightElement>
              <VStack gap="4px">
                <Button
                  aria-label="努力値を最大"
                  height="16px"
                  onClick={() => setEffortValue({
                    ...effortValue,
                    value: MAX_EFFORT_VALUE,
                  })}
                  size="xs"
                  width="44px"
                >
                  MAX
                </Button>
                <Button
                  aria-label="努力値を0"
                  height="16px"
                  onClick={() => setEffortValue({
                    ...effortValue,
                    value: 0,
                  })}
                  size="xs"
                  width="44px"
                >
                  MIN
                </Button>
              </VStack>
            </InputRightElement>
          </InputGroup>
        </Td>
        <Td>
          <InputGroup width={INPUT_GROUP_WIDTH}>
            <NumberInput
              aria-label="個体値"
              defaultValue={31}
              max={31}
              min={0}
              onChange={(value) => setIndividual(Number(value))}
              step={1}
              value={individual}
              variant="flushed"
              width={TABLE_WIDTH}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <InputRightElement>
              <VStack gap="4px">
                <Button
                  aria-label="個体値を最高"
                  height="16px"
                  onClick={() => setIndividual(31)}
                  size="xs"
                  width="44px"
                >
                  MAX
                </Button>
                <Button
                  aria-label="個体値を0"
                  height="16px"
                  onClick={() => setIndividual(0)}
                  size="xs"
                  width="44px"
                >
                  MIN
                </Button>
              </VStack>
            </InputRightElement>
          </InputGroup>
        </Td>
        <Td>
          {speciesName !== HP && (
            <VStack gap="4px">
              <IconButton
                aria-label="上方補正"
                colorScheme="blue"
                height="16px"
                icon={<SmallAddIcon />}
                size="xs"
                variant="outline"
              />
              <IconButton
                aria-label="上方補正"
                colorScheme="pink"
                height="16px"
                icon={<MinusIcon />}
                size="xs"
                variant="outline"
              />
            </VStack>
          )}
        </Td>
      </Tr>
    </Tbody>
  );
}
