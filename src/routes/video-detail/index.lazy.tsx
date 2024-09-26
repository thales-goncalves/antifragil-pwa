import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { createLazyFileRoute } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'

interface VideoDetails {
  title: string;
  categories: string[];
  description: string;
  image: string;
}

const videoData: VideoDetails = {
  title: "How to sleep better",
  categories: ["Routine", "Nutrition"],
  description: "Lorem ipsum dolor sit amet consectetur. Blandit vitae aliquet eros laoreet quam sollicitudin. Duis non eu habitant id vel nisi eget amet tellus...",
  image: "https://workoutbrands.com/cdn/shop/articles/crossfit-together.png"
}

const VideoDetailPage = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full min-h-[90dvh] flex flex-col">
      {/* Image Section */}
      <div
        className="relative h-[320px] bg-cover bg-center"
        style={{ backgroundImage: `url(${videoData.image})` }}
      >
        <button className="absolute top-4 left-4 p-2 bg-black bg-opacity-50 rounded-full">
          <ArrowLeft size={24} />
        </button>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between p-6 flex-grow">
        <div>
          <h1 className="text-2xl font-bold mb-4">{videoData.title}</h1>
          <div className="flex gap-2 mb-6">
            {videoData.categories.map((category, index) => (
              <span key={index} className="px-3 py-1 bg-gray-800 rounded text-sm">
                {category}
              </span>
            ))}
          </div>
          <Separator orientation='horizontal' className='mb-6'/>
          <p className="text-gray-400">
            {expanded ? videoData.description : `${videoData.description.slice(0, 100)}...`}
            <button 
              className="text-green-500 ml-1"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Read less' : 'Read more'}
            </button>
          </p>
        </div>

        {/* Bottom Button */}
        <div className="m-4">
          <Button className="w-full bg-green-500">Complete Session</Button>
        </div>
      </div>
    </div>
  );
};
  

export const Route = createLazyFileRoute('/video-detail/')({
  component: VideoDetailPage
})