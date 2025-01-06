import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

import { TABLE_WIDTH } from "@/features/status/components/styleConfig";

import type {
  NumberInputProps } from "@chakra-ui/react";

export function InputField(props: NumberInputProps) {
  return (
    <NumberInput
      variant="flushed"
      width={TABLE_WIDTH}
      {...props}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
}
