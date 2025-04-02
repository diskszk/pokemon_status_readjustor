import { useRef } from "react";

import { Presentation } from "./components/presentation";

import type { FormEvent } from "react";

export default () => {
  const inputRef = useRef(null);

  return (
    <Presentation
      datalist={null}
      formDisabled={false}
      handleChangeSearchForm={async () => void 0}
      handleSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        return;
      }}
      inputRef={inputRef}
    />
  );
};
