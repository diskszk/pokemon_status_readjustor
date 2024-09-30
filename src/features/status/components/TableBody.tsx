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
import { useCallback, useEffect, useMemo, useState } from "react";

import type { StatusSpeciesEN, StatusType } from "@/_types";
import { CURRENT, HP } from "@/features/constants";
import { useEffortValue, useErrorToast } from "@/features/hooks";
import { adjustedEffortValueAtom, currentEffortValueAtom } from "@/features/stores/effortValueAtom";

import { calcActualValue } from "../logic/calcActualValue";
import { calcEffortValue } from "../logic/calcEffortValue";
import { calcHPActualValue } from "../logic/calcHPActualValue";
import { calcHPEffortValue } from "../logic/calcHPEffortValue";
import { toJaStatusSpecies } from "../logic/toJaStatusSpecies";

const INPUT_GROUP_WIDTH = "152px";
const TABLE_WIDTH = "92px";

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

  const [actualValue, setActualValue] = useState(useMemo(() => speciesName === HP ? calcHPActualValue({
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
  }), [baseStat, effortValue.value, individual, level, nature, pokemonName, speciesName]));

  const minimumActualValue = speciesName === HP ? calcHPActualValue({
    baseStat,
    individual,
    effort: 0,
    level,
    pokemonName,
  }) : calcActualValue({
    baseStat,
    individual,
    effort: 0,
    level,
    nature,
  });
  const maximumActualValue = speciesName === HP ? calcHPActualValue({
    baseStat,
    individual,
    effort: 252,
    level,
    pokemonName,
  }) : calcActualValue({
    baseStat,
    individual,
    effort: 252,
    level,
    nature,
  });

  const updateActualValue = useCallback((updateValue: Partial<typeof calcActualValue | typeof calcHPActualValue>) => {
    const newActualValue = speciesName === HP ? calcHPActualValue({
      baseStat, individual, effort: effortValue.value, level, pokemonName, ...updateValue,
    }) : calcActualValue({
      baseStat, individual, effort: effortValue.value, level, nature, ...updateValue,
    });

    setActualValue(newActualValue);
  }, [baseStat, effortValue.value, individual, level, nature, pokemonName, speciesName]);

  useEffect(() => {
    updateActualValue(level);
  }, [level, updateActualValue]);

  return (
    <Tbody>
      <Tr>
        <Th>{toJaStatusSpecies(speciesName)}</Th>
        <Td>
          <NumberInput
            aria-label="実数値"
            defaultValue={actualValue}
            max={maximumActualValue}
            min={minimumActualValue}
            onChange={(value) => {
              setActualValue(Number(value));
              const newEffortValue = speciesName === HP ? calcHPEffortValue({
                actual: Number(value), level, baseStat, individual,
              }) : calcEffortValue({
                actual: Number(value), level, baseStat, individual, nature,
              });
              updateEffortValue({ type: speciesName, value: newEffortValue });
            }}
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

                updateActualValue({ effort: Number(value) });
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
                  onClick={() => {
                    updateEffortValue({
                      ...effortValue,
                      value: MAX_EFFORT_VALUE,
                    });
                    updateActualValue({ effort: MAX_EFFORT_VALUE });
                  }}
                  size="xs"
                  width="44px"
                >
                  MAX
                </Button>
                <Button
                  aria-label="努力値を0"
                  height="16px"
                  onClick={() => {
                    updateEffortValue({
                      ...effortValue,
                      value: 0,
                    });
                    updateActualValue({ effort: 0 });
                  }}
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
              onChange={(value) => {
                setIndividual(Number(value));
                updateActualValue({ individual: Number(value) });
              }}
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
                  onClick={() => {
                    setIndividual(MAX_INDIVIDUAL_VALUE);
                    updateActualValue({ individual: MAX_INDIVIDUAL_VALUE });
                  }}
                  size="xs"
                  width="44px"
                >
                  MAX
                </Button>
                <Button
                  aria-label="個体値を0"
                  height="16px"
                  onClick={() => {
                    setIndividual(0);
                    updateActualValue({ individual: 0 });
                  }}
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
                updateActualValue({ nature: Number(value) });
              }}
              size="sm"
              step={0.1}
              variant="flushed"
              width="64px"
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
