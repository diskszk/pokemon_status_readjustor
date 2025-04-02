import { setupServer } from "msw/node";

import { handlers } from "./handlers";

type Worker = {
  mockApis: string[];
};

export const server = ({ mockApis }: Worker) => {
  return setupServer(...handlers(mockApis));
};

server({ mockApis: ["QueryPokemonBaseStats"] });
