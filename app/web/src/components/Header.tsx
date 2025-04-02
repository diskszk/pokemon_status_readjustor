import { Box, Center, Heading, Link as ChakraLink } from "@chakra-ui/react";
import { Link as TanstackLink } from "@tanstack/react-router";

export function Header() {
  return (
    <Box
      as="header"
      minWidth="100vw"
      pt="16px"
    >
      <Center>
        <ChakraLink
          as={TanstackLink}
          to="/"
        >
          <Heading as="h1">ステータス再調整ツール</Heading>
        </ChakraLink>
      </Center>
    </Box>
  );
}
