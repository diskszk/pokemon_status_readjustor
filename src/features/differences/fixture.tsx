import { ATK, DEF, HP, SP_ATK, SP_DEF, SPD } from "@/constants/term";

import { Presentation } from "./components/presentation";

import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Presentation>;

const args: Props = {
  effortValueDiff: [
    { name: HP, value: 60 },
    { name: ATK, value: 72 },
    { name: DEF, value: 0 },
    { name: SP_ATK, value: -84 },
    { name: SP_DEF, value: 0 },
    { name: SPD, value: -48 },
  ],
};

export default () => <Presentation {...args} />;
