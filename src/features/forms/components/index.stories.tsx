import React from "react";

import { Presentation } from "./presentation";

import type { Story, StoryDefault } from "@ladle/react";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Presentation>;

export default {
  title: "components/FormImages",
  args: {
    pokemonForms: [],
    handleClickPokemonImage: () => void 0,
  },

} satisfies StoryDefault;

export const CharizardForms: Story<Props> = (args) => <Presentation {...args} />;
CharizardForms.args = { pokemonForms: [
  {
    name: "charizard",
    imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
  },
  {
    name: "charizard-mega-x",
    imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10034.png",
  },
  {
    name: "charizard-mega-y",
    imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10035.png",
  },
  {
    name: "charizard-gmax",
    imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10196.png",
  },
] };

export const Mew: Story<Props> = (args) => <Presentation {...args} />;
Mew.args = { pokemonForms: [{
  name: "mew",
  imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
}] };
