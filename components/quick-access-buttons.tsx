import Link from "next/link"
import { MessageSquare, BookOpen, Video } from "lucide-react"

export function QuickAccessButtons() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">Quick Access</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Link
          href="/dashboard/mock-interviews"
          className="flex flex-col items-center rounded-lg border border-gray-200 p-4 text-center transition-all hover:border-blue-200 hover:bg-blue-50"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <MessageSquare className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="mt-3 font-medium text-gray-900">Mock Interview</h3>
          <p className="mt-1 text-xs text-gray-500">Practice for your next interview</p>
        </Link>

        <Link
          href="/dashboard/study"
          className="flex flex-col items-center rounded-lg border border-gray-200 p-4 text-center transition-all hover:border-blue-200 hover:bg-blue-50"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <BookOpen className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="mt-3 font-medium text-gray-900">Study Buddy</h3>
          <p className="mt-1 text-xs text-gray-500">Get personalized learning help</p>
        </Link>

        <Link
          href="/dashboard/video-chat"
          className="flex flex-col items-center rounded-lg border border-gray-200 p-4 text-center transition-all hover:border-blue-200 hover:bg-blue-50"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <Video className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="mt-3 font-medium text-gray-900">Video Chat</h3>
          <p className="mt-1 text-xs text-gray-500">Connect with tutors and peers</p>
        </Link>
      </div>
    </div>
  )
}
