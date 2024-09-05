import { Clock } from 'lucide-react'

export const LiveBanner = () => {
  return (
    <div className="flex w-full items-center justify-between rounded-xl bg-gray-800 px-4 py-4">
      <div className="flex flex-col gap-2">
        <p className="font-light text-gray-400">Today`s live</p>
        <h2 className="text-xl font-semibold">How to sleep beter</h2>
      </div>
      <p className="flex items-center justify-center gap-2 font-light text-gray-400">
        <Clock size={16} /> 9:30 pm
      </p>
    </div>
  )
}
