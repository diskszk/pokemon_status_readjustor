import { mockModules } from "./modules";

type HandlerRegister = string[];

export const handlers = (mockApis: HandlerRegister) => {
  return mockModules.filter((module) => {
    return mockApis.includes(module.name);
  }).map((module) => {
    return module.handler;
  });
};
