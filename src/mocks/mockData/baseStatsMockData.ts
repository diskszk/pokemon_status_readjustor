import { ATK, DEF, HP, SP_ATK, SP_DEF, SPD } from "@/features/constants";
import type { PokemonStatus } from "@/features/types";

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
    id: 10033,
    baseStats: [
      { value: 80, name: HP },
      { value: 100, name: ATK },
      { value: 123, name: DEF },
      { value: 122, name: SP_ATK },
      { value: 120, name: SP_DEF },
      { value: 80, name: SPD },
    ],
  },
  {
    id: 10195,
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
    id: 10196,
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
    id: 10034,
    baseStats: [
      { value: 78, name: HP },
      { value: 130, name: ATK },
      { value: 111, name: DEF },
      { value: 130, name: SP_ATK },
      { value: 85, name: SP_DEF },
      { value: 100, name: SPD },
    ],
  },
  {
    id: 10035,
    baseStats: [
      { value: 78, name: HP },
      { value: 104, name: ATK },
      { value: 78, name: DEF },
      { value: 159, name: SP_ATK },
      { value: 115, name: SP_DEF },
      { value: 100, name: SPD },
    ],
  },
  {
    id: 10195,
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

] satisfies MockData[];
