import PWABadge from '@/PWABadge'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { Aperture, FileText, House, Search, User } from 'lucide-react'

export const Route = createRootRoute({
  component: () => (
    <>
      <main className="h-[120dvh] p-6">
        <Outlet />
        <hr />
      </main>
      <footer className="fixed bottom-0 w-full border-t-[1px] border-solid border-white/20 bg-background py-4 pb-8">
        <ul className="flex items-center justify-around">
          <Link
            className="flex flex-col items-center gap-1 text-gray-500 [&.active]:text-white"
            to="/"
          >
            <House />
            Home
          </Link>

          <li className="flex flex-col items-center text-gray-500">
            <Link
              className="\\\\ flex flex-col items-center gap-1 text-gray-500 [&.active]:text-white"
              to="/user"
            >
              <Search />
              Sign Up
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col items-center rounded-full bg-green-600 p-4"
              to="/"
            >
              <Aperture />
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col items-center gap-1 text-gray-500 [&.active]:text-white"
              to="/sign-up"
            >
              <FileText />
              Advice
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col items-center gap-1 text-gray-500 [&.active]:text-white"
              to="/user"
            >
              <User />
              User
            </Link>
          </li>
        </ul>
      </footer>
      <PWABadge />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
})
