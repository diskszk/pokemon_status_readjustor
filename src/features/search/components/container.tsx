import { useAtomValue, useSetAtom } from "jotai";
import { useCallback, useMemo, useRef, useState } from "react";

import { formDisabledAtom } from "@/features/search/stores";
import { useErrorToast } from "@/hooks";
import { usePokemonBaseStats } from "@/infrastructures/queries/pokemonBaseStats/usePokemonBaseStats";
import { useDebouncedInput } from "@/search/hooks";
import { pokemonNameAtom, pokemonBaseStatsAtom, loadingAtom } from "@/stores";

import { Presentation } from "./presentation";
import { getPokemons } from "../logic";
import { suggestPokemonName } from "../logic/suggestPokemonName";

import type { PokemonNameChart } from "../types";
import type { FormEvent } from "react";

export function Container() {
  const pokemons = useMemo(() => getPokemons(), []);
  const { queryBaseStats } = usePokemonBaseStats();

  const [suggested, setSuggested] = useState<PokemonNameChart[]>([]);

  const pokemonEnInputRef = useRef<HTMLInputElement>(null);
  const datalistRef = useRef<HTMLDataListElement>(null);

  const { showErrorToast } = useErrorToast();
  const formDisabled = useAtomValue(formDisabledAtom);
  const setLoading = useSetAtom(loadingAtom);

  const setPokemonName = useSetAtom(pokemonNameAtom);
  const setPokemonBaseStats = useSetAtom(pokemonBaseStatsAtom);

  const onSubmitSearchForm = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const ja = form.get("pokemon-ja");
    const en = form.get("pokemon-en")?.toString();

    if (!ja) {
      return;
    }

    if (!en) {
      showErrorToast({
        description: `${ja}は存在しない可能性があります。`,
      });
      return;
    }
    setLoading(true);
    setPokemonName(en);

    const { stats, error: queryBaseStatsError } = await queryBaseStats(en);

    if (queryBaseStatsError || !stats) {
      showErrorToast({
        description: "データの取得に失敗しました",
      });
      return;
    }

    setPokemonBaseStats(stats);
    setLoading(false);
  }, [queryBaseStats, setLoading, setPokemonBaseStats, setPokemonName, showErrorToast]);

  const { handleChange } = useDebouncedInput((inputValue) => {
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
  });

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
