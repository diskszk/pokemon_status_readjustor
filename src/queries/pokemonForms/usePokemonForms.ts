import { useQuery } from "urql";

import type { Pokemon_V2_Pokemon, Query_Root } from "@/gql/graphql";

import { QueryPokemonForms } from "./query";

import type { CombinedError } from "urql";

type Pokemon = Pick<Pokemon_V2_Pokemon, "name" | "pokemon_v2_pokemonsprites">;

type PokemonSpecies = Pick<Query_Root, "pokemon_v2_pokemonspecies"> & {
  pokemon_v2_pokemons: Pokemon[];
};
 type QueryReturnType = {
   pokemon_v2_pokemonspecies: PokemonSpecies[];
 };

type PokemonForm = {
  name: string;
  imageSrc: string;
};

export function usePokemonForms(name: string): {
  data: PokemonForm[] | undefined;
  fetching: boolean;
  error: CombinedError | undefined;
} {
  const [result] = useQuery<QueryReturnType>({
    query: QueryPokemonForms,
    variables: { name },
  });

  const { data, fetching, error } = result;

  const pokemons = data?.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons;

  const forms = pokemons?.map((pokemon) => (
    {
      name: pokemon.name,
      imageSrc: pokemon.pokemon_v2_pokemonsprites[0].sprites || "",
    }
  ));

  return {
    data: forms,
    fetching,
    error,
  };
}
