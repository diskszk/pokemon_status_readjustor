import type { PokemonForm } from "@/types";

export function mergeDuplicates(pokemonForms: PokemonForm[]): PokemonForm[] {
  const map = new Map<string, number>();
  pokemonForms.forEach((form) => {
    map.set(form.name, form.id);
  });

  const arr = Array.from(map);
  const result: PokemonForm[] = arr.map((value) => ({
    name: value[0],
    id: value[1],
  }));

  return result;
}
