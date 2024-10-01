import React from "react";

import { Presentation } from "./presentation";
import { ATK, DEF, HP, SP_ATK, SP_DEF, SPD } from "../../constants";

import type { Story, StoryDefault } from "@ladle/react";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Presentation>;

export default {
  title: "components/Differences",
  args: {
    effortValueDiff: [
      { type: HP, value: 60 },
      { type: ATK, value: 72 },
      { type: DEF, value: 0 },
      { type: SP_ATK, value: -84 },
      { type: SP_DEF, value: 0 },
      { type: SPD, value: -48 },
    ],
  },
} satisfies StoryDefault;

export const Default: Story<Props> = (args) => <Presentation {...args} />;
