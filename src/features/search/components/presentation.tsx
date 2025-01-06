import { SearchIcon } from "@chakra-ui/icons";
import { Flex, FormControl, VStack, InputGroup, Input, InputRightElement, Spinner, FormHelperText } from "@chakra-ui/react";
import { type FormEventHandler } from "react";

import type { PokemonNameChart } from "@/types";

import { inputCss } from "./css";

type Props = {
  formDisabled: boolean;
  suggested: PokemonNameChart[];
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChangeSearchForm: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
};

export function Presentation({
  formDisabled,
  suggested,
  handleSubmit,
  handleChangeSearchForm }: Props,
) {
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
                  name="pokemon-name"
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
                <button
                  disabled={formDisabled}
                  hidden
                  type="submit"
                >
                  submit
                </button>
              </InputGroup>
              <FormHelperText>ポケモンの名前を入力してください。</FormHelperText>
            </VStack>
            <datalist id="suggested-list">
              {suggested.map((p, key) => (
                <option
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
};
