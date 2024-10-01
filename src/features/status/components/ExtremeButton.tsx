import { Button } from "@chakra-ui/react";

import type { ButtonProps } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

export function ExtremeButton(props: ButtonProps & PropsWithChildren) {
  const { children, ...buttonProps } = props;

  return (
    <Button
      height="16px"
      size="xs"
      width="44px"
      {...buttonProps}
    >
      {children}
    </Button>
  );
}
