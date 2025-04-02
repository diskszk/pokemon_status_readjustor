import { atom } from "jotai";

/*
  ポケモンの種類ごとのID(全国図鑑No.)
  ex. ライチュウ: 26, テラパゴス: 1024
*/
export const pokemonSpeciesIdAtom = atom(0);
