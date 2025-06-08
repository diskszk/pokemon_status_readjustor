import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import type { PropsWithChildren } from "react";

export default function ({ children }: PropsWithChildren) {
  return (
    <ChakraProvider
      resetCSS={true}
      toastOptions={{ defaultOptions: { position: "bottom" } }}
    >
      {children}
    </ChakraProvider>
  );
}
