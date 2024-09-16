import { Box, HStack, Image } from "@chakra-ui/react";

import type { PokemonForm } from "@/types";

type Props = {
  pokemonForms: PokemonForm[];
  handleClickPokemonImage: (target: PokemonForm) => void;

};

export function FormImages({ pokemonForms, handleClickPokemonImage }: Props) {
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
          onClick={() => handleClickPokemonImage(form)}
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
