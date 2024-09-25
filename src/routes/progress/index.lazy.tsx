import { useState } from 'react'
import { ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react'
import { createLazyFileRoute } from '@tanstack/react-router'

// Define the type for activities
type Activities = {
    [key: string]: { type: string; duration: string; }[];
};

// Ensure activities is typed correctly
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

function MyProgress() {
    const [view, setView] = useState('Calendar')
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
            <div className="bg-gray-800 mx-4 rounded-lg p-4">
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
            <header className="flex justify-between items-center p-4">
                <ChevronLeft />
                <h1 className="text-lg font-semibold">My Progress</h1>
                <MoreVertical />
            </header>
            {/* View Toggle */}
            <div className="flex justify-center mb-4">
                <div className="bg-gray-800 rounded-full p-1">
                    <button
                        className={`px-4 py-1 rounded-full ${view === 'Daily' ? 'bg-gray-700' : ''}`}
                        onClick={() => setView('Daily')}
                    >
                        Daily
                    </button>
                    <button
                        className={`px-4 py-1 rounded-full ${view === 'Calendar' ? 'bg-gray-700' : ''}`}
                        onClick={() => setView('Calendar')}
                    >
                        Calendar
                    </button>
                </div>
            </div>

            {view === 'Calendar' ? (
                <div className="bg-gray-800 mx-4 rounded-lg p-4">
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
            ) : (
                renderDailyView()
            )}
        </> 
    )
}

export const Route = createLazyFileRoute('/progress/')({
    component: MyProgress
})