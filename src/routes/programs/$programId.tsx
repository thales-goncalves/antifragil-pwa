import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/programs/$programId')({
  component: () => <div>Hello /programs/$program-id!</div>,
})
