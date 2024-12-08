import { useCallback } from "react";
import { useClient } from "urql";

import type { Pokemon_V2_Pokemonspeciesname } from "@/features/infrastructures/gql/graphql";
import { QueryPokemonId } from "@/features/infrastructures/queries";

import type { CombinedError } from "urql";

type QueryReturnType = {
  pokemon_v2_pokemonspeciesname: Pick<Pokemon_V2_Pokemonspeciesname, "pokemon_species_id">[];
};

export function usePokemonIdQuery(): {
  queryPokemonId: (inputName: string) => Promise<{
    id: number | undefined;
    error: CombinedError | undefined;
  }>;
} {
  const client = useClient();

  const queryPokemonId = useCallback(async (inputName: string) => {
    const { data, error } = await client.query<QueryReturnType>(QueryPokemonId, { inputName });

    const speciesNames = data?.pokemon_v2_pokemonspeciesname[0];

    const id = speciesNames?.pokemon_species_id;

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
