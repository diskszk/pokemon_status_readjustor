import {
  Button,
  InputGroup,
  InputRightElement,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Tbody,
  Td,
  Th,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";

import { adjustedEffortValueAtom, currentEffortValueAtom } from "@/atoms";
import { CURRENT, HP } from "@/constants";
import { calcActualValue, calcHPActualValue } from "@/functions";
import { useEffortValue, useErrorToast } from "@/hooks";
import type { StatusSpeciesEN, StatusType } from "@/types";
import { toJaStatusSpecies } from "@/utils";

const INPUT_GROUP_WIDTH = "152px";
const TABLE_WIDTH = "100px";

const MAX_EFFORT_VALUE = 252;
const MAX_TOTAL_EFFORT_VALUE = 510;
const MAX_INDIVIDUAL_VALUE = 31;

type Props = {
  level: number;
  pokemonName: string;
  speciesName: StatusSpeciesEN;
  baseStat: number;
  statusType: StatusType;
};

export function TableBody({
  speciesName,
  baseStat,
  level,
  pokemonName,
  statusType,
}: Props) {
  const [individual, setIndividual] = useState(31);
  const effortValueAtom = statusType === CURRENT ? currentEffortValueAtom : adjustedEffortValueAtom;

  const { totalEffortValue, allEffortValue, updateEffortValue } = useEffortValue(effortValueAtom);

  const effortValue = allEffortValue.find((v) => v.type === speciesName);

  const { showErrorToast } = useErrorToast();
  if (!effortValue) {
    showErrorToast({
      description: "努力値が不正な値です。",
    });
    throw Error();
  }

  const [nature, setNature] = useState(1);

  const actualValue = useMemo(() => speciesName === HP ? calcHPActualValue({
    baseStat,
    individual,
    effort: effortValue.value,
    level,
    pokemonName,
  }) : calcActualValue({
    baseStat,
    individual,
    effort: effortValue.value,
    level,
    nature,
  }), [baseStat, effortValue.value, individual, level, nature, pokemonName, speciesName]);

  return (
    <Tbody>
      <Tr>
        <Th>{toJaStatusSpecies(speciesName)}</Th>
        <Td>
          <NumberInput
            aria-label="実数値"
            defaultValue={actualValue}
            min={1}
            value={actualValue}
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
              onChange={(value) => {
                updateEffortValue({ type: speciesName, value: Number(value) });
              }}
              step={effortValue.value === 0 ? 4 : 8}
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
                  onClick={() =>
                    updateEffortValue({
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
                  onClick={() =>
                    updateEffortValue({
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
              max={MAX_INDIVIDUAL_VALUE}
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
            <NumberInput
              aria-label="性格補正"
              defaultValue={String(1)}
              height="16px"
              max={1.1}
              min={0.9}
              onChange={(value) => {
                setNature(Number(value));
              }}
              size="xs"
              step={0.1}
              variant="flushed"
              width={TABLE_WIDTH}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          )}
        </Td>
      </Tr>
    </Tbody>
  );
}
