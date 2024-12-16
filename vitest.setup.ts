import { beforeAll, afterEach, afterAll } from "vitest";

import { server } from "./src/mocks/node";

const mockApis = ["QueryPokemonForms"];

beforeAll(() => server({ mockApis }).listen());
afterEach(() => server({ mockApis }).resetHandlers());
afterAll(() => server({ mockApis }).close());
