import type { usePokemonFormsQuery } from "@/features/forms/hooks";

type MockData = {
  id: number;
  forms: Omit<ReturnType<typeof usePokemonFormsQuery>, "error">;
};

export const formsMockData = [
  {
    id: 1,
    forms: {
      pokemonForms: [],
      originalName: "フシギダネ",
    },
  },
  {
    id: 2,
    forms: {
      pokemonForms: [],
      originalName: "フシギソウ",
    },
  },
  {
    id: 3,
    forms: {
      pokemonForms: [],
      originalName: "フシギバナ",
    },
  },
  {
    id: 6,
    forms: {
      pokemonForms: [],
      originalName: "リザードン",
    },
  },
  {
    id: 151,
    forms: {
      pokemonForms: [],
      originalName: "ミュウ",
    },
  },
  {
    id: 445,
    forms: {
      pokemonForms: [],
      originalName: "ガブリアス",
    },
  },
  {
    id: 1024,
    forms: {
      originalName: "テラパゴス",
      pokemonForms: [
        {
          id: 1024,
          name: "ノーマルフォルム",
        },
        {
          id: 10276,
          name: "テラスタルフォルム",
        },
        {
          id: 10277,
          name: "ステラフォルム",
        },
      ],
    },
  },
] satisfies MockData[];
