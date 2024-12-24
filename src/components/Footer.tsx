import { Box, Center, HStack, Text, VStack, Link as ChakraLink } from "@chakra-ui/react";
import { Link as TanstackLink } from "@tanstack/react-router";

export function Footer() {
  return (
    <Box
      as="footer"
      bg="gray.900"
      mb="0"
      mt="12px"
      w="100%"
    >
      <Center
        mx="auto"
        my="12px"
        width="44%"
      >
        <VStack>
          <HStack gap="16px">
            <ChakraLink
              as={TanstackLink}
              color="blue.500"
              fontSize="sm"
              textDecoration="underline"
              to="/disclaimer"
            >
              免責事項
            </ChakraLink>
            <Text
              color="blue.500"
              fontSize="sm"
            >
              |
            </Text>
            <ChakraLink
              as={TanstackLink}
              color="blue.500"
              fontSize="sm"
              textDecoration="underline"
              to="/policy"
            >
              ポリシー
            </ChakraLink>
          </HStack>
          <Text
            align="center"
            color="gray.400"
          >
            <small>
              本ウェブサイトは非公式のファンメイドサービスであり、株式会社ポケモン、任天堂株式会社、株式会社クリーチャーズ、または株式会社ゲームフリークとは一切関係ありません。
            </small>
            <br />
            <small>
              ポケモンおよび関連する名称、画像、その他のコンテンツの著作権は、それぞれの権利者に帰属します。
            </small>
          </Text>
          <Text
            align="center"
            color="gray.400"
          >
            <small>
              © 2024 diskszk
            </small>
          </Text>
        </VStack>
      </Center>
    </Box>
  );
}
