import { useQuery } from "urql";

import type { QueryPokemonFormsQuery, QueryPokemonFormsQueryVariables } from "@/infrastructures/gql/graphql";
import { QueryPokemonForms } from "@/infrastructures/queries";
import type { PokemonForm } from "@/types";

import type { CombinedError } from "urql";

export function usePokemonFormsQuery(id: QueryPokemonFormsQueryVariables): {
  pokemonForms: PokemonForm[] | undefined;
  originalName: string | undefined;
  error: CombinedError | undefined;
} {
  const [result] = useQuery<QueryPokemonFormsQuery>({
    query: QueryPokemonForms,
    variables: { id },
    pause: !id,
  });

  const { data, error } = result;
  if (error || !data) {
    return {
      pokemonForms: undefined,
      originalName: undefined,
      error,
    };
  }

  const pokemon_v2_pokemonspecy = data.pokemon_v2_pokemonspecies[0];
  const originalName = pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesnames[0].name;

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
    originalName,
    error,
  };
}
