import React from "react";

import { garchomp } from "../../mock/pokemons";

import type { Pokemon } from "../../types";
import type { StoryDefault, Story } from "@ladle/react";
import type { ComponentProps } from "react";

import { StatusTable } from ".";

export default {
  title: "components/StatusTable",
} satisfies StoryDefault;

type Props = ComponentProps<typeof StatusTable>;

export const Garchomp: Story<Props> = (props) => (
  <StatusTable {...props} />
);

Garchomp.args = { pokemon: garchomp, type: "current" };

export const Shedinja: Story<Props> = (props) => (
  <StatusTable {...props} />
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
} satisfies Pokemon;
Shedinja.args = { pokemon: shedinja, type: "adjusted" };
