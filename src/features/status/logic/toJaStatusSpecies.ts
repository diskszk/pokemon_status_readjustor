import type { STATUS_SPECIES_JA } from "@/features/constants";
import { HP_JA, ATK_JA, DEF_JA, SP_ATK_JA, SP_DEF_JA, SPD_JA } from "@/features/constants";
import type { StatusSpecies } from "@/types";

type StatusSpeciesJA = typeof STATUS_SPECIES_JA[number];

export function toJaStatusSpecies(str: StatusSpecies): StatusSpeciesJA {
  switch (str.toLowerCase()) {
    case "hp": {
      return HP_JA;
    }
    case "attack": {
      return ATK_JA;
    }
    case "defense": {
      return DEF_JA;
    }
    case "special-attack": {
      return SP_ATK_JA;
    }
    case "special-defense": {
      return SP_DEF_JA;
    }
    case "speed": {
      return SPD_JA;
    }
    default: {
      throw new Error("Invalid Value");
    }
  }
}
