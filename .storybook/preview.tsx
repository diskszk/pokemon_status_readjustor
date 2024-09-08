import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import type { Preview } from "@storybook/react";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ChakraProvider resetCSS={true}>
        <Story />
      </ChakraProvider>
    ),
  ],
};

export default preview;
