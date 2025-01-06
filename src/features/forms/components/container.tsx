import { useAtomValue, useSetAtom } from "jotai";
import { useCallback, useMemo, useState } from "react";

import { pokemonIndividualIdAtom, pokemonSpeciesIdAtom } from "@/atoms";
import { useErrorToast } from "@/hooks";
import { garchomp } from "@/mockData/pokemons";
import type { PokemonForm } from "@/types";

import { Presentation } from "./presentation";
import { usePokemonFormsQuery } from "../hooks";

export function Container() {
  const { showErrorToast } = useErrorToast();

  const pokemonSpeciesId = useAtomValue(pokemonSpeciesIdAtom);

  const { pokemonForms, error } = usePokemonFormsQuery(pokemonSpeciesId);

  if (error) {
    showErrorToast({
      description: "ポケモンの画像の取得に失敗しました",
    });
  }

  const setPokemonIndividualId = useSetAtom(pokemonIndividualIdAtom);

  const [selectedFormId, setSelectedFormId] = useState<number | undefined>(undefined);

  const pokemonFormsView = useMemo(() => {
    if (!pokemonForms) {
      // デフォルト値を代入する
      return [...garchomp.forms];
    }

    if (selectedFormId === undefined) {
      return pokemonForms;
    }

    const selectedForm = pokemonForms.find((form) => form.id === selectedFormId);

    if (!selectedForm) {
      return pokemonForms;
    }

    const rest = pokemonForms.filter((form) => form.id !== selectedFormId);
    const orderedForms = [selectedForm].concat(rest);
    setPokemonIndividualId(selectedFormId);

    return orderedForms;
  }, [pokemonForms, setPokemonIndividualId, selectedFormId]) satisfies PokemonForm[];

  const handleClickPokemonImage = useCallback((selectedFormId: number) => {
    setSelectedFormId(selectedFormId);
  }, []);

  return (
    <Presentation
      handleClickPokemonImage={handleClickPokemonImage}
      pokemonForms={pokemonFormsView}
    />

  );
}
