import { useCallback } from "react";
import { useClient } from "urql";

import type { PokemonForm } from "@/_types";
import type { Pokemon_V2_Pokemon, Query_Root } from "@/features/infrastructures/gql/graphql";
import { QueryPokemonForms } from "@/features/infrastructures/queries";

import type { CombinedError } from "urql";

type Pokemon = Pick<Pokemon_V2_Pokemon, "name" | "pokemon_v2_pokemonsprites">;

type PokemonSpecies = Pick<Query_Root, "pokemon_v2_pokemonspecies"> & {
  pokemon_v2_pokemons: Pokemon[];
};
type QueryReturnType = {
  pokemon_v2_pokemonspecies: PokemonSpecies[];
};

export function usePokemonFormsQuery() {
  const client = useClient();

  const queryPokemonForm = useCallback(async (name: string): Promise<{
    pokemonForms: PokemonForm[] | undefined;
    error: CombinedError | undefined;
  }> => {
    const { data, error } = await client.query<QueryReturnType>(QueryPokemonForms, { name });

    const pokemons = data?.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons;

    const pokemonForms = pokemons?.map((pokemon) => (
      {
        name: pokemon.name,
        imageSrc: pokemon.pokemon_v2_pokemonsprites[0].sprites || "",
      }
    ));

    return {
      pokemonForms,
      error,
    };
  }, [client]);

  return {
    queryPokemonForm,
  };
}
