import { sanityClient } from '@/libs/sanity/client'
import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'

export const Videos = () => {
  const [videos, setVideos] = useState<unknown[]>()
  useEffect(() => {
    sanityClient
      .fetch(`* [ _type == "video" ]`)
      .then((response) => setVideos(response))
  }, [])

  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Videos</h3>
          <Link to="/" className="text-green-500">
            See all
          </Link>
        </div>
        <Carousel
          opts={{
            align: 'start',
          }}
        >
          <CarouselContent>
            {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-auto border border-yellow-500"
              >
                <div
                  className={`h-[160px] w-[260px] rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-300`}
                ></div>
                {/* <iframe
                rel="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                src={video.youtube_url}
              /> */}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Categories</h3>
          <Link to="/" className="text-green-500">
            See all
          </Link>
        </div>
        <Carousel
          opts={{
            align: 'start',
          }}
        >
          <CarouselContent>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-auto border border-yellow-500"
              >
                <div
                  className={`h-[160px] w-[260px] rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-300`}
                ></div>
                {/* <iframe
                rel="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                src={video.youtube_url}
              /> */}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Programs</h3>
          <Link to="/" className="text-green-500">
            See all
          </Link>
        </div>
        <Carousel
          opts={{
            align: 'start',
          }}
        >
          <CarouselContent>
            {videos?.map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-auto border border-yellow-500"
              >
                <div
                  className={`h-[160px] w-[260px] rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-300`}
                ></div>
                {/* <iframe
                rel="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                src={video.youtube_url}
              /> */}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}
