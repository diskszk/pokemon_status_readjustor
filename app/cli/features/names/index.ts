import { writeFile } from "node:fs/promises";
import path from "node:path";

import appRoot from "app-root-path";

import { convert } from "./convert.js";
import { getAllPokemonName } from "./getAllPokemonName.js";

export async function generatePokemonChartJson() {
  const root = appRoot.toString();

  const allPokemonName = await getAllPokemonName();
  const pokemonNameChart = convert(allPokemonName);

  try {
    await writeFile(path.resolve(root, "pokemon.json"), JSON.stringify(pokemonNameChart, null, 2));
  }
  catch {
    console.error("ファイルの書き込みに失敗しました");
    process.exit(1);
  }
}
