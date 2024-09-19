import type { ADJUSTED, CURRENT, STATUS_SPECIES, STATUS_SPECIES_JA } from "@/_constants";

export type PokemonNameChart = {
  en: string;
  ja: string;
};

export type StatusSpeciesEN = typeof STATUS_SPECIES[number];
export type StatusSpeciesJA = typeof STATUS_SPECIES_JA[number];

export type Pokemon = {
  name: string;
  baseStats: BaseStat[];
  forms: PokemonForm[];
};

export type EffortValueState = {
  type: StatusSpeciesEN;
  value: number;
};

export type PokemonForm = {
  name: string;
  imageSrc: string;
};

export type BaseStat = {
  value: number;
  name: StatusSpeciesEN;
};

export type StatusType = typeof CURRENT | typeof ADJUSTED;
