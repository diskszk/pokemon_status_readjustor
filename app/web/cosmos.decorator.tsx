import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Viewport } from "react-cosmos/client";

import type { PropsWithChildren } from "react";

function ViewportDecorator({ children, options }) {
  if (options.viewport)
    return (
      <Viewport
        {...options.viewport}
      >
        {children}
      </Viewport>
    );

  return children;
}

function ChakraDecorator({ children }: PropsWithChildren) {
  return (
    <ChakraProvider
      resetCSS={true}
      toastOptions={{ defaultOptions: { position: "bottom" } }}
    >
      <div style={{ display: "flex", justifyContent: "center", margin: "auto", verticalAlign: "bottom" }}>
        {children}
      </div>

    </ChakraProvider>
  );
}

export default [ChakraDecorator, ViewportDecorator];
