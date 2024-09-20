import { sanityClient } from '@/libs/sanity/client'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react'
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default'
import '@vidstack/react/player/styles/default/layouts/audio.css'
import '@vidstack/react/player/styles/default/layouts/video.css'
import '@vidstack/react/player/styles/default/theme.css'

const fetchVideoInfo = async (videoId: string) => {
  return sanityClient.fetch(
    `*[_type == "video" && slug.current == "${videoId}"][0]{
      title,
      youtube_url
    }`,
  )
}

export const Route = createFileRoute('/videos/$videoId')({
  loader: async ({ params: { videoId } }) => await fetchVideoInfo(videoId),
  component: () => <VideoScreen />,
})

const VideoScreen = () => {
  const { videoId } = Route.useParams()

  const { data, error, isLoading } = useQuery({
    queryKey: ['video-info'],
    queryFn: () => fetchVideoInfo(videoId),
  })

  console.log(data)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading video</div>

  const { title, youtube_url } = data

  return (
    <div>
      <MediaPlayer
        src={`youtube/${youtube_url}`}
        viewType="video"
        streamType="on-demand"
        logLevel="warn"
        crossOrigin
        playsInline
        title={title}
      >
        <MediaProvider>
          <Poster className="vds-poster" />
        </MediaProvider>
        <DefaultVideoLayout
          thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
          icons={defaultLayoutIcons}
        />
      </MediaPlayer>
    </div>
  )
}
