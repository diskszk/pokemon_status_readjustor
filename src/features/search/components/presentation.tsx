import { SearchIcon } from "@chakra-ui/icons";
import { Flex, FormControl, VStack, InputGroup, Input, InputRightElement, Spinner, FormHelperText } from "@chakra-ui/react";
import { type FormEventHandler, type RefObject, type ReactNode } from "react";

import { inputCss } from "./css";

type Props = {
  formDisabled: boolean;
  inputRef: RefObject<HTMLInputElement | null>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChangeSearchForm: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  datalist: ReactNode;
};

export function Presentation({
  formDisabled,
  inputRef,
  datalist,
  handleSubmit,
  handleChangeSearchForm }: Props,
) {
  return (
    <Flex
      direction="column"
      height="40px"
      position="relative"
    >
      <form
        onSubmit={handleSubmit}
      >
        <FormControl>
          <Flex>
            <VStack>
              <InputGroup>
                <Input
                  aria-label="pokemon-search"
                  autoComplete="off"
                  borderColor="blue.200"
                  css={inputCss}
                  list="suggested-list"
                  name="pokemon-name"
                  onChange={handleChangeSearchForm}
                  placeholder="(例) ガブリアス"
                  ref={inputRef}
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
          </Flex>
        </FormControl>
      </form>
      {datalist}
    </Flex>
  );
};
