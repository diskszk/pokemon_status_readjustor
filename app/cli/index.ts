#!/usr/bin/env node

import { generatePokemonChartJson } from "./features/names";

(async () => {
  await generatePokemonChartJson();
})();
