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
    },
  },
  {
    id: 2,
    forms: {
      pokemonForms: [],
    },
  },
  {
    id: 3,
    forms: {
      pokemonForms: [],
    },
  },
  {
    id: 6,
    forms: {
      pokemonForms: [],
    },
  },
  {
    id: 151,
    forms: {
      pokemonForms: [],
    },
  },
  {
    id: 445,
    forms: {
      pokemonForms: [],
    },
  },
  {
    id: 1024,
    forms: {
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
