import { writeFile } from "node:fs/promises";
import path from "node:path";

import { convert } from "./convert";
import { getAllPokemonName } from "./getAllPokemonName";

export async function generatePokemonChartJson() {
  const currentDir = process.cwd();

  const allPokemonName = await getAllPokemonName();
  const pokemonNameChart = convert(allPokemonName);

  try {
    await writeFile(path.resolve(currentDir, "pokemon.json"), JSON.stringify(pokemonNameChart, null, 2));
  }
  catch {
    console.error("ファイルの書き込みに失敗しました");
    process.exit(1);
  }
}
