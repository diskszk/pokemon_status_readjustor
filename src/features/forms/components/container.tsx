import { useAtomValue, useSetAtom } from "jotai";
import { useCallback } from "react";

import { pokemonIndividualIdAtom, pokemonSpeciesIdAtom } from "@/atoms";
import { useErrorToast } from "@/hooks";

import { Presentation } from "./presentation";
import { usePokemonFormsQuery } from "../hooks";
import { mergeDuplicates } from "../logic";

import type { ChangeEventHandler } from "react";

export function Container() {
  const { showErrorToast } = useErrorToast();

  const pokemonSpeciesId = useAtomValue(pokemonSpeciesIdAtom);

  const { pokemonForms, error } = usePokemonFormsQuery({ id: pokemonSpeciesId });

  if (error) {
    showErrorToast({
      description: "ポケモンのすがたの取得に失敗しました",
    });
  }

  const setPokemonIndividualId = useSetAtom(pokemonIndividualIdAtom);

  const handleChangePokemonForm: ChangeEventHandler<HTMLSelectElement> = useCallback((ev) => {
    setPokemonIndividualId(Number(ev.target.value));
  }, [setPokemonIndividualId]);

  if (!pokemonForms || pokemonForms.length < 2) {
    return;
  }

  const mergedPokemonForms = mergeDuplicates(pokemonForms);

  return (
    <Presentation
      handleChangePokemonForm={handleChangePokemonForm}
      pokemonForms={mergedPokemonForms}
      speciesId={pokemonSpeciesId}
    />
  );
}
