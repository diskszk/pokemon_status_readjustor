import { ATK, DEF, HP, SP_ATK, SP_DEF, SPD } from "@/constants";
import type { PokemonStatus } from "@/types";

type MockData = {
  id: number;
  baseStats: PokemonStatus[];
};

export const baseStatsMockData = [
  {
    id: 1,
    baseStats: [
      { value: 45, name: HP },
      { value: 49, name: ATK },
      { value: 49, name: DEF },
      { value: 65, name: SP_ATK },
      { value: 65, name: SP_DEF },
      { value: 45, name: SPD },
    ],
  },
  {
    id: 2,
    baseStats: [
      { value: 60, name: HP },
      { value: 62, name: ATK },
      { value: 63, name: DEF },
      { value: 80, name: SP_ATK },
      { value: 80, name: SP_DEF },
      { value: 60, name: SPD },
    ],
  },
  {
    id: 3,
    baseStats: [
      { value: 80, name: HP },
      { value: 82, name: ATK },
      { value: 83, name: DEF },
      { value: 100, name: SP_ATK },
      { value: 100, name: SP_DEF },
      { value: 80, name: SPD },
    ],
  },
  {
    id: 6,
    baseStats: [
      { value: 78, name: HP },
      { value: 84, name: ATK },
      { value: 78, name: DEF },
      { value: 109, name: SP_ATK },
      { value: 85, name: SP_DEF },
      { value: 100, name: SPD },
    ],
  },
  {
    id: 445,
    baseStats: [
      { value: 108, name: HP },
      { value: 130, name: ATK },
      { value: 95, name: DEF },
      { value: 80, name: SP_ATK },
      { value: 85, name: SP_DEF },
      { value: 102, name: SPD },
    ],
  },
  {
    id: 151,
    baseStats: [
      { value: 100, name: HP },
      { value: 100, name: ATK },
      { value: 100, name: DEF },
      { value: 100, name: SP_ATK },
      { value: 100, name: SP_DEF },
      { value: 100, name: SPD },
    ],
  },
  {
    id: 1024,
    baseStats: [
      { value: 90, name: HP },
      { value: 65, name: ATK },
      { value: 85, name: DEF },
      { value: 65, name: SP_ATK },
      { value: 85, name: SP_DEF },
      { value: 60, name: SPD },
    ],
  },
  {
    id: 10276,
    baseStats: [
      { value: 95, name: HP },
      { value: 95, name: ATK },
      { value: 110, name: DEF },
      { value: 105, name: SP_ATK },
      { value: 110, name: SP_DEF },
      { value: 85, name: SPD },
    ],
  },
  {
    id: 10277,
    baseStats: [
      { value: 160, name: HP },
      { value: 105, name: ATK },
      { value: 110, name: DEF },
      { value: 130, name: SP_ATK },
      { value: 110, name: SP_DEF },
      { value: 85, name: SPD },
    ],
  },

] satisfies MockData[];
