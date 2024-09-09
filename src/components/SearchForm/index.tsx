import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { BehaviorSubject, debounceTime } from "rxjs";

import { suggestPokemonName } from "@/functions";
import type { PokemonNameChart } from "@/types";

import { inputCss } from "./css";

import type { FormEventHandler } from "react";

const inputValue$ = new BehaviorSubject("");
const DEBOUNCE_TIME = 500;

 type Props = {
   pokemons: PokemonNameChart[];
   handleSubmit: FormEventHandler<HTMLFormElement>;

 };

export function SearchForm({ pokemons, handleSubmit }: Props) {
  const [suggested, setSuggested] = useState<PokemonNameChart[]>([]);

  const pokemonEnInputRef = useRef<HTMLInputElement>(null);
  const datalistRef = useRef<HTMLDataListElement>(null);

  const handleChange = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    inputValue$.next(event.target.value);
  }, []);

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
    });

    return () => subscription.unsubscribe();
  }, [pokemons]);

  return (
    <Flex>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel pl="8px">ポケモンを検索</FormLabel>
          <Flex>
            <InputGroup>
              <Input
                autoComplete="off"
                css={inputCss}
                list="suggested-list"
                name="pokemon-ja"
                onChange={handleChange}
                placeholder="ポケモンの名前"
                type="search"
              />
              <InputRightElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputRightElement>
              <input
                name="pokemon-en"
                ref={pokemonEnInputRef}
                type="hidden"
              />
            </InputGroup>
            <datalist
              id="suggested-list"
              ref={datalistRef}
            >
              {suggested.map((p, key) => (
                <option
                  data-en={p.en}
                  key={key}
                  tabIndex={-1}
                  value={p.ja}
                />
              ))}
            </datalist>
          </Flex>
        </FormControl>
      </form>
    </Flex>
  );
}
