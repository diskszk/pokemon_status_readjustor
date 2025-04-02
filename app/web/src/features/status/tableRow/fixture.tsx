import { Table, Tbody } from "@chakra-ui/react";

import { TableRow } from "./components";

export default () => (
  <Table>
    <Tbody>
      <TableRow
        baseStat={100}
        level={50}
        speciesName="attack"
        statusType="current"
      />
    </Tbody>
  </Table>
);
