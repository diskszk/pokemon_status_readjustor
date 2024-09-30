import { useAtomValue } from "jotai";

import { currentEffortValueAtom, adjustedEffortValueAtom } from "@/features/stores/effortValueAtom";

import { Presentation } from "./presentation";
import { getEffortValueDiff } from "../logic/getEffortValueDiff";

export function Container() {
  const currentEffortValues = useAtomValue(currentEffortValueAtom);

  const adjustedEffortValues = useAtomValue(adjustedEffortValueAtom);

  const effortValueDiff = getEffortValueDiff(currentEffortValues, adjustedEffortValues);

  return (
    <Presentation effortValueDiff={effortValueDiff} />
  );
}
