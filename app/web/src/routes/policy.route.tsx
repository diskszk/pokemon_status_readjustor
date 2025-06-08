import { createFileRoute } from "@tanstack/react-router";

import { PolicyPage } from "@/pages/policy.page";

export const Route = createFileRoute("/policy")({
  component: () => <PolicyPage />,
});
