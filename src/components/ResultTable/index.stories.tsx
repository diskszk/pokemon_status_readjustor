import React from "react";

import type { Story, StoryDefault } from "@ladle/react";
import type { ComponentProps } from "react";

import { ResultTable } from ".";

type Props = ComponentProps<typeof ResultTable>;

export default {
  title: "components/ResultTable",
  args: {},
} satisfies StoryDefault;

export const Default: Story<Props> = () => <ResultTable />;
