import {
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export function TableHead() {
  return (
    <Thead>
      <Tr>
        <Th />
        <Th>実数値</Th>
        <Th>努力値</Th>
        <Th>個体値</Th>
        <Th>性格</Th>
      </Tr>
    </Thead>
  );
}
