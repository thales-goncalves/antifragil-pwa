import { createLazyFileRoute } from '@tanstack/react-router'

import { Header } from '@/components/header.tsx'
import { LiveBanner } from '@/components/live-banner.tsx'
import { Videos } from '@/components/videos.tsx'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className='flex flex-col gap-8'>
      <Header />
      <LiveBanner />
      <Videos />
    </div>
  )
}
