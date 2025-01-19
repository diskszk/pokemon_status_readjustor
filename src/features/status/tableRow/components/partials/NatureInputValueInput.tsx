import { useAtomValue } from "jotai";

import type { NatureValue } from "@/types";

import { useUserInputValues } from "../../hooks";
import { controllersReducerAtom } from "../../reducers";
import { InputField } from "../ui";

import type { AriaLabel } from "./types";

type Props = {
  ariaLabel: AriaLabel<"性格補正">;
};

const isNature = (value: number): value is NatureValue => {
  return value === 0.9 || value === 1 || value === 1.1;
};

export function NatureValueValueInput({ ariaLabel }: Props) {
  const controller = useAtomValue(controllersReducerAtom);
  const { updateNatureValueInput } = useUserInputValues();

  return (
    <InputField
      aria-label={ariaLabel}
      defaultValue={1}
      height="16px"
      max={1.1}
      min={0.9}
      onChange={(_, value) => {
        if (!isNature(value)) {
          throw new Error("不正な値が入力されました");
        }
        updateNatureValueInput({ value });
      }}
      size="sm"
      step={0.1}
      value={controller.natureValue}
      variant="flushed"
      width="64px"
    />
  );
}
