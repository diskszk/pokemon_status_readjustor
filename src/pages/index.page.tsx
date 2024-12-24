import { Box, Center, HStack, Spacer } from "@chakra-ui/react";

import { Differences } from "@/features/differences/components";
import { FormImages } from "@/features/forms/components";
import { SearchForm } from "@/features/search/components";
import { StatusTableWrapper } from "@/features/status/components";

export function Home() {
  return (
    <>
      <HStack>
        <SearchForm />
        <FormImages />
      </HStack>
      <Center width="100vw">
        <StatusTableWrapper />
      </Center>
      <Box width="100%">
        <Differences />
      </Box>
      <Spacer />
    </>
  );
}
