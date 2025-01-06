import { Provider as JotaiProvider } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { type ReactNode } from "react";
import { cacheExchange, Client, fetchExchange, Provider as UrqlProvider } from "urql";

import { API_ENDPOINT } from "@/constants";

import type { WritableAtom } from "jotai";

const mockClient = new Client({
  url: API_ENDPOINT,
  exchanges: [cacheExchange, fetchExchange],
});

type AtomValue<T> = Iterable<
  readonly [WritableAtom<T, [T], unknown>, T]
>;

type AtomsHydratorProps<T> = {
  atomValues: AtomValue<T>;
  children: ReactNode;
};

const AtomsHydrator = <T, >({ atomValues, children }: AtomsHydratorProps<T>) => {
  useHydrateAtoms(new Map(atomValues));
  return children;
};

export function TestWrapper<T>({
  atomValues = [],
  children,
}: {
  atomValues?: AtomValue<T>;
  children: ReactNode;
}) {
  return (
    <UrqlProvider value={mockClient}>
      <JotaiProvider>
        <AtomsHydrator atomValues={atomValues}>
          {children}
        </AtomsHydrator>
      </JotaiProvider>
    </UrqlProvider>
  );
}
