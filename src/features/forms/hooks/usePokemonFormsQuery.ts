import { useQuery } from "urql";

import type { Pokemon_V2_Pokemon, Query_Root } from "@/infrastructures/gql/graphql";
import { QueryPokemonForms } from "@/infrastructures/queries";
import type { PokemonForm } from "@/types";

import type { CombinedError } from "urql";

type Pokemon = Pick<Pokemon_V2_Pokemon, "name" | "id" | "pokemon_v2_pokemonsprites">;

type PokemonSpecies = Pick<Query_Root, "pokemon_v2_pokemonspecies"> & {
  pokemon_v2_pokemons: Pokemon[];
};
type QueryReturnType = {
  pokemon_v2_pokemonspecies: PokemonSpecies[];
};

export function usePokemonFormsQuery(id: number): {
  pokemonForms: PokemonForm[] | undefined;
  error: CombinedError | undefined;
} {
  const [result] = useQuery<QueryReturnType>({
    query: QueryPokemonForms,
    variables: { id },
    pause: !id,
  });

  const { data, error } = result;
  if (error || !data) {
    return {
      pokemonForms: undefined,
      error,
    };
  }

  const pokemons = data?.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons;

  const pokemonForms = pokemons?.map((pokemon) => (
    {
      name: pokemon.name,
      imageSrc: pokemon.pokemon_v2_pokemonsprites[0].sprites || "",
      id: pokemon.id,
    }
  ));

  return {
    pokemonForms,
    error,
  };
}
