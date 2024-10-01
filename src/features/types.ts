import type { ADJUSTED, CURRENT, STATUS_SPECIES } from "@/features/constants";

export type StatusSpecies = typeof STATUS_SPECIES[number];

export type PokemonNameChart = {
  en: string;
  ja: string;
};

export type PokemonForm = {
  name: string;
  imageSrc: string;
};

export type PokemonStatus = {
  value: number;
  name: StatusSpecies;
};

export type StatusType = typeof CURRENT | typeof ADJUSTED;
