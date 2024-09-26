import { createLazyFileRoute } from '@tanstack/react-router'
import { ArrowLeft, Crown, MoreVertical } from 'lucide-react'

interface ProgramCard {
  title: string;
  duration: number;
  isPro?: boolean;
  gradient: string;
}

const programs: ProgramCard[] = [
  { title: 'Nutrition Tips', duration: 120, gradient: 'from-purple-600 to-pink-500' },
  { title: 'Routine', duration: 120, isPro: true, gradient: 'from-cyan-500 to-blue-500' },
  { title: 'Habits Tips', duration: 120, gradient: 'from-yellow-400 to-orange-500' },
  { title: 'Workout', duration: 120, isPro: true, gradient: 'from-red-600 to-red-800' },
]

const CollectionsPage = () => {
  return (
    <div className="w-full  text-white p-6">
      <header className="flex justify-between items-center mb-6">
        <button className="p-2">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold">Collections</h1>
        <button className="p-2">
          <MoreVertical size={24} />
        </button>
      </header>
      <h2 className="text-xl font-semibold mb-4">Programs</h2>
      <div className="grid grid-cols-2 gap-4">
        {programs.map((program, index) => (
          <div
            key={index}
            className={`rounded-xl p-4 h-40 flex flex-col justify-between bg-gradient-to-br ${program.gradient}`}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold">{program.title}</h3>
              {program.isPro && (
                <div className="flex bg-green-900 items-center text-xs text-green-400 font-bold px-2 py-1 rounded-full">
                  <Crown className='h-3 w-3 mr-1'/>
                  Pro
                </div>
              )}
            </div>
            <p className="text-sm">{program.duration} min</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export const Route = createLazyFileRoute('/collections/')({
  component: CollectionsPage
})