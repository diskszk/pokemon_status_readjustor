import { Box, Center, Heading } from "@chakra-ui/react";

export function Header() {
  return (
    <Box
      as="header"
      minWidth="100vw"
      pt="16px"
    >
      <Center>
        <Heading as="h1">ステータス再調整ツール</Heading>
      </Center>
    </Box>
  );
}
