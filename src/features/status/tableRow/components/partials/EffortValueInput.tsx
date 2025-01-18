import { useAtom } from "jotai";

import { adjustedEffortValueAtom, currentEffortValueAtom } from "@/atoms";
import { CURRENT } from "@/constants";
import { useEffortValue } from "@/features/status/hooks";
import type { StatusSpecies, StatusType } from "@/types";

import { controllersReducerAtom } from "../../reducers";
import { MAX_EFFORT_VALUE, MAX_TOTAL_EFFORT_VALUE } from "../styleConfig";
import { InputFieldWithButton } from "../ui";

import type { AriaLabel } from "./types";

type Props = {
  ariaLabel: AriaLabel<"努力値">;
  statusType: StatusType;
  speciesName: StatusSpecies;
};

export function EffortValueInput({
  ariaLabel,
  statusType,
  speciesName,
}: Props) {
  const [controller, dispatch] = useAtom(controllersReducerAtom);

  const effortValueAtom = statusType === CURRENT ? currentEffortValueAtom : adjustedEffortValueAtom;
  const { totalEffortValue } = useEffortValue(effortValueAtom);

  return (
    <InputFieldWithButton
      inputProps={{
        "aria-label": ariaLabel,
        "defaultValue": 0,
        "isInvalid": (totalEffortValue > MAX_TOTAL_EFFORT_VALUE),
        "max": MAX_EFFORT_VALUE,
        "min": 0,
        "onChange": (_, value) => {
          dispatch({ type: "UPDATE_EFFORT_VALUE_ACTION", payload: value });
        },
        "step": (controller.effortValue === 0 ? 4 : 8),
        "value": controller.effortValue,
      }}
      maxButtonProps={{
        "aria-label": `${statusType}テーブルの${speciesName}努力値を最大`,
        "onClick": () => {
          dispatch({ type: "UPDATE_EFFORT_VALUE_ACTION", payload: MAX_EFFORT_VALUE });
        },
      }}
      minimumButtonProps={{
        "aria-label": "努力値を0",
        "onClick": () => {
          dispatch({ type: "UPDATE_EFFORT_VALUE_ACTION", payload: 0 });
        },
      }}
    />
  );
}
