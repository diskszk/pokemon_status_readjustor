import type { STATUS_SPECIES } from "@/constants/term";
import { ATK, DEF, HP, SP_ATK, SP_DEF, SPD } from "@/constants/term";

type ReturnType = typeof STATUS_SPECIES[number] | "";

export function toJaStatusSpecies(str: string): ReturnType {
  switch (str.toLowerCase()) {
    case "hp": {
      return HP;
    }
    case "attack": {
      return ATK;
    }
    case "defense": {
      return DEF;
    }
    case "special-attack": {
      return SP_ATK;
    }
    case "special-defense": {
      return SP_DEF;
    }
    case "speed": {
      return SPD;
    }
    default: {
      return "";
    }
  }
}
