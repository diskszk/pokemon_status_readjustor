import { Center, Flex, Grid, GridItem, Heading, HStack, Spacer } from "@chakra-ui/react";
import { useCallback, useMemo, useState, type FormEvent } from "react";

import { FormImages, ResultTable, SearchForm, StatusTable } from "@/components";
import { garchomp, mockPokemons } from "@/mock/pokemons";

import pokemonsJson from "../pokemon.json";
import { usePokemonForms } from "./queries/pokemonForms";

import type { PokemonForm } from "./types";

export function App() {
  const pokemons = useMemo(() => import.meta.env.MODE === "production" ? pokemonsJson : mockPokemons, []);

  const [pokemon] = useState(garchomp);
  const [pokemonForms, setPokemonForms] = useState<PokemonForm[]>(garchomp.forms);
  const { queryPokemonForm } = usePokemonForms();

  const onSubmitSearchForm = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const ja = form.get("pokemon-ja");
    const en = form.get("pokemon-en");

    console.log("data", { ja, en });

    if (!en) {
      alert("404");
      return;
    }

    const { pokemonForms: newPokemonForms } = await queryPokemonForm(en?.toString());

    setPokemonForms(newPokemonForms || []);
  }, [queryPokemonForm]);

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
        <FormImages
          pokemonForms={pokemonForms}
          setPokemonForms={setPokemonForms}
        />
      </HStack>
      <Grid
        gap="32px"
        templateColumns="repeat(2, 1fr)"
        templateRows="auto, 1fr"
      >
        <GridItem>
          <StatusTable
            pokemon={pokemon}
            type="current"
          />
        </GridItem>
        <GridItem>
          <StatusTable
            pokemon={pokemon}
            type="adjusted"
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
