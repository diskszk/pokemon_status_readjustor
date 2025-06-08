import { createRootRoute, Outlet } from "@tanstack/react-router";

import { Layout } from "@/components/layout";

import { Providers } from "../Providers";

export const Route = createRootRoute({
  component: () => (
    <Providers>
      <Layout>
        <Outlet />
      </Layout>
    </Providers>
  ),
});
