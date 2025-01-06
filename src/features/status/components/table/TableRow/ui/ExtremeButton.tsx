import {
  Button,
  InputRightElement,
  VStack,
  type ButtonProps,
} from "@chakra-ui/react";

export function ExtremeButton({ maxButtonProps, minimumButtonProps }: { maxButtonProps: ButtonProps; minimumButtonProps: ButtonProps }) {
  return (
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
  );
}
