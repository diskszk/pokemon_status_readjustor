import type { Pokemon, PokemonNameChart } from "@/types";

export const mockPokemons = [
  {
    en: "bulbasaur",
    ja: "フシギダネ",
  },
  {
    en: "ivysaur",
    ja: "フシギソウ",
  },
  {
    en: "venusaur",
    ja: "フシギバナ",
  },
  {
    en: "charmander",
    ja: "ヒトカゲ",
  },
  {
    en: "charmeleon",
    ja: "リザード",
  },
  {
    en: "charizard",
    ja: "リザードン",
  },
  {
    en: "slowpoke",
    ja: "ヤドン",
  },
  {
    en: "slowbro",
    ja: "ヤドラン",
  },
  {
    en: "slowking",
    ja: "ヤドキング",
  },
] satisfies PokemonNameChart[];

export const garchomp = {
  name: "garchomp",
  baseStats: [
    { value: 108, name: "hp" },
    { value: 130, name: "attack" },
    { value: 95, name: "defense" },
    { value: 80, name: "special-attack" },
    { value: 85, name: "special-defense" },
    { value: 102, name: "speed" },
  ],
  forms: [{
    name: "garchomp",
    imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
  }],
} satisfies Pokemon;
