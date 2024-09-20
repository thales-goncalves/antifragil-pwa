import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/programs/')({
  component: () => <div>Hello /program/!</div>
})