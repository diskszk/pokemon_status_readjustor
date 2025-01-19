import { useAtomValue } from "jotai";

import { MAX_INDIVIDUAL_VALUE, MINIMUM_INDIVIDUAL_VALUE } from "@/features/status/constants";

import { useUserInputValues } from "../../hooks";
import { controllersReducerAtom } from "../../reducers";
import { InputFieldWithButton } from "../ui";

import type { AriaLabel } from "./types";

type Props = {
  ariaLabel: AriaLabel<"個体値">;
};

export function IndividualValueInput({ ariaLabel }: Props) {
  const controller = useAtomValue(controllersReducerAtom);
  const { updateIndividualValueInput } = useUserInputValues();

  return (
    <InputFieldWithButton
      inputProps={{
        "aria-label": ariaLabel,
        "defaultValue": MAX_INDIVIDUAL_VALUE,
        "max": MAX_INDIVIDUAL_VALUE,
        "min": MINIMUM_INDIVIDUAL_VALUE,
        "onChange": (_, value) => {
          updateIndividualValueInput({ value });
        },
        "step": 1,
        "value": controller.individualValue,
      }}
      maxButtonProps={{ "aria-label": `${ariaLabel}を最大`, "onClick": () => {
        updateIndividualValueInput({ value: MAX_INDIVIDUAL_VALUE });
      } }}
      minimumButtonProps={{ "aria-label": `${ariaLabel}を0`, "onClick": () => {
        updateIndividualValueInput({ value: 0 });
      } }}
    />
  );
}
