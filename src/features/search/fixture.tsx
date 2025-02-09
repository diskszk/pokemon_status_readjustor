import { useRef } from "react";

import { Presentation } from "./components/presentation";

export default () => {
  const inputRef = useRef(null);

  return (
    <Presentation
      datalist={null}
      formDisabled={false}
      handleChangeSearchForm={async () => void 0}
      handleSubmit={() => void 0}
      inputRef={inputRef}
    />
  );
};
