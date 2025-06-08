import { garchomp } from "@/mockData/pokemons";
import type { PokemonStatus } from "@/types";

import { Presentation as Status } from "./components/presentation";

import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Status>;

const props: Omit<Props, "baseStats"> = {
  label: "現在のステータス",
  level: 50,
  setLevel: () => void 0,
  statusType: "current",
  totalEffortValue: 0,
};

const shedinja: {
  baseStats: PokemonStatus[];
} = {
  baseStats: [
    { value: 1, name: "hp" },
    { value: 90, name: "attack" },
    { value: 45, name: "defense" },
    { value: 30, name: "special-attack" },
    { value: 30, name: "special-defense" },
    { value: 40, name: "speed" },
  ],
};

export default {
  garchomp: () => (
    <Status
      {...props}
      baseStats={garchomp.baseStats}
    />
  ),
  shedinja: () => (
    <Status
      {...props}
      baseStats={shedinja.baseStats}
    />
  ),
};
