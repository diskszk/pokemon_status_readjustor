import { useSetAtom } from "jotai";
import { useCallback, useEffect, useMemo, useState } from "react";
import { BehaviorSubject, debounceTime } from "rxjs";

import { pokemonIndividualIdAtom, pokemonSpeciesIdAtom } from "@/atoms";
import { useErrorToast } from "@/hooks";
import type { PokemonNameChart } from "@/types";

import { Presentation } from "./presentation";
import { usePokemonIdQuery } from "../hooks";
import { getPokemons } from "../logic";
import { suggestPokemonName } from "../logic/suggestPokemonName";

import type { FormEvent } from "react";

const inputValue$ = new BehaviorSubject("");
const DEBOUNCE_TIME = 500;

export function Container() {
  const pokemons = useMemo(() => getPokemons(), []);
  const { showErrorToast } = useErrorToast();
  const [suggested, setSuggested] = useState<PokemonNameChart[]>([]);

  const [formDisabled, setFormDisabled] = useState(false);

  const { queryPokemonId } = usePokemonIdQuery();
  const setPokemonSpeciesId = useSetAtom(pokemonSpeciesIdAtom);
  const setPokemonIndividualId = useSetAtom(pokemonIndividualIdAtom);

  const handleChange = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormDisabled(true);
    inputValue$.next(event.target.value);
  }, []);

  const onSubmitSearchForm = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const name = form.get("pokemon-name");
    if (!name) {
      return;
    }

    const { id, error } = await queryPokemonId(name.toString());

    if (error) {
      showErrorToast({
        description: "データの取得に失敗しました",
      });
      return;
    }
    if (!id) {
      showErrorToast({
        description: `${name}は存在しない可能性があります`,
      });
      return;
    }
    setPokemonSpeciesId(id);
    setPokemonIndividualId(id);
  }, [queryPokemonId, setPokemonIndividualId, setPokemonSpeciesId, showErrorToast]);

  useEffect(() => {
    const subscription = inputValue$.asObservable().pipe(debounceTime(DEBOUNCE_TIME)).subscribe((inputValue) => {
      const suggestResult = suggestPokemonName(inputValue, pokemons);

      setSuggested(suggestResult);

      setFormDisabled(false);
    });

    return () => subscription.unsubscribe();
  }, [pokemons]);

  return (
    <Presentation
      formDisabled={formDisabled}
      handleChangeSearchForm={handleChange}
      handleSubmit={onSubmitSearchForm}
      suggested={suggested}
    />
  );
}
