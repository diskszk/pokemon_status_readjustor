import { Box, HStack, Image } from "@chakra-ui/react";
import { useCallback } from "react";

import type { PokemonForm } from "@/types";

import type { Dispatch, SetStateAction } from "react";

type Props = {
  pokemonForms: PokemonForm[];
  setPokemonForms: Dispatch<SetStateAction<PokemonForm[]>>;
};

export function FormImages({ pokemonForms, setPokemonForms }: Props) {
  const handleClick = useCallback((target: PokemonForm) => {
    /* ポケモンの姿を並び替える */
    const newArray: PokemonForm[] = [];
    const rest = pokemonForms.filter((f) => f.name !== target.name);
    newArray.push(target, ...rest);
    setPokemonForms(newArray);
  }, [pokemonForms, setPokemonForms]);

  return (
    <HStack
      alignItems="flex-end"
      height="120px"
    >
      {pokemonForms.map((form, index) => (
        <Box
          as="button"
          cursor={index === 0 ? "default" : "pointer"}
          disabled={index === 0}
          key={index}
          onClick={() => handleClick(form)}
        >
          <Image
            alt={`${form.name}の画像`}
            boxSize={index === 0 ? "120px" : "90px"}
            src={form.imageSrc}
          />
        </Box>
      ))}
    </HStack>
  );
}
