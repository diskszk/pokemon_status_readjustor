import { useSetAtom } from "jotai";
import { useCallback, useEffect, useRef, useState } from "react";
import { BehaviorSubject, debounceTime } from "rxjs";

import { pokemonIndividualIdAtom, pokemonSpeciesIdAtom } from "@/atoms";
import { useErrorToast } from "@/hooks";

import { Presentation } from "./presentation";
import { Datalist } from "../datalist";
import { useInputValue, usePokemonIdQuery } from "../hooks";

import type { FormEvent } from "react";

const inputValue$ = new BehaviorSubject("");
const DEBOUNCE_TIME = 500;

export function Container() {
  const { showErrorToast } = useErrorToast();

  const [formDisabled, setFormDisabled] = useState(false);

  const { queryPokemonId } = usePokemonIdQuery();
  const setPokemonSpeciesId = useSetAtom(pokemonSpeciesIdAtom);
  const setPokemonIndividualId = useSetAtom(pokemonIndividualIdAtom);

  const inputRef = useRef<HTMLInputElement>(null);
  const { setInputValue } = useInputValue();

  const updateFormValue = useCallback((inputValue: string) => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.value = inputValue;
    inputRef.current.focus();
    setInputValue(inputValue);
  }, [setInputValue]);

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
      setInputValue(inputValue);

      setFormDisabled(false);
    });

    return () => subscription.unsubscribe();
  }, [setInputValue]);

  return (
    <Presentation
      datalist={<Datalist updateFormValue={updateFormValue} />}
      formDisabled={formDisabled}
      handleChangeSearchForm={handleChange}
      handleSubmit={onSubmitSearchForm}
      inputRef={inputRef}
    />
  );
}
