import { garchomp } from "@/mockData/pokemons";

import { StatusTable } from "./components";

export default () => (
  <StatusTable
    baseStats={garchomp.baseStats}
    level={50}
    statusType="current"
  />
);
