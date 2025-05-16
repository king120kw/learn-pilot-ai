import { Clock, CheckCircle, BookOpen, MessageSquare, Video } from "lucide-react"

export function RecentActivities() {
  const activities = [
    {
      id: 1,
      type: "study",
      title: "Completed JavaScript Basics",
      time: "Today, 10:30 AM",
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
    },
    {
      id: 2,
      type: "flashcard",
      title: "Reviewed React Hooks flashcards",
      time: "Today, 9:15 AM",
      icon: <BookOpen className="h-5 w-5 text-blue-500" />,
    },
    {
      id: 3,
      type: "interview",
      title: "Mock Interview: Frontend Development",
      time: "Yesterday, 2:00 PM",
      icon: <MessageSquare className="h-5 w-5 text-purple-500" />,
    },
    {
      id: 4,
      type: "video",
      title: "Video session with Tutor Sarah",
      time: "Yesterday, 11:30 AM",
      icon: <Video className="h-5 w-5 text-red-500" />,
    },
  ]

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">View All</button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start rounded-lg border border-gray-100 p-3 hover:bg-gray-50">
            <div className="mr-4 mt-0.5">{activity.icon}</div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{activity.title}</h3>
              <div className="mt-1 flex items-center text-sm text-gray-500">
                <Clock className="mr-1 h-3.5 w-3.5" />
                {activity.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
