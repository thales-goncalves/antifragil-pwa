import PWABadge from '@/PWABadge'
import { createRootRoute, Outlet } from '@tanstack/react-router'

import Menu from '@/components/menu'

export const Route = createRootRoute({
  component: () => (
    <>
      <main className="max-h-[90dvh] overflow-scroll">
        <Outlet />
      </main>
      <Menu />
      <PWABadge />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
})
