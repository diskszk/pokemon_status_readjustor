import { atom } from "jotai";

/*
  ポケモンの姿ごとのID
  ex. ライチュウ: 26, アローラライチュウ: 10100,
    テラパゴス: 1024, テラパゴス(テラスタルフォルム): 10276, テラパゴス(ステラフォルム): 10277
*/
export const pokemonIndividualIdAtom = atom(0);
