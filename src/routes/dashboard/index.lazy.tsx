import { createLazyFileRoute } from '@tanstack/react-router'

import { Header } from '@/components/header'
import { LiveBanner } from '@/components/live-banner'
import { Videos } from '@/components/videos'

export const Route = createLazyFileRoute('/dashboard/')({
  component: () => <DashboardScreen />,
})

export default function DashboardScreen() {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <LiveBanner />
      <Videos />
    </div>
  )
}
