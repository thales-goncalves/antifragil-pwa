import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowLeft, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

const motivationsOptions = [
  "Add variety to my routine",
  "Establish healthier habits",
  "Find a motivation workout time",
  "Workout with friends",
  "Others"
]

function SetupAccount() {
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set())
  const navigate = useNavigate()

  const toggleOption = (option: string) => {
    setSelectedOptions(prev => {
      const newSet = new Set(prev)
      if (newSet.has(option)) {
        newSet.delete(option)
      } else {
        newSet.add(option)
      }
      return newSet
    })
  }

  return (
    <div className="text-white min-h-[90dvh] w-full max-w-md mx-auto flex flex-col p-6">
      {/* Nav Header */}
        <div className="flex items-center flex-row mb-6 justify-between w-full">  
          <Button variant="ghost" size="icon" className=' bg-gray-900 rounded-full' onClick={() => navigate({ to: '/' })}>
            <ArrowLeft className="h-6 w-6 text-gray-300" />
          </Button>
          <h1 className="text-xl font-semibold ml-4"></h1>
          <div className="min-w-10">
          </div>
        </div>
      {/* Nav Header */}
      {/* Feedback Options */}
      <div className="flex flex-col flex-1 space-y-4 items-center justify-center">
        {motivationsOptions.map((option) => (
          <button
            key={option}
            className={`w-full p-4 rounded-xl flex justify-between items-center border ${
              selectedOptions.has(option) 
                ? 'bg-green-800 border-green-500' 
                : 'bg-gray-900 border-green-500'
            }`}
            onClick={() => toggleOption(option)}
          >
            <span>{option}</span>
            <div className={`w-6 h-6 rounded-md flex items-center justify-center ${
              selectedOptions.has(option) ? 'bg-green-500' : 'border-2 border-green-500'
            }`}>
              <Check className={`h-4 w-4 ${
                selectedOptions.has(option) ? 'text-black' : 'text-gray-700'
              }`} />
            </div>
          </button>
        ))}
      </div>
      <div className="">
        <Button 
          className="w-full bg-green-500 hover:bg-green-600" 
          size="lg"
          onClick={() => navigate({ to: '/setup-account-2' })}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
export const Route = createLazyFileRoute('/setup-account-1/')({
  component: SetupAccount
})