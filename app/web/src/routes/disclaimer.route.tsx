import { createFileRoute } from "@tanstack/react-router";

import { DisclaimerPage } from "@/pages/disclaimer.page";

export const Route = createFileRoute("/disclaimer")({
  component: () => <DisclaimerPage />,
});
