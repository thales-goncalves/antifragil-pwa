import { BellDot } from 'lucide-react'

export const Header = () => {
  return (
    <header className="mt-6 flex justify-between">
      <div className="flex flex-col gap-2">
        <p className="font-light text-gray-400">Friday, 20 May</p>
        <h2 className="text-xl font-bold">Welcome Thales</h2>
      </div>
      <span className="flex h-fit items-center justify-center rounded-full border border-white border-opacity-30 p-2">
        <BellDot size={20} />
      </span>
    </header>
  )
}
