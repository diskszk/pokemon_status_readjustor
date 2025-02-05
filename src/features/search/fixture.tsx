import { Presentation } from "./components/presentation";

import type { ComponentProps } from "react";

type SearchFormProps = ComponentProps<typeof Presentation>;

const props: SearchFormProps = {
  formDisabled: false,
  suggested: [],
  handleSubmit: () => void 0,
  handleChangeSearchForm: async () => void 0,
};

export default () => <Presentation {...props} />;
