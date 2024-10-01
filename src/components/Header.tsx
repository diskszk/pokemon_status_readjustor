import { Box, Center, Heading } from "@chakra-ui/react";

export function Header() {
  return (
    <Box
      minWidth="100vw"
      pt="16px"
    >
      <Center>
        <Heading>ステータス再調整ツール</Heading>
      </Center>
    </Box>
  );
}
