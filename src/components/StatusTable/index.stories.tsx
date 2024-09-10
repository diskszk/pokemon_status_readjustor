import { Flex } from "@chakra-ui/react";
import React from "react";

import type { StoryDefault, Story } from "@ladle/react";

import { StatusTable } from ".";

export default {
  title: "components/CurrentStatus",
} satisfies StoryDefault;

export const Default: Story = () => (
  <Flex
    align="center"
    direction="column"
    gap="24px"
  >
    <StatusTable />
  </Flex>

);
