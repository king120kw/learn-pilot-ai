import { Calendar, Clock } from "lucide-react"

export function UpcomingSessions() {
  const sessions = [
    {
      id: 1,
      title: "Mock Interview: System Design",
      date: "Today",
      time: "3:00 PM - 4:00 PM",
      type: "interview",
    },
    {
      id: 2,
      title: "Study Group: React Hooks",
      date: "Tomorrow",
      time: "10:00 AM - 11:30 AM",
      type: "group",
    },
    {
      id: 3,
      title: "Tutoring: Advanced JavaScript",
      date: "May 18, 2025",
      time: "2:00 PM - 3:00 PM",
      type: "tutoring",
    },
  ]

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Upcoming Sessions</h2>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Schedule New</button>
      </div>

      <div className="space-y-4">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="rounded-lg border border-gray-100 p-4 transition-all hover:border-blue-100 hover:shadow-sm"
          >
            <h3 className="font-medium text-gray-900">{session.title}</h3>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <Calendar className="mr-1.5 h-4 w-4 text-gray-400" />
              {session.date}
            </div>
            <div className="mt-1 flex items-center text-sm text-gray-500">
              <Clock className="mr-1.5 h-4 w-4 text-gray-400" />
              {session.time}
            </div>
            <div className="mt-3 flex space-x-2">
              <button className="flex-1 rounded-lg bg-blue-600 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                Join
              </button>
              <button className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                Reschedule
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
