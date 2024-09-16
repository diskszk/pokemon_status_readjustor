import { Center, Flex, Grid, GridItem, Heading, HStack, Skeleton, Spacer } from "@chakra-ui/react";
import { useCallback, useMemo, useState, type FormEvent } from "react";

import { FormImages, ResultTable, SearchForm, StatusTable } from "@/components";
import { ADJUSTED, CURRENT } from "@/constants";
import { garchomp, mockPokemons } from "@/mock/pokemons";
import { usePokemonForms } from "@/queries/pokemonForms";

import { useEffortValue, useErrorToast } from "./hooks";
import { type PokemonForm, type BaseStat } from "./types";
import pokemonsJson from "../pokemon.json";
import { adjustedEffortValueAtom, currentEffortValueAtom } from "./atoms";
import { usePokemonBaseStats } from "./queries/pokemonBaseStats";

export function App() {
  const pokemons = useMemo(() => import.meta.env.MODE === "production" ? pokemonsJson : mockPokemons, []);

  const [pokemonForms, setPokemonForms] = useState<PokemonForm[]>(garchomp.forms);
  const { queryPokemonForm } = usePokemonForms();

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonBaseStats, setPokemonBaseStats] = useState<BaseStat[]>(garchomp.baseStats);

  const { queryBaseStats } = usePokemonBaseStats();

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
    setPokemonName(newPokemonForms[0].name);

    const { stats, error: queryBaseStatsError } = await queryBaseStats(newPokemonForms[0].name);

    if (queryBaseStatsError || !stats) {
      showErrorToast({
        description: "データの取得に失敗しました",
      });
      return;
    }

    setPokemonBaseStats(stats);
    setLoading(false);
  }, [queryBaseStats, queryPokemonForm, showErrorToast]);

  const handleClickPokemonImage = useCallback(async (target: PokemonForm) => {
    /* ポケモンの姿を並び替える */
    const newArray: PokemonForm[] = [];
    const rest = pokemonForms.filter((f) => f.name !== target.name);
    newArray.push(target, ...rest);
    if (!newArray[0].name) {
      showErrorToast({
        description: "データの取得に失敗しました",
      });
      return;
    }

    setPokemonForms(newArray);
    setPokemonName(newArray[0].name);

    setLoading(true);
    const { stats, error } = await queryBaseStats(newArray[0].name);

    if (error || !stats) {
      showErrorToast({
        description: "データの取得に失敗しました",
      });
      return;
    }

    setPokemonBaseStats(stats);
    setLoading(false);
  }, [pokemonForms, queryBaseStats, showErrorToast]);

  const { allEffortValue: currentAllEffortValue } = useEffortValue(currentEffortValueAtom);
  const { allEffortValue: adjustedAllEffortValue } = useEffortValue(adjustedEffortValueAtom);

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
            handleClickPokemonImage={handleClickPokemonImage}
            pokemonForms={pokemonForms}
          />
        </Skeleton>
      </HStack>
      <Grid
        gap="32px"
        templateColumns="repeat(2, 1fr)"
        templateRows="auto, 1fr"
      >
        <GridItem>
          <Skeleton isLoaded={!loading}>
            <StatusTable
              pokemonBaseStats={pokemonBaseStats}
              pokemonName={pokemonName}
              statusType={CURRENT}
            />
          </Skeleton>
        </GridItem>
        <GridItem>
          <Skeleton isLoaded={!loading}>
            <StatusTable
              pokemonBaseStats={pokemonBaseStats}
              pokemonName={pokemonName}
              statusType={ADJUSTED}
            />
          </Skeleton>
        </GridItem>
        <GridItem gridColumn="span 2">
          <ResultTable
            adjustedEffortValues={adjustedAllEffortValue}
            currentEffortValues={currentAllEffortValue}
          />
        </GridItem>
      </Grid>
      <Spacer />
    </Flex>
  );
}
