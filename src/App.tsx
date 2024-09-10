import { Center, Flex, Heading, HStack, Image, Spacer } from "@chakra-ui/react";
import { useCallback, useMemo, type FormEvent } from "react";

import { ResultTable, SearchForm, StatusTable } from "@/components";
import { mockPokemons } from "@/mock/pokemons";

import pokemonsJson from "../pokemon.json";

const imageSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png";

export function App() {
  const pokemons = useMemo(() => import.meta.env.MODE === "production" ? pokemonsJson : mockPokemons, []);

  const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const ja = form.get("pokemon-ja");
    const en = form.get("pokemon-en");

    console.log("data", { ja, en });
  }, []);

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
          handleSubmit={onSubmit}
          pokemons={pokemons}
        />
        <Image
          boxSize="120px"
          src={imageSrc}
        />
        <Image
          boxSize="60px"
          src={imageSrc}
        />
      </HStack>
      <HStack
        spacing="32px"
      >
        <StatusTable />
        <StatusTable />
      </HStack>
      <ResultTable />
      <Spacer />
    </Flex>
  );
}
