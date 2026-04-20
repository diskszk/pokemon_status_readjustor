import { atom, createStore } from "jotai";
import { createContext } from "react";

import type { PropsWithChildren } from "react";

const levelAtom = atom<number>();
const levelValueStore = createStore();
levelValueStore.set(levelAtom, 50);

export const LevelContext = createContext<typeof levelValueStore>(levelValueStore);

export function LevelProvider({ children }: PropsWithChildren) {
  return (
    <LevelContext.Provider value={levelValueStore}>
      {children}
    </LevelContext.Provider>
  );
}
