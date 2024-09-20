import { createLazyFileRoute } from '@tanstack/react-router'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const Route = createLazyFileRoute('/sign-up/')({
  component: () => <SignUpScreen />,
})

export default function SignUpScreen() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex text-white">
      <div className="w-full max-w-md space-y-8">
        <div className="mt-4">
          <h2 className="text-3xl font-bold">Registar</h2>
          <p className="mt-2 text-sm text-gray-400">
            A fragilidade não define você. O seu progresso começa aqui.
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="text-sm font-medium">
              Nome
            </label>
            <Input id="fullName" name="fullName" type="text" required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phoneNumber" className="text-sm font-medium">
              Telemóvel
            </label>

            <Input type="tel" name="phoneNumber" id="phoneNumber" />
          </div>
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
            Registar
          </Button>
        </form>
        <p className="mt-2 text-center text-sm text-gray-400">
          Ao se registar você concorda com os{' '}
          <a
            href="#"
            className="font-medium text-green-500 hover:text-green-400"
          >
            Termos e Condições
          </a>{' '}
          e{' '}
          <a
            href="#"
            className="font-medium text-green-500 hover:text-green-400"
          >
            Política de Privacidade
          </a>
        </p>
        <p className="text-center text-sm text-gray-400">
          Já tens uma conta?{' '}
          <a
            href="#"
            className="font-medium text-green-500 hover:text-green-400"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  )
}
