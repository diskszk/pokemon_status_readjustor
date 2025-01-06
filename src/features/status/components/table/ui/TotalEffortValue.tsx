import { Text } from "@chakra-ui/react";

export function TotalEffortValue({ totalEffortValue }: { totalEffortValue: number }) {
  return (
    <Text color={totalEffortValue > 510 ? "red" : "normal"}>
      total:
      {totalEffortValue}
      /510
    </Text>
  );
}
