import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Bell, Calendar, Clock, Play } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const videoData = [
  { title: "Stretch", date: "23/08", category: "Mobility" },
  { title: "Meditation", date: "24/08", category: "Mindfulness" },
  { title: "HIIT", date: "25/08", category: "Cardio" },
]

const collectionData = [
  { title: "Nutrition Tips", duration: "120 min", color: "from-purple-600 to-purple-900" },
  { title: "Routine", duration: "120 min", color: "from-blue-400 to-blue-600" },
]

const categories = ["All Type", "Habits", "Routine", "Nutrition"]

function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("All Type")

  return (
    <div className="text-white min-h-[90dvh] w-full max-w-md mx-auto pt-6">
      {/* Welcome Section */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-gray-400">Friday, 20 May</p>
            <h1 className="text-2xl font-bold">Welcome User_NAME</h1>
          </div>
          <Button variant="ghost" size="icon" className="text-white">
            <Bell className="h-6 w-6" />
          </Button>
        </div>

        {/* Today's Live */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <p className="text-gray-400 text-sm mb-1">Today's live</p>
          <h2 className="text-lg font-semibold mb-1">How to sleep better</h2>
          <p className="text-gray-400 text-sm flex items-center">
            <Clock className="h-4 w-4 mr-1" /> 9:30 pm
          </p>
        </div>
      </div>

      {/* Videos Section */}
      <div className="mb-6 px-6">
        <div className="flex justify-between items-center px-4 mb-4">
          <h2 className="text-lg font-semibold">Videos</h2>
          <Button variant="link" className="text-green-500 p-0">See All</Button>
        </div>
        <Carousel className="w-full max-w-md">
          <CarouselContent>
            {videoData.map((video, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-green-800 rounded-lg p-4">
                  <h3 className="font-semibold mb-1">{video.title}</h3>
                  <p className="text-sm text-gray-300 mb-2 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" /> {video.date} • {video.category}
                  </p>
                  <Button size="sm" className="bg-green-500 text-black hover:bg-green-600">
                    <Play className="h-4 w-4 mr-2" /> Watch now
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Collections Section */}
      <div className="px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Collections</h2>
          <Button variant="link" className="text-green-500 p-0">See All</Button>
        </div>
        <div className="flex space-x-2 mb-4 overflow-x-auto">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className={`cursor-pointer ${
                activeCategory === category ? 'bg-green-500 text-black' : 'bg-gray-800 text-white'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {collectionData.map((collection, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${collection.color} rounded-lg p-4 aspect-square flex flex-col justify-end`}
            >
              <h3 className="font-semibold">{collection.title}</h3>
              <p className="text-sm text-gray-300 flex items-center">
                <Clock className="h-4 w-4 mr-1" /> {collection.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const Route = createLazyFileRoute('/home-v2/')({
  component: HomeScreen
})