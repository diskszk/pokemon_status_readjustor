import { writeFile } from "node:fs/promises";
import path from "node:path";

import appRoot from "app-root-path";

import { getAllPokemonName } from "../src/api";

async function generatePokemonChartJson() {
  const pokemonNameChart = await getAllPokemonName();
  const root = appRoot.toString();

  try {
    await writeFile(path.resolve(root, "pokemon.json"), JSON.stringify(pokemonNameChart, null, 2));
  }
  catch {
    // eslint-disable-next-line no-console
    console.error("ファイルの書き込みに失敗しました");
    process.exit(1);
  }
}

await generatePokemonChartJson();
