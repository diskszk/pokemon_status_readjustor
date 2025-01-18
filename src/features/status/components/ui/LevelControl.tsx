import {
  FormControl,
  FormLabel,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

import type { Dispatch, SetStateAction } from "react";

export function LevelControl({ level, setLevel }: { level: number; setLevel: Dispatch<SetStateAction<number>>;
}) {
  return (
    <FormControl>
      <HStack>
        <FormLabel m="0 2px">レベル</FormLabel>
        <NumberInput
          aria-label="レベル"
          max={100}
          min={1}
          onChange={(_, value) => setLevel((value))}
          size="sm"
          value={level}
          variant="flushed"
          width="60px"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </HStack>
    </FormControl>
  );
}
