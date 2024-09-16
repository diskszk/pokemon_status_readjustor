import { Center, Flex, Grid, GridItem, Heading, HStack, Skeleton, Spacer } from "@chakra-ui/react";
import { useCallback, useMemo, useState, type FormEvent } from "react";

import { FormImages, ResultTable, SearchForm, StatusTable } from "@/components";
import { garchomp, mockPokemons } from "@/mock/pokemons";

import pokemonsJson from "../pokemon.json";
import { ADJUSTED, CURRENT } from "./constants";
import { useErrorToast } from "./hooks";
import { usePokemonForms } from "./queries/pokemonForms";

import type { PokemonForm } from "./types";

export function App() {
  const pokemons = useMemo(() => import.meta.env.MODE === "production" ? pokemonsJson : mockPokemons, []);

  const [pokemon] = useState(garchomp);
  const [pokemonForms, setPokemonForms] = useState<PokemonForm[]>(garchomp.forms);
  const { queryPokemonForm } = usePokemonForms();

  const [loading, setLoading] = useState(false);
  const { showErrorToast } = useErrorToast();

  const onSubmitSearchForm = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const ja = form.get("pokemon-ja");
    const en = form.get("pokemon-en");

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
    const { pokemonForms: newPokemonForms, error } = await queryPokemonForm(en?.toString());

    if (error || !newPokemonForms) {
      showErrorToast({
        description: "ポケモンの画像の取得に失敗しました。",
      });
      return;
    }

    setPokemonForms(newPokemonForms);

    setLoading(false);
  }, [queryPokemonForm, showErrorToast]);

  return (
    <Flex
      align="center"
      backgroundColor="gray.50"
      direction="column"
      gap="16px"
      minHeight="100vh"
    >
      <Center border="1px">
        <Heading>ポケモンステータス調整</Heading>
      </Center>
      <HStack>
        <SearchForm
          handleSubmit={onSubmitSearchForm}
          pokemons={pokemons}
        />
        <Skeleton isLoaded={!loading}>
          <FormImages
            pokemonForms={pokemonForms}
            setPokemonForms={setPokemonForms}
          />
        </Skeleton>
      </HStack>
      <Grid
        gap="32px"
        templateColumns="repeat(2, 1fr)"
        templateRows="auto, 1fr"
      >
        <GridItem>
          <StatusTable
            pokemon={pokemon}
            statusType={CURRENT}
          />
        </GridItem>
        <GridItem>
          <StatusTable
            pokemon={pokemon}
            statusType={ADJUSTED}
          />
        </GridItem>
        <GridItem gridColumn="span 2">
          <ResultTable />
        </GridItem>
      </Grid>
      <Spacer />
    </Flex>
  );
}
