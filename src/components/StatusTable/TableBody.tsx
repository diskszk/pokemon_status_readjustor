import { MinusIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Button, HStack, IconButton, InputGroup, InputRightElement, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Tbody, Td, Th, Tr } from "@chakra-ui/react";
import { useState } from "react";

import { toJaStatusSpecies } from "@/utils";

type Props = {
  name: string;
  value: number;
};

const TABLE_WIDTH = "100px";

export function TableBody({ name, value }: Props) {
  const [effort, setEffort] = useState(0);
  const [individual, setIndividual] = useState(31);

  const jaSpacesName = toJaStatusSpecies(name);

  return (
    <Tbody>
      <Tr>
        <Th>{jaSpacesName}</Th>
        <Td>
          <NumberInput
            aria-label="実数値"
            defaultValue={100}
            min={1} // calc
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
          <InputGroup width="160px">
            <NumberInput
              aria-label="努力値"
              defaultValue={0}
              max={252}
              min={0}
              onChange={(value) => setEffort(Number(value))}
              step={effort === 0 ? 4 : 8}
              value={effort}
              variant="flushed"
              width={TABLE_WIDTH}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <InputRightElement gap="4px">
              <Button
                aria-label="努力値を最大"
                height="24px"
                onClick={() => setEffort(252)}
                size="sm"
              >
                252
              </Button>
              <Button
                aria-label="努力値を0"
                height="24px"
                onClick={() => setEffort(0)}
                size="sm"
              >
                0
              </Button>
            </InputRightElement>
          </InputGroup>
        </Td>
        <Td>
          <InputGroup width="160px">
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
            <InputRightElement gap="4px">
              <Button
                aria-label="個体値を最高"
                height="24px"
                onClick={() => setIndividual(31)}
                size="sm"
              >
                31
              </Button>
              <Button
                aria-label="個体値を0"
                height="24px"
                onClick={() => setIndividual(0)}
                size="sm"
              >
                0
              </Button>
            </InputRightElement>
          </InputGroup>
        </Td>
        <Td
          aria-label="種族値"
          isNumeric
        >
          {value}
        </Td>
        <Td>
          {jaSpacesName !== "HP" && (
            <HStack gap="4px">
              <IconButton
                aria-label="性格をプラス補正"
                colorScheme="blue"
                height="24px"
                icon={<SmallAddIcon />}
                onClick={() => void 0}
                size="sm"
                variant="outline"
              />
              <IconButton
                aria-label="性格をマイナス補正"
                colorScheme="pink"
                height="24px"
                icon={<MinusIcon />}
                onClick={() => void 0}
                size="sm"
                variant="outline"
              />
            </HStack>
          )}
        </Td>
      </Tr>
    </Tbody>
  );
}
