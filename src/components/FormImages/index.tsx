import { Box, HStack, Image } from "@chakra-ui/react";
import { useState, useCallback } from "react";

import type { PokemonForm } from "@/types";

type Props = {
  pokemonForms: PokemonForm[];
};

export function FormImages({ pokemonForms }: Props) {
  const [viewForms, setViewForms] = useState(pokemonForms);

  const handleClick = useCallback((target: PokemonForm) => {
    /* ポケモンの姿を並び替える */
    const newArray: PokemonForm[] = [];
    const rest = viewForms.filter((f) => f.name !== target.name);
    newArray.push(target, ...rest);
    setViewForms(newArray);
  }, [viewForms]);

  return (
    <HStack
      alignItems="flex-end"
      height="120px"
    >
      {viewForms.map((form, index) => (
        <Box
          as="button"
          cursor={index === 0 ? "default" : "pointer"}
          disabled={index === 0}
          key={index}
          onClick={() => handleClick(form)}
        >
          <Image
            boxSize={index === 0 ? "120px" : "90px"}
            src={form.imageSrc}
          />
        </Box>
      ))}
    </HStack>
  );
}
