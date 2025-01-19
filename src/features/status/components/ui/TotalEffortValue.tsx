import { Text } from "@chakra-ui/react";

import { MAX_TOTAL_EFFORT_VALUE } from "../../constants";

export function TotalEffortValue({ totalEffortValue }: { totalEffortValue: number }) {
  return (
    <Text color={totalEffortValue > MAX_TOTAL_EFFORT_VALUE ? "red" : "normal"}>
      total:
      {totalEffortValue}
      /510
    </Text>
  );
}
