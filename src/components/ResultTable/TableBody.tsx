import { Tr, Th, Tbody, Td } from "@chakra-ui/react";

export function TableBody() {
  return (
    <Tbody>
      <Tr>
        <Th>HP</Th>
        <Td>+ 200</Td>
        <Td>
          マックスアップ / 2
        </Td>
        <Td>{}</Td>
        <Td>{}</Td>
      </Tr>
    </Tbody>
  );
}
