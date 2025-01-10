import React from "react";

import { Presentation as Status } from "./presentation";
import { garchomp } from "../../../mockData/pokemons";

import type { StoryDefault, Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
  title: "components/Status",
  args: {
    label: "現在のステータス",
    level: 50,
    setLevel: () => void 0,
    statusType: "current",
    TotalEffortValue: 0,
  },
} satisfies StoryDefault;

type Props = ComponentProps<typeof Status>;

export const Garchomp: Story<Props> = (props) => (
  <Status {...props} />
);

Garchomp.args = { baseStats: garchomp.baseStats };

export const Shedinja: Story<Props> = (props) => (
  <Status {...props} />
);
const shedinja = {
  name: "shedinja",
  baseStats: [
    { value: 1, name: "hp" },
    { value: 90, name: "attack" },
    { value: 45, name: "defense" },
    { value: 30, name: "special-attack" },
    { value: 30, name: "special-defense" },
    { value: 40, name: "speed" },
  ],
  forms: [],
};
Shedinja.args = { baseStats: shedinja.baseStats, statusType: "adjusted" };
