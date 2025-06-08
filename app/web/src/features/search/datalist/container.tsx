import { useMemo } from "react";

import { useInputValue } from "../hooks";
import { getPokemons } from "../logic";
import { Presentation } from "./presentation";
import { suggestPokemonName } from "../logic/suggestPokemonName";

/*
  A. サジェスト機能
    1. formの入力値を受け取る
    2. ポケモン名リストから入力値でフィルターする(途中での一致も含む)
    3. リスト表示する
    4. 表示しているポケモン名をクリックすると入力欄に反映する
  B. 見た目
    - フォーカスが当たると色が変わる
  C. キー入力でフォーカス移動
    - ↓/tab
    - ↑/shift+tab
*/

export function Container({ updateFormValue }: {
  updateFormValue: (inputValue: string) => void;
},
) {
  const pokemons = useMemo(() => getPokemons(), []);

  const { inputValue } = useInputValue();

  const suggestedPokemonList = suggestPokemonName(inputValue, pokemons).map((value) => value.ja);

  return (
    <Presentation
      suggestedPokemonList={suggestedPokemonList}
      updateFormValue={updateFormValue}
    />
  );
}
