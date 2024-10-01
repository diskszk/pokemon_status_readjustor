import React, { useRef } from "react";

import { Presentation } from "./presentation";

import type { StoryDefault, Story } from "@ladle/react";
import type { ComponentProps } from "react";

type SearchFormProps = ComponentProps<typeof Presentation>;

export default {
  title: "components/SearchForm",
  args: {
    formDisabled: false,
    suggested: [],
    handleSubmit: () => void 0,
    handleChangeSearchForm: () => void 0,
  },
} satisfies StoryDefault;

export const Default: Story<SearchFormProps> = (args) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const datalistRef = useRef<HTMLDataListElement>(null);
  return (

    <Presentation
      {...args}
      datalistRef={datalistRef}
      pokemonEnInputRef={inputRef}
    />
  );
};
