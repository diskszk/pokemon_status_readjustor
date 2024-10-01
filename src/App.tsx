import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { cacheExchange, Client, fetchExchange, Provider } from "urql";

import { API_ENDPOINT } from "@/features/constants/index.ts";

import { Head } from "./meta/head";
import { Home } from "./pages/index.page.tsx";

const client = new Client({
  url: API_ENDPOINT,
  exchanges: [cacheExchange, fetchExchange],
});

export function App() {
  return (
    <StrictMode>
      <Provider value={client}>
        <ChakraProvider resetCSS={true}>
          <HelmetProvider>
            <Head />
            <Home />
            {/* <Test /> */}
          </HelmetProvider>
        </ChakraProvider>
      </Provider>
    </StrictMode>
  );
}
