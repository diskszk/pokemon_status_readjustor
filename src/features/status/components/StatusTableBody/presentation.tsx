import {
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

import type { StatusSpecies } from "@/types";

import { TABLE_WIDTH, INPUT_GROUP_WIDTH, MAX_TOTAL_EFFORT_VALUE, MAX_EFFORT_VALUE, MAX_INDIVIDUAL_VALUE } from "../../constants";
import { toJaStatusSpecies } from "../../logic/toJaStatusSpecies";
import { ExtremeButton } from "../ExtremeButton";

import type { MouseEventHandler } from "react";

type Props = {
  speciesName: StatusSpecies;
  actualValue: number;
  maximumActualValue: number;
  minimumActualValue: number;
  handleChangeActualValue: (valueAsString: string, valueAsNumber: number) => void;
  effortValue: number;
  totalEffortValue: number;
  handleChangeEffortValue: (valueAsString: string, valueAsNumber: number) => void;
  maximizeEffortValue: MouseEventHandler<HTMLButtonElement>;
  minimizeEffortValue: MouseEventHandler<HTMLButtonElement>;
  individualValue: number;
  handleChangeIndividualValue: (valueAsString: string, valueAsNumber: number) => void;
  maximizeIndividualValue: MouseEventHandler<HTMLButtonElement>;
  minimizeIndividualValue: MouseEventHandler<HTMLButtonElement>;
  natureInputUi?: JSX.Element;
};

export function Presentation({
  speciesName,
  actualValue,
  maximumActualValue,
  minimumActualValue,
  handleChangeActualValue,
  effortValue,
  totalEffortValue,
  handleChangeEffortValue,
  maximizeEffortValue,
  minimizeEffortValue,
  individualValue,
  handleChangeIndividualValue,
  maximizeIndividualValue,
  minimizeIndividualValue,
  natureInputUi,
}: Props) {
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
            onChange={handleChangeActualValue}
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
              onChange={handleChangeEffortValue}
              step={effortValue === 0 ? 4 : 8}
              value={effortValue}
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
                <ExtremeButton
                  aria-label="努力値を最大"
                  onClick={maximizeEffortValue}
                >
                  MAX
                </ExtremeButton>
                <ExtremeButton
                  aria-label="努力値を0"
                  onClick={minimizeEffortValue}
                >
                  MIN
                </ExtremeButton>
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
              onChange={handleChangeIndividualValue}
              step={1}
              value={individualValue}
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
                <ExtremeButton
                  aria-label="個体値を最高"
                  onClick={maximizeIndividualValue}
                >
                  MAX
                </ExtremeButton>
                <ExtremeButton
                  aria-label="個体値を0"
                  onClick={minimizeIndividualValue}
                >
                  MIN
                </ExtremeButton>
              </VStack>
            </InputRightElement>
          </InputGroup>
        </Td>
        <Td>
          {natureInputUi}
        </Td>
      </Tr>
    </Tbody>
  );
}
