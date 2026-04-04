import { useCallback } from "react";
import { useClient } from "urql";

import type { QueryPokemonIdQuery, QueryPokemonIdQueryVariables } from "@/infrastructures/gql/graphql";
import { QueryPokemonId } from "@/infrastructures/queries";

import type { CombinedError } from "urql";

export function usePokemonIdQuery(): {
  queryPokemonId: (variables: QueryPokemonIdQueryVariables) => Promise<{
    id: number | undefined;
    error: CombinedError | undefined;
  }>;
} {
  const client = useClient();

  const queryPokemonId = useCallback(async (variables: QueryPokemonIdQueryVariables) => {
    const { data, error } = await client.query<QueryPokemonIdQuery>(QueryPokemonId, { inputName: variables.inputName });

    if (error || !data) {
      return {
        error,
        id: undefined,
      };
    }

    const speciesNames = data.pokemonspeciesname[0];

    const id = speciesNames.pokemon_species_id;

    if (!id) {
      return {
        id: undefined,
        error,
      };
    }

    return {
      id,
      error,
    };
  }, [client]);

  return {
    queryPokemonId,
  };
}
