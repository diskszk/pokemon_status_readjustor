import { Flex } from "@chakra-ui/react";

import { Footer } from "../Footer";
import { Header } from "../Header";

import type { PropsWithChildren } from "react";

export function Layout({ children }: PropsWithChildren) {
  return (
    <Flex
      align="center"
      backgroundColor="gray.50"
      direction="column"
      gap="16px"
      minHeight="100vh"
    >
      <Header />
      {children}
      <Footer />
    </Flex>
  );
}
