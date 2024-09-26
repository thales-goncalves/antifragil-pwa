import { Button } from '@/components/ui/button';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react';

export default function About() {
  const navigate = useNavigate()

  const menuItems = [
    "Developer",
    "Partner",
    "Accessibility",
    "Terms of Use",
    "Feedback",
    "Rate Us",
    "Visit Our Website",
    "Follow Us on Social Media",
  ];

  return (
    <div className="min-h-[90dvh] p-6 text-white">
      {/* Nav Header */}
        <div className="flex items-center flex-row mb-6 justify-between w-full">
          <Button variant="ghost" size="icon" className=' bg-gray-900 rounded-full' onClick={() => navigate({ to: '/' })}>
            <ChevronLeft className="h-6 w-6 text-gray-300" />
          </Button>
          <h1 className="text-xl font-semibold ml-4">About App</h1>
          <div className="min-w-10"></div>
        </div>
      {/* Nav Header */}

      {/* Menu List */}
      <div className="px-4">
        <ul className="divide-y divide-gray-700">
          {menuItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center py-4">
              <span>{item}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const Route = createLazyFileRoute('/about/')({
  component: About
})