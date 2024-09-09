import { type FormsReturnType as ReturnType, queryPokemonForms } from "@/queries";

import { queryPokeAPI } from "./queryPokeAPI";

type PokemonForm = {
  name: string;
  imageSrc: string;
};

export async function getPokemonForms(name: string): Promise<PokemonForm[]> {
  const response = await queryPokeAPI<ReturnType>(queryPokemonForms({ name }));

  if (response.isErr()) {
    throw response.error;
  }

  const { data } = response.value;

  const pokemons = data.pokemon_v2_pokemonspecies[0].pokemon_v2_pokemons;

  return pokemons.map((pokemon) => (
    {
      name: pokemon.name,
      imageSrc: pokemon.pokemon_v2_pokemonsprites[0].sprites || "",
    }
  ));
}
