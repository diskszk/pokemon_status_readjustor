import { Box, Center, HStack, Skeleton, Spacer } from "@chakra-ui/react";
import { Suspense } from "react";

import { Differences } from "@/features/differences/components";
import { Forms } from "@/features/forms";
import { SearchForm } from "@/features/search/components";
import { StatusTableList } from "@/features/status/components";

export function Home() {
  return (
    <>
      <HStack paddingBottom="40px">
        <SearchForm />
        <Suspense fallback={(<Skeleton />)}>
          <Forms />
        </Suspense>
      </HStack>
      <Center width="100vw">
        <StatusTableList />
      </Center>
      <Box width="100%">
        <Differences />
      </Box>
      <Spacer />
    </>
  );
}
