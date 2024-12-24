import { Box, Flex, Heading } from "@chakra-ui/react";

import type { PropsWithChildren } from "react";

export function PolicyAndDisclaimerLayout({ pageTitle, children }: PropsWithChildren<{ pageTitle: string }>) {
  return (
    <Flex
      direction="column"
      width="50%"
    >
      <Heading
        as="h2"
        mb="32px"
        mt="16px"
        size="lg"
        textAlign="center"
      >
        {pageTitle}
      </Heading>
      {children}
    </Flex>
  );
}

export function ContentWrapper({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <Box width="100%">
      <Heading
        as="h3"
        mb="8px"
        mt="16px"
        size="md"
      >
        {title}
      </Heading>
      {children}
    </Box>
  );
}
