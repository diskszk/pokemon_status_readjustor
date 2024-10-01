import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import type { GlobalProvider } from "@ladle/react";

export const Provider: GlobalProvider = ({ children }) => (
  <div>
    <ChakraProvider
      resetCSS={true}
      toastOptions={{ defaultOptions: { position: "bottom" } }}
    >
      {children}
    </ChakraProvider>
  </div>

);
