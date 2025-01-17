import { useAtom } from "jotai";

import { controllersReducerAtom } from "@/features/status/reducers";

import { InputFieldWithButton } from "../ui";

import type { AriaLabel } from "./types";

const MAX_INDIVIDUAL_VALUE = 31 as const;
const MINIMUM_INDIVIDUAL_VALUE = 0 as const;

type Props = {
  ariaLabel: AriaLabel<"個体値">;
};

export function IndividualValueInput({ ariaLabel }: Props) {
  const [controller, dispatch] = useAtom(controllersReducerAtom);

  return (
    <InputFieldWithButton
      inputProps={{
        "aria-label": ariaLabel,
        "defaultValue": MAX_INDIVIDUAL_VALUE,
        "max": MAX_INDIVIDUAL_VALUE,
        "min": MINIMUM_INDIVIDUAL_VALUE,
        "onChange": (_, value) => {
          dispatch({ type: "UPDATE_INDIVIDUAL_VALUE_ACTION", payload: value });
        },
        "step": 1,
        "value": controller.individualValue,
      }}
      maxButtonProps={{ "aria-label": "個体値を最大", "onClick": () => {
        dispatch({ type: "UPDATE_INDIVIDUAL_VALUE_ACTION", payload: MAX_INDIVIDUAL_VALUE });
      } }}
      minimumButtonProps={{ "aria-label": "個体値を0", "onClick": () => {
        dispatch({ type: "UPDATE_INDIVIDUAL_VALUE_ACTION", payload: MINIMUM_INDIVIDUAL_VALUE });
      } }}
    />
  );
}
