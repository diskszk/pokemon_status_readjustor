import { useAtom } from "jotai";

import { pokemonNameAtom } from "@/stores";

export function usePokemonName() {
  const [pokemonName, setPokemonName] = useAtom(pokemonNameAtom);

  return {
    pokemonName,
    setPokemonName,
  };
}
