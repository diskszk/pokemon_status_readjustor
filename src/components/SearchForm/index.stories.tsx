import React from "react";

import { mockPokemons } from "../../mock/pokemons";

import type { StoryDefault, Story } from "@ladle/react";
import type { FormEvent, ComponentProps } from "react";

import { SearchForm } from ".";

type SearchFormProps = ComponentProps<typeof SearchForm>;

export default {
  title: "components/SearchForm",
  args: {
    pokemons: mockPokemons,
    handleSubmit: (ev: FormEvent<HTMLFormElement>,
    ) => ev.preventDefault(),
  },
} satisfies StoryDefault;

export const Default: Story<SearchFormProps> = (args) => <SearchForm {...args} />;
