import { useAtomValue } from "jotai";

import { useEffortValue } from "@/features/status/hooks";
import type { StatusType } from "@/types";

import { useUserInputValues } from "../../hooks";
import { controllersReducerAtom } from "../../reducers";
import { MAX_EFFORT_VALUE, MAX_TOTAL_EFFORT_VALUE } from "../styleConfig";
import { InputFieldWithButton } from "../ui";

import type { AriaLabel } from "./types";

type Props = {
  ariaLabel: AriaLabel<"努力値">;
  statusType: StatusType;
};

export function EffortValueInput({
  ariaLabel,
  statusType,
}: Props) {
  const controller = useAtomValue(controllersReducerAtom);

  const { updateEffortValueInput } = useUserInputValues();

  const { getTotalEffortValue } = useEffortValue();

  const totalEffortValue = getTotalEffortValue({ type: statusType });

  return (
    <InputFieldWithButton
      inputProps={{
        "aria-label": ariaLabel,
        "defaultValue": 0,
        "isInvalid": (totalEffortValue > MAX_TOTAL_EFFORT_VALUE),
        "max": MAX_EFFORT_VALUE,
        "min": 0,
        "onChange": (_, value) => {
          updateEffortValueInput({ type: statusType, value });
        },
        "step": (controller.effortValue === 0 ? 4 : 8),
        "value": controller.effortValue,
      }}
      maxButtonProps={{
        "aria-label": `${ariaLabel}を最大`,
        "onClick": () => {
          updateEffortValueInput({ type: statusType, value: MAX_EFFORT_VALUE });
        },
      }}
      minimumButtonProps={{
        "aria-label": `${ariaLabel}を0`,
        "onClick": () => {
          updateEffortValueInput({ type: statusType, value: 0 });
        },
      }}
    />
  );
}
