import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/collections/')({
  component: () => <div>Hello /collections/!</div>,
})
