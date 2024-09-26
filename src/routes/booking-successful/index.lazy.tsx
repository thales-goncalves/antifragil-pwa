import { Button } from '@/components/ui/button';
import { createLazyFileRoute } from '@tanstack/react-router'

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function SuccessPage() {
  return (
    <div className="flex flex-col justify-center items-center h-[90dvh]  text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full bg-green-500 p-4 mb-4">
          <CheckIcon />
        </div>
        <p className="text-lg">Great work!</p>
      </div>
      {/* Button to go back to Homepage */}
      <div className="absolute bottom-20 w-full px-6 mb-6">
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
          Back to Homepage
        </Button>
      </div>
    </div>
  );
}


export const Route = createLazyFileRoute('/booking-successful/')({
  component: SuccessPage
})