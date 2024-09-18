import { SearchIcon } from "@chakra-ui/icons";
import { Flex, FormControl, VStack, InputGroup, Input, InputRightElement, Spinner, VisuallyHiddenInput, FormHelperText } from "@chakra-ui/react";
import { forwardRef, type FormEventHandler, type RefObject } from "react";

import type { PokemonNameChart } from "@/types";

import { inputCss } from "./css";

type Props = {
  formDisabled: boolean;
  pokemonEnInputRef: RefObject<HTMLInputElement>;
  datalistRef: RefObject<HTMLDataListElement>;
  suggested: PokemonNameChart[];
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChangeSearchForm: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
};

export const Presentation = forwardRef<HTMLElement, Props>(function Presentation({
  formDisabled,
  pokemonEnInputRef,
  datalistRef,
  suggested,
  handleSubmit,
  handleChangeSearchForm,
}) {
  return (
    <Flex>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Flex>
            <VStack>
              <InputGroup>
                <Input
                  autoComplete="off"
                  borderColor="blue.200"
                  css={inputCss}
                  list="suggested-list"
                  name="pokemon-ja"
                  onChange={handleChangeSearchForm}
                  placeholder="(例) ガブリアス"
                  type="search"
                />
                <InputRightElement pointerEvents="none">
                  {formDisabled ? (
                    <Spinner
                      color="gray.300"
                      size="sm"
                    />
                  ) : (
                    <SearchIcon color="gray.300" />
                  )}
                </InputRightElement>
                <VisuallyHiddenInput
                  name="pokemon-en"
                  ref={pokemonEnInputRef}
                />
                <button
                  disabled={formDisabled}
                  hidden
                  type="submit"
                >
                  submit
                </button>
              </InputGroup>
              <FormHelperText>ポケモンの名前をカタカナで入力してください。</FormHelperText>
            </VStack>
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
});
