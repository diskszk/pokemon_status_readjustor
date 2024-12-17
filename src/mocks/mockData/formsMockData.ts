type MockData = {
  id: number;
  forms: {
    name: string;
    id: number;
    sprites: string;
  }[];
};

export const formsMockData = [
  {
    id: 1,
    forms: [
      {
        name: "bulbasaur",
        id: 1,
        sprites: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
    ],
  },
  {
    id: 2,
    forms: [
      {
        name: "ivysaur",
        id: 2,
        sprites: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      },
    ],
  },
  {
    id: 3,
    forms: [
      {
        name: "venusaur",
        id: 3,
        sprites: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      },
      {
        name: "venusaur-mega",
        id: 10033,
        sprites: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10033.png",
      },
      {
        name: "venusaur-gmax",
        id: 10195,
        sprites: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10195.png",
      },
    ],
  },
  {
    id: 6,
    forms: [
      {
        name: "charizard",
        id: 6,
        sprites: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      },
      {
        name: "charizard-mega-x",
        id: 10034,
        sprites: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10034.png",
      },
      {
        name: "charizard-mega-y",
        id: 10035,
        sprites: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10035.png",
      },
      {
        name: "charizard-gmax",
        id: 10196,
        sprites: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10196.png",
      },
    ],
  },
  {
    id: 151,
    forms: [
      {
        id: 151,
        name: "mew",
        sprites: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
      },
    ],
  },
  {
    id: 445,
    forms: [
      {
        name: "garchomp",
        id: 445,
        sprites: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png",
      },
      {
        name: "garchomp-mega",
        id: 10058,
        sprites: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10058.png",
      },
    ],
  },
] satisfies MockData[];
