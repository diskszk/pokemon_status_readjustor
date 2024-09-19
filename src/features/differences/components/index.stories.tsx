import React from "react";

import { ATK, DEF, HP, SP_ATK, SP_DEF, SPD } from "../../../_constants";

import type { Story, StoryDefault } from "@ladle/react";
import type { ComponentProps } from "react";

import { ResultTable } from ".";

type Props = ComponentProps<typeof ResultTable>;

export default {
  title: "components/ResultTable",
  args: {
    currentEffortValues: [
      { type: HP, value: 252 },
      { type: ATK, value: 252 },
      { type: DEF, value: 0 },
      { type: SP_ATK, value: 0 },
      { type: SP_DEF, value: 0 },
      { type: SPD, value: 4 },
    ],
    adjustedEffortValues: [
      { type: HP, value: 192 },
      { type: ATK, value: 180 },
      { type: DEF, value: 0 },
      { type: SP_ATK, value: 84 },
      { type: SP_DEF, value: 0 },
      { type: SPD, value: 52 },
    ],
  },
} satisfies StoryDefault;

export const Default: Story<Props> = (args) => <ResultTable {...args} />;
