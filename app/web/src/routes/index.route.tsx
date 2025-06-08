import { createFileRoute } from "@tanstack/react-router";

import { Home } from "@/pages/index.page";

export const Route = createFileRoute("/")({
  component: () => <Home />,
});
