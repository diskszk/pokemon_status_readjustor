import { Provider } from "urql";
import { vitest } from "vitest";

import type { PropsWithChildren } from "react";

const mockClient = {
  executeQuery: vitest.fn(() => () => void 0),
  executeMutation: vitest.fn(() => () => void 0),
  executeSubscription: vitest.fn(() => () => void 0),
};

export function TestWrapper({ children }: PropsWithChildren) {
  return (
    <Provider value={mockClient}>
      {children}
    </Provider>
  );
}
