import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { cacheExchange, Client, fetchExchange, Provider as UrqlProvider } from "urql";

import { API_ENDPOINT } from "@/features/constants/index.ts";

import { Head } from "./meta/head";

import type { PropsWithChildren } from "react";

const client = new Client({
  url: API_ENDPOINT,
  exchanges: [cacheExchange, fetchExchange],
});

export function Providers({ children }: PropsWithChildren) {
  return (
    <StrictMode>
      <UrqlProvider value={client}>
        <ChakraProvider resetCSS={true}>
          <HelmetProvider>
            <Head />
            {children}
          </HelmetProvider>
        </ChakraProvider>
      </UrqlProvider>
    </StrictMode>
  );
}
