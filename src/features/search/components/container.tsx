import { useSetAtom } from "jotai";
import { useCallback, useEffect, useMemo, useState } from "react";
import { BehaviorSubject, debounceTime } from "rxjs";

import { usePokemonFormsQuery } from "@/features/forms/hooks";
import { useErrorToast } from "@/features/hooks";
import { loadingAtom, pokemonFormsAtom, pokemonNameAtom } from "@/features/stores";
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

  const [suggested, setSuggested] = useState<PokemonNameChart[]>([]);

  const { showErrorToast } = useErrorToast();
  const setLoading = useSetAtom(loadingAtom);

  const setPokemonName = useSetAtom(pokemonNameAtom);

  const [formDisabled, setFormDisabled] = useState(false);

  const handleChange = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormDisabled(true);
    inputValue$.next(event.target.value);
  }, []);

  const { queryPokemonForm } = usePokemonFormsQuery();
  const { queryPokemonId } = usePokemonIdQuery();

  const setPokemonForm = useSetAtom(pokemonFormsAtom);
  const onSubmitSearchForm = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const name = form.get("pokemon-name");
    if (!name) {
      return;
    }

    setLoading(true);
    setPokemonName(name.toString());

    // idを取得する
    const { id, error } = await queryPokemonId(name.toString());
    if (!id) {
      showErrorToast({
        description: `${name}は存在しない可能性があります`,
      });
      return;
    }

    // TODO: しかるべきところに移す
    const { pokemonForms, error: queryFormsError } = await queryPokemonForm(id);

    if (error || !pokemonForms || queryFormsError) {
      showErrorToast({
        description: "データの取得に失敗しました",
      });
      return;
    }

    setPokemonForm(pokemonForms);
    setLoading(false);
  }, [queryPokemonForm, queryPokemonId, setLoading, setPokemonForm, setPokemonName, showErrorToast]);

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
