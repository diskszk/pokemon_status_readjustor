import { Table, Tbody } from "@chakra-ui/react";
import { Provider } from "jotai";
import React from "react";

import { garchomp } from "../../../../mockData/pokemons";

import type { Story, StoryDefault } from "@ladle/react";
import type { ComponentProps } from "react";

import { TableRow } from ".";

type Props = ComponentProps<typeof TableRow>;

export default {
  title: "components/TableRow",
} satisfies StoryDefault;

export const MweAtk: Story<Props> = () => (
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

export const Garchomp: Story<Props> = () => {
  return (
    <Table>
      <Tbody>
        {garchomp.baseStats.map((b, key) => (
          <Provider key={key}>
            <TableRow
              baseStat={b.value}
              level={50}
              speciesName={b.name}
              statusType="current"
            />
          </Provider>
        ))}
      </Tbody>
    </Table>
  );
};
