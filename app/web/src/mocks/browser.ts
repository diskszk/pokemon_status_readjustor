import { setupWorker } from "msw/browser";

import { handlers } from "./handlers";

type Worker = {
  mockApis: string[];
};

export const worker = ({ mockApis }: Worker) => {
  return setupWorker(...handlers(mockApis));
};
