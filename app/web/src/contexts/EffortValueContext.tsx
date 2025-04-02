import { createStore } from "jotai";
import { createContext } from "react";

import { effortValuesAtom, initialValue } from "@/atoms";

import type { PropsWithChildren } from "react";

const effortValuesStore = createStore();
effortValuesStore.set(effortValuesAtom, initialValue);

export const EffortValueContext = createContext<typeof effortValuesStore>(effortValuesStore);

export function EffortValueProvider({ children }: PropsWithChildren) {
  return (
    <EffortValueContext.Provider value={effortValuesStore}>
      {children}
    </EffortValueContext.Provider>
  );
}
