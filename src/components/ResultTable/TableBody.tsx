import { Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { css } from "@emotion/react";

export function TableBody() {
  return (
    <Tbody>
      <Tr css={css(`
       th, td {
          padding-top: 8px;
          padding-bottom: 8px;
        }
      `)}
      >
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
