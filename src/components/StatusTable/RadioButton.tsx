import { HStack } from "@chakra-ui/react";
import { useCallback, useRef } from "react";

import type { StatusSpeciesEN } from "@/types";

import { useNature } from "./useNature";

type Props = {
  speciesName: StatusSpeciesEN;
};

export function RadioButton({ speciesName }: Props) {
  const { setPlusNature, setMinusNature } = useNature();

  const plusRef = useRef<HTMLInputElement>(null);
  const minusRef = useRef<HTMLInputElement>(null);

  const handleCheckPlus = useCallback(() => {
    setPlusNature(speciesName);
    if (minusRef.current) {
      if (minusRef.current.checked) {
        setMinusNature(null);
      }
      minusRef.current.checked = false;
    }
  }, [setMinusNature, setPlusNature, speciesName]);

  const handleCheckMinus = useCallback(() => {
    setMinusNature(speciesName);
    if (plusRef.current) {
      if (plusRef.current.checked) {
        setPlusNature(null);
      }
      plusRef.current.checked = false;
    }
  }, [setMinusNature, setPlusNature, speciesName]);

  return (
    <HStack>
      <input
        name="plus"
        onChange={handleCheckPlus}
        ref={plusRef}
        type="radio"
      />
      <input
        name="minus"
        onChange={handleCheckMinus}
        ref={minusRef}
        type="radio"
      />
    </HStack>
  );
}
