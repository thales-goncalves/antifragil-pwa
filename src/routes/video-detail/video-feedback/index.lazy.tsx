import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowLeft, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

const feedbackOptions = [
  "The video was fun",
  "I struggled",
  "It helped me motivativate myself",
  "I want more videos like this"
]

function VideoFeedbackScreen() {
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set())

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

  const handleNext = () => {
    console.log("Selected options:", Array.from(selectedOptions))
  }

  return (
    <div className="text-white min-h-[90dvh] w-full max-w-md mx-auto flex flex-col p-6">
      {/* Status Bar */}
      <div className="flex justify-between items-center">
        <span className="text-sm">9:41</span>
        <div className="space-x-1">
          <span className="inline-block w-4 h-4 bg-white rounded-full"></span>
          <span className="inline-block w-4 h-4 bg-white rounded-full"></span>
          <span className="inline-block w-4 h-4 bg-white rounded-full"></span>
        </div>
      </div>

      {/* Back Button */}
      <div className="p-4">
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
          <ArrowLeft className="h-6 w-6" />
        </Button>
      </div>

      {/* Feedback Options */}
      <div className="flex-1 px-4 space-y-4">
        {feedbackOptions.map((option) => (
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
                selectedOptions.has(option) ? 'text-black' : 'text-green-500'
              }`} />
            </div>
          </button>
        ))}
      </div>

      <div className="">
        <Button 
          className="w-full bg-green-500 hover:bg-green-600" 
          size="lg"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
export const Route = createLazyFileRoute('/video-detail/video-feedback/')({
  component: VideoFeedbackScreen
})