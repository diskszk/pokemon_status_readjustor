import { Box, Center, HStack, Spacer } from "@chakra-ui/react";
import { Suspense } from "react";

import { Layout } from "@/components/layout";
import { Differences } from "@/features/differences/components";
import { FormImages } from "@/features/forms/components";
import { SearchForm } from "@/features/search/components";
import { StatusTableWrapper } from "@/features/status/components";

export function Home() {
  return (
    <Layout>
      <HStack>
        <SearchForm />
        <Suspense fallback={<p>loading...forms</p>}>
          <FormImages />
        </Suspense>
      </HStack>
      <Center width="100vw">
        <StatusTableWrapper />
      </Center>
      <Box width="100%">
        <Differences />
      </Box>
      <Spacer />
    </Layout>
  );
}
