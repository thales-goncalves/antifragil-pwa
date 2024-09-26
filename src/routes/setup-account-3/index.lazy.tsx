import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input'

function SetupAccount() {
  const navigate = useNavigate()

  // const handleNext = () => {
  //   console.log("Selected options:", Array.from(selectedOptions))
  // }

  return (
    <div className="text-white min-h-[90dvh] w-full max-w-md mx-auto flex flex-col p-6">
      {/* Nav Header */}
        <div className="flex items-center flex-row mb-6 justify-between w-full">  
          <Button variant="ghost" size="icon" className=' bg-gray-900 rounded-full' onClick={() => navigate({ to: '/setup-account-2' })}>
            <ArrowLeft className="h-6 w-6 text-gray-300" />
          </Button>
          <h1 className="text-xl font-semibold ml-4"></h1>
          <div className="min-w-10">
          </div>
        </div>
      {/* Nav Header */}
      {/* Feedback Options */}
      <div className="flex flex-col flex-1 space-y-4 items-center justify-center">
        <p className='text-[1.3rem]'>Tell us about yourself</p>
        <p className='text-gray-600 text-center'>We’d like the following information to provide more accurate results</p>
        <Input placeholder='Gender'/>  
        <Input placeholder='Birthday'/>
      </div>
      <div className="">
        <Button 
          className="w-full bg-green-500 hover:bg-green-600" 
          size="lg"
          onClick={() => {}}  
          disabled
        >
          Finish
        </Button>
      </div>
    </div>
  )
}

export const Route = createLazyFileRoute('/setup-account-3/')({
  component: SetupAccount
})