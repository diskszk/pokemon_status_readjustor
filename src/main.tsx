import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { cacheExchange, Client, fetchExchange, Provider } from "urql";

import { API_ENDPOINT } from "@/constants";

import "./index.css";
import { Head } from "./components/index.ts";
import { Home } from "./pages/index.page.tsx";

const client = new Client({
  url: API_ENDPOINT,
  exchanges: [cacheExchange, fetchExchange],
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider value={client}>
      <ChakraProvider resetCSS={true}>
        <Head />
        <Home />
      </ChakraProvider>
    </Provider>
  </StrictMode>,
);
