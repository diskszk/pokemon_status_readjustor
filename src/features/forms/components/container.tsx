import { Skeleton } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useCallback, useState } from "react";

import { useErrorToast } from "@/features/hooks";
import { pokemonNameAtom } from "@/features/stores";

import { Presentation } from "./presentation";
import { usePokemonFormsQuery } from "../hooks/usePokemonFormsQuery";

import type { PokemonForm } from "../types";

export function Container() {
  const [pokemonName, setPokemonName] = useAtom(pokemonNameAtom);

  const { pokemonFormsData, error, fetching } = usePokemonFormsQuery(pokemonName);

  const { showErrorToast } = useErrorToast();

  const [pokemonForms, setPokemonForms] = useState<PokemonForm[]>(pokemonFormsData);

  const handleClickPokemonImage = useCallback(async (target: PokemonForm) => {
    /* ポケモンの姿を並び替える */
    const newArray: PokemonForm[] = [];
    const rest = pokemonForms.filter((f) => f.name !== target.name);
    newArray.push(target, ...rest);
    if (!newArray[0].name) {
      showErrorToast({
        description: "データの取得に失敗しました",
      });
      return;
    }

    setPokemonForms(newArray);
    setPokemonName(newArray[0].name);
  }, [pokemonForms, setPokemonName, showErrorToast]);

  if (error) {
    showErrorToast({ description: "ポケモンの画像の取得に失敗しました" });
    return;
  }

  return (
    <Skeleton isLoaded={!fetching}>
      <Presentation
        handleClickPokemonImage={handleClickPokemonImage}
        pokemonForms={pokemonForms}
      />
    </Skeleton>
  );
}
