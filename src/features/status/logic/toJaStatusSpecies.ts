import { HP_JA, ATK_JA, DEF_JA, SP_ATK_JA, SP_DEF_JA, SPD_JA } from "@/_constants";
import type { StatusSpeciesEN, StatusSpeciesJA } from "@/_types";

export function toJaStatusSpecies(str: StatusSpeciesEN): StatusSpeciesJA {
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
