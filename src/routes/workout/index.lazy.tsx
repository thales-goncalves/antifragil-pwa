import { createLazyFileRoute } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { format } from 'date-fns'

interface WorkoutEntry {
  title: string;
  time: string;
  duration: number;
  calories: number;
  image: string;
}

const workoutData: Record<string, WorkoutEntry[]> = {
  [format(new Date(), 'dd MMMM')]: [
    { title: 'High 56', time: '9:30 am', duration: 45, calories: 200, image: 'https://blog.sabin.com.br/wp-content/uploads/2022/01/yoga-e-seus-beneficios-1591x895.jpeg' },
    { title: 'High 56', time: '9:30 am', duration: 45, calories: 200, image: 'https://theprogrm.com/wp-content/uploads/the-progrm-power-crossfit-programming.webp' },
  ],
  [format(new Date(Date.now() - 86400000), 'dd MMMM')]: [
    { title: 'High 56', time: '9:30 am', duration: 45, calories: 200, image: 'https://www.revivespinandstretch.com/wp-content/uploads/2022/09/stretch-3.jpg' },
    { title: 'High 56', time: '9:30 am', duration: 45, calories: 200, image: 'https://cdn.shopify.com/s/files/1/0789/9293/3165/files/snimek_bezce_600x600.png' },
  ],
}

const WorkoutDetailsPage = () => {
  return (
    <div className="min-h-[90dvh] text-white p-6">
      <header className="flex items-center mb-6">
        <button className="p-2 mr-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold ml-20">Workout</h1>
      </header>
      {Object.entries(workoutData).map(([date, entries]) => (
        <div key={date} className="mb-6">
          <h2 className="text-gray-400 mb-2">{date === format(new Date(), 'dd MMMM') ? `Today, ${date}` : `Yesterday, ${date}`}</h2>
          {entries.map((entry, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-4 mb-4 flex items-center">
              <img src={entry.image} alt={entry.title} className="w-12 h-12 rounded-lg mr-4" />
              <div className="flex-grow">
                <h3 className="font-semibold">{entry.title}</h3>
                <div className="flex text-sm text-gray-400">
                  <span className="mr-4">{entry.time}</span>
                  <span className="mr-4">{entry.duration} min</span>
                  <span>{entry.calories} kcal</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export const Route = createLazyFileRoute('/workout/')({
  component: WorkoutDetailsPage
})