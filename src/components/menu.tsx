/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useLocation } from '@tanstack/react-router'
import { FileText, Home, Layers, User } from 'lucide-react'
import { useState } from 'react'

type MenuItemProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  label: string
  to: string
}
export default function FooterMenu() {
  const location = useLocation()
  const [, setActive] = useState(location.pathname)

  const MenuItem = ({ icon: Icon, label, to }: MenuItemProps) => (
    <Link
      to={to}
      className={`flex flex-col items-center text-gray-500 [&.active]:text-white`}
      onClick={() => setActive(to)}
    >
      <Icon className={`h-6 w-6 text-gray-500 [&.active]:text-white`} />
      <span className="mt-1 text-xs">{label}</span>
    </Link>
  )

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-900">
      <div className="flex items-center justify-around py-4">
        <MenuItem icon={Home} label="Home" to="/dashboard" />
        <MenuItem icon={Layers} label="Collections" to="/collections" />
        <Link
          to="/"
          className="flex flex-col items-center"
          onClick={() => setActive('/home')}
        >
          <div
            className={`rounded-full bg-green-500 p-3 [&.active]:text-white`}
          >
            <User className="h-6 w-6 text-white" />
          </div>
        </Link>
        <MenuItem icon={FileText} label="My Progress" to="/sign-up" />
        <MenuItem icon={User} label="Profile" to="/sign-in" />
      </div>
    </footer>
  )
}
