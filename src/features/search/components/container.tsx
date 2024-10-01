import { useSetAtom } from "jotai";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BehaviorSubject, debounceTime } from "rxjs";

import { usePokemonFormsQuery } from "@/features/forms/hooks";
import { useErrorToast } from "@/features/hooks";
import { loadingAtom, pokemonFormsAtom, pokemonNameAtom } from "@/features/stores";
import type { PokemonNameChart } from "@/types";

import { Presentation } from "./presentation";
import { getPokemons } from "../logic";
import { suggestPokemonName } from "../logic/suggestPokemonName";

import type { FormEvent } from "react";

const inputValue$ = new BehaviorSubject("");
const DEBOUNCE_TIME = 500;

export function Container() {
  const pokemons = useMemo(() => getPokemons(), []);

  const [suggested, setSuggested] = useState<PokemonNameChart[]>([]);

  const pokemonEnInputRef = useRef<HTMLInputElement>(null);
  const datalistRef = useRef<HTMLDataListElement>(null);

  const { showErrorToast } = useErrorToast();
  const setLoading = useSetAtom(loadingAtom);

  const setPokemonName = useSetAtom(pokemonNameAtom);

  const [formDisabled, setFormDisabled] = useState(false);

  const handleChange = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormDisabled(true);
    inputValue$.next(event.target.value);
  }, []);

  const { queryPokemonForm } = usePokemonFormsQuery();

  const setPokemonForm = useSetAtom(pokemonFormsAtom);
  const onSubmitSearchForm = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const ja = form.get("pokemon-ja");
    let en = form.get("pokemon-en")?.toString();

    if (!ja) {
      return;
    }

    if (!en) {
      en = pokemons.find((pokemon) => pokemon.ja === ja)?.en;

      showErrorToast({
        description: `${ja}は存在しない可能性があります。`,
      });
      return;
    }
    setLoading(true);
    setPokemonName(en);

    const { pokemonForms, error } = await queryPokemonForm(en);

    if (error || !pokemonForms) {
      showErrorToast({
        description: "データの取得に失敗しました",
      });
      return;
    }

    setPokemonForm(pokemonForms);
    setLoading(false);
  }, [pokemons, queryPokemonForm, setLoading, setPokemonForm, setPokemonName, showErrorToast]);

  useEffect(() => {
    const subscription = inputValue$.asObservable().pipe(debounceTime(DEBOUNCE_TIME)).subscribe((inputValue) => {
      const suggestResult = suggestPokemonName(inputValue, pokemons);

      setSuggested(suggestResult);

      if (!datalistRef.current) {
        return;
      }

      // 入力値と一致するポケモンの英語名をinputに設定する
      const options = datalistRef.current.querySelectorAll("option");
      const option = Array.from(options).find((option) => option.value === inputValue);

      const enName = option ? option.getAttribute("data-en") : null;

      if (pokemonEnInputRef.current) {
        pokemonEnInputRef.current.value = enName || "";
      }
      setFormDisabled(false);
    });

    return () => subscription.unsubscribe();
  }, [pokemons]);

  return (
    <Presentation
      datalistRef={datalistRef}
      formDisabled={formDisabled}
      handleChangeSearchForm={handleChange}
      handleSubmit={onSubmitSearchForm}
      pokemonEnInputRef={pokemonEnInputRef}
      suggested={suggested}
    />
  );
}
