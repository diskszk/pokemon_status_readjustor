import { Box, Center, HStack, Skeleton, Spacer } from "@chakra-ui/react";
import { Suspense } from "react";

import { CURRENT, ADJUSTED } from "@/constants";
import { Differences } from "@/features/differences/components";
import { FormImages } from "@/features/forms/components";
import { SearchForm } from "@/features/search/components";
import { Status } from "@/features/status/components";

export function Home() {
  return (
    <>
      <HStack>
        <SearchForm />
        <Suspense fallback={<p>loading...forms</p>}>
          <FormImages />
        </Suspense>
      </HStack>
      <Center width="100vw">
        <HStack spacing="32px">
          <Suspense fallback={<Skeleton />}>
            <Status
              label="現在のステータス"
              statusType={CURRENT}
            />
          </Suspense>
          <Suspense fallback={<Skeleton />}>
            <Status
              label="調整後のステータス"
              statusType={ADJUSTED}
            />
          </Suspense>
        </HStack>
      </Center>
      <Box width="100%">
        <Differences />
      </Box>
      <Spacer />
    </>
  );
}
