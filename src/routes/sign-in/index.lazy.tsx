import { createLazyFileRoute } from '@tanstack/react-router'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const Route = createLazyFileRoute('/sign-in/')({
  component: () => <SignInScreen />,
})

export default function SignInScreen() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex text-white">
      <div className="w-full max-w-md space-y-8">
        <div className="mt-4">
          <h2 className="text-3xl font-bold">Bem vindo de volta!</h2>
          {/* <p className="mt-2 text-sm text-gray-400"></p> */}
        </div>
        <form className="mt-8 space-y-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <div className="relative rounded-md shadow-sm">
              <Input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-green-500 text-white hover:bg-green-600"
          >
            Entrar
          </Button>
        </form>

        <p className="text-center text-sm text-gray-400">
          Ainda não possui uma conta?{' '}
          <a
            href="#"
            className="font-medium text-green-500 hover:text-green-400"
          >
            Registar
          </a>
        </p>
      </div>
    </div>
  )
}
