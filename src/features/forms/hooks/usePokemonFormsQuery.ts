import { useQuery } from "urql";

import type { QueryPokemonFormsQuery, QueryPokemonFormsQueryVariables } from "@/infrastructures/gql/graphql";
import { QueryPokemonForms } from "@/infrastructures/queries";
import type { PokemonForm } from "@/types";

import type { CombinedError } from "urql";

export function usePokemonFormsQuery(variables: QueryPokemonFormsQueryVariables): {
  pokemonForms: PokemonForm[] | undefined;
  error: CombinedError | undefined;
} {
  const [{ data, error }] = useQuery<QueryPokemonFormsQuery>({
    query: QueryPokemonForms,
    variables: { id: variables.id },
    pause: !variables.id,
  });

  if (error || !data) {
    return {
      pokemonForms: undefined,
      error,
    };
  }

  const pokemon_v2_pokemonspecy = data.pokemon_v2_pokemonspecies[0];

  const pokemonForms = pokemon_v2_pokemonspecy.pokemon_v2_pokemons.map((p) => {
    if (!p.pokemon_v2_pokemonforms[0].pokemon_v2_pokemonformnames.length) {
      return undefined;
    }

    const formName = p.pokemon_v2_pokemonforms[0].pokemon_v2_pokemonformnames[0].name;
    return {
      name: formName,
      id: p.id,
    };
  }).filter((v) => v !== undefined);

  return {
    pokemonForms,
    error,
  };
}
