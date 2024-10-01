import { Skeleton } from "@chakra-ui/react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useCallback } from "react";

import { useErrorToast } from "@/features/hooks";
import { loadingAtom, pokemonFormsAtom, pokemonNameAtom } from "@/features/stores";
import type { PokemonForm } from "@/types";

import { Presentation } from "./presentation";

export function Container() {
  const setPokemonName = useSetAtom(pokemonNameAtom);
  const [pokemonForms, setPokemonForms] = useAtom(pokemonFormsAtom);

  const loading = useAtomValue(loadingAtom);
  const { showErrorToast } = useErrorToast();

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
  }, [pokemonForms, setPokemonForms, setPokemonName, showErrorToast]);

  return (
    <Skeleton isLoaded={!loading}>
      <Presentation
        handleClickPokemonImage={handleClickPokemonImage}
        pokemonForms={pokemonForms}
      />
    </Skeleton>
  );
}
