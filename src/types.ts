import type { STATUS_SPECIES, STATUS_SPECIES_JA } from "@/constants";

export type PokemonNameChart = {
  en: string;
  ja: string;
};

export type StatusSpeciesEN = typeof STATUS_SPECIES[number];
export type StatusSpeciesJA = typeof STATUS_SPECIES_JA[number];

export type BaseStat = {
  value: number;
  name: StatusSpeciesEN;
};

export type Pokemon = {
  name: string;
  baseStats: BaseStat[];
};
