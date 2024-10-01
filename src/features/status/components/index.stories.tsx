import React from "react";

import { StatusTable } from "./StatusTable";
import { garchomp } from "../../mock/pokemons";

import type { StoryDefault, Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
  title: "components/StatusTable",
} satisfies StoryDefault;

type Props = ComponentProps<typeof StatusTable>;

export const Garchomp: Story<Props> = (props) => (
  <StatusTable {...props} />
);

Garchomp.args = { pokemonBaseStats: garchomp.baseStats, pokemonName: garchomp.name, statusType: "current", header: "ステータス" };

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
  forms: [],
};
Shedinja.args = { pokemonBaseStats: shedinja.baseStats, pokemonName: shedinja.name, statusType: "adjusted", header: "ステータス" };
