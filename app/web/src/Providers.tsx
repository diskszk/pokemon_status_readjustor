import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { cacheExchange, Client, fetchExchange, Provider as UrqlProvider } from "urql";

import { API_ENDPOINT } from "@/constants";

import { EffortValueProvider } from "./contexts";
import { Head } from "./meta/head";

import type { PropsWithChildren } from "react";

const client = new Client({
  url: API_ENDPOINT,
  exchanges: [cacheExchange, fetchExchange],
  requestPolicy: "cache-first",
  suspense: true,
});

export function Providers({ children }: PropsWithChildren) {
  return (
    <StrictMode>
      <UrqlProvider value={client}>
        <ChakraProvider resetCSS={true}>
          <HelmetProvider>
            <Head />
            <EffortValueProvider>
              {children}
            </EffortValueProvider>
          </HelmetProvider>
        </ChakraProvider>
      </UrqlProvider>
    </StrictMode>
  );
}
