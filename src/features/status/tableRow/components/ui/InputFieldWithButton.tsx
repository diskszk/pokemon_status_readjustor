import {
  Button,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";

import { INPUT_GROUP_WIDTH } from "@/features/status/tableRow/components/styleConfig";

import { InputField } from "./InputField";

import type {
  ButtonProps,
  NumberInputProps } from "@chakra-ui/react";

export function InputFieldWithButton({ inputProps, maxButtonProps, minimumButtonProps }: { inputProps: NumberInputProps; maxButtonProps: ButtonProps; minimumButtonProps: ButtonProps }) {
  return (
    <InputGroup width={INPUT_GROUP_WIDTH}>
      <InputField
        {...inputProps}
      />
      <InputRightElement>
        <VStack gap="4px">
          <Button
            height="16px"
            size="xs"
            width="44px"
            {...maxButtonProps}
          >
            MAX
          </Button>
          <Button
            height="16px"
            size="xs"
            width="44px"
            {...minimumButtonProps}
          >
            MIN
          </Button>
        </VStack>
      </InputRightElement>
    </InputGroup>
  );
}
