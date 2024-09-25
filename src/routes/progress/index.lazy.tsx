import React, { useState } from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { ChevronLeft, ChevronRight, MoreVertical, Flame, Weight, FootprintsIcon, Droplet, Moon } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Types
type MockData = {
  calories: number;
  weight: number;
  steps: number;
  water: number;
  sleep: number;
};

type Activity = {
  type: string;
  duration: string;
};

type Activities = {
  [key: string]: Activity[];
};

// Mock data
const mockData: MockData = {
  calories: 1372,
  weight: 73.8,
  steps: 72,
  water: 7,
  sleep: 8
}

const activities: Activities = {
  '2024-12-07': [{ type: 'Running', duration: '30 min' }],
  '2024-12-13': [{ type: 'Cycling', duration: '45 min' }],
  '2024-12-14': [{ type: 'Crossfit', duration: '1 hour' }],
  '2024-12-21': [{ type: 'Swimming', duration: '40 min' }],
  '2024-12-22': [{ type: 'Yoga', duration: '1 hour' }],
  '2024-12-23': [{ type: 'Running', duration: '45 min' }],
  '2024-12-24': [{ type: 'Cycling', duration: '1 hour' }],
  '2024-12-26': [{ type: 'Crossfit', duration: '45 min' }],
  '2024-12-27': [{ type: 'Swimming', duration: '30 min' }],
  '2024-12-28': [{ type: 'Yoga', duration: '1 hour' }, { type: 'Running', duration: '30 min' }],
}

const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

// Components
const ProgressCircle: React.FC<{ value: number; max: number; size?: number }> = ({ value, max, size = 120 }) => {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / max) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        stroke="#2F3336"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        stroke="#22C55E"
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        fill="white"
        className="text-2xl font-bold"
        transform={`rotate(90 ${size / 2} ${size / 2})`}
      >
        {value}
      </text>
    </svg>
  )
}

const MetricCard: React.FC<{
  icon: React.ElementType;
  title: string;
  value: number | string;
  unit: string;
  hasThisWeek?: boolean;
  hasDetail?: boolean;
}> = ({ icon: Icon, title, value, unit, hasThisWeek = false, hasDetail = false }) => (
  <div className="bg-gray-800 rounded-xl p-4 flex flex-col">
    <div className="flex items-center mb-2">
      <Icon className="text-green-500 mr-2" size={20} />
      <span className="text-gray-400 text-sm">{title}</span>
    </div>
    <div className="text-2xl font-bold mb-2">
      {value} <span className="text-sm font-normal text-gray-400">{unit}</span>
    </div>
    <div className="flex justify-between text-sm text-gray-400">
      {hasThisWeek && <span>This week &gt;</span>}
      {hasDetail && <span>Detail &gt;</span>}
    </div>
  </div>
)

const DailyView: React.FC = () => (
  <div className="grid grid-cols-2 gap-4">
    <MetricCard icon={Flame} title="Calories" value={mockData.calories} unit="kcal" hasThisWeek />
    <MetricCard icon={Weight} title="Weight" value={mockData.weight} unit="kg" hasThisWeek />
    
    <div className="bg-gray-800 rounded-xl p-4 flex flex-col items-center">
      <div className="flex items-center mb-2">
        <FootprintsIcon className="text-green-500 mr-2" size={20} />
        <span className="text-gray-400 text-sm">Step (km)</span>
      </div>
      <ProgressCircle value={mockData.steps} max={100} />
      <div className="mt-2 text-sm text-gray-400">Detail &gt;</div>
    </div>
    
    <div className="bg-gray-800 rounded-xl p-4 flex flex-col items-center">
      <div className="flex items-center mb-2">
        <Droplet className="text-green-500 mr-2" size={20} />
        <span className="text-gray-400 text-sm">Water (cup)</span>
      </div>
      <ProgressCircle value={mockData.water} max={10} />
      <div className="mt-2 text-sm text-gray-400">Detail &gt;</div>
    </div>
    
    <MetricCard icon={Moon} title="Sleep" value={mockData.sleep} unit="hours" hasThisWeek />
  </div>
)

const CalendarView: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 11, 28)) // December 28, 2024

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const renderCalendar = () => {
    const year = selectedDate.getFullYear()
    const month = selectedDate.getMonth()
    const daysInMonth = getDaysInMonth(year, month)
    const firstDay = getFirstDayOfMonth(year, month)
    const days = []

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="aspect-square"></div>)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
      const hasActivity = activities[date]
      days.push(
        <div
          key={day}
          onClick={() => setSelectedDate(new Date(year, month, day))}
          className={`aspect-square flex items-center justify-center text-sm cursor-pointer
            ${hasActivity ? 'bg-green-800' : ''}
            ${selectedDate.getDate() === day ? 'bg-green-500 rounded-full' : ''}
          `}
        >
          {day}
        </div>
      )
    }

    return days
  }

  const renderDailyView = () => {
    const date = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`
    const dayActivities = activities[date] || []

    return (
      <div className="bg-gray-800 mx-4 rounded-lg p-4 mt-4">
        <h2 className="text-lg font-semibold mb-4">Activities for {selectedDate.toDateString()}</h2>
        {dayActivities.length > 0 ? (
          dayActivities.map((activity, index) => (
            <div key={index} className="mb-2 p-2 bg-gray-700 rounded">
              <p className="font-medium">{activity.type}</p>
              <p className="text-sm text-gray-400">Duration: {activity.duration}</p>
            </div>
          ))
        ) : (
          <p>No activities recorded for this day.</p>
        )}
      </div>
    )
  }

  return (
    <>
      <div className="bg-gray-800 mx-4 rounded-lg ">
        <div className="flex justify-between items-center mb-4">
          <ChevronLeft className="text-gray-500" onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))} />
          <span>{selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
          <ChevronRight className="text-gray-500" onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))} />
        </div>
        <div className="grid grid-cols-7 gap-2 text-center">
          {daysOfWeek.map(day => (
            <div key={day} className="text-xs text-gray-500">{day}</div>
          ))}
          {renderCalendar()}
        </div>
      </div>
      {renderDailyView()}
    </>
  )
}

function MyProgress() {
  return (
    <div className="min-h-screen text-white">
      <header className="flex justify-between items-center mb-6">
        <ChevronLeft />
        <h1 className="text-lg font-semibold">My Progress</h1>
        <MoreVertical />
      </header>

      <Tabs defaultValue="daily" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>
        <TabsContent value="daily">
          <DailyView />
        </TabsContent>
        <TabsContent value="calendar">
          <CalendarView />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export const Route = createLazyFileRoute('/progress/')({
  component: MyProgress
})