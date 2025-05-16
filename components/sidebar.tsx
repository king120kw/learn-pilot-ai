import Link from "next/link"
import Image from "next/image"
import { Home, BookOpen, Calendar, MessageSquare, Video, Award, Settings, HelpCircle, LogOut } from "lucide-react"

export function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col border-r border-gray-200 bg-white">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-gray-200 px-6">
        <Link href="/dashboard" className="flex items-center">
          <Image src="/logo.png" alt="LearnPilot Logo" width={32} height={32} className="mr-2" />
          <span className="text-xl font-bold text-blue-600">LearnPilot</span>
        </Link>
      </div>

      {/* User profile */}
      <div className="flex flex-col items-center border-b border-gray-200 py-6">
        <div className="relative h-20 w-20">
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="User Avatar"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-500"></div>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">Alex Johnson</h3>
        <p className="text-sm text-gray-500">Premium Plan</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center rounded-lg bg-blue-50 px-4 py-2.5 text-blue-700 transition-colors hover:bg-blue-100"
            >
              <Home className="mr-3 h-5 w-5" />
              <span className="font-medium">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/study"
              className="flex items-center rounded-lg px-4 py-2.5 text-gray-700 transition-colors hover:bg-gray-100"
            >
              <BookOpen className="mr-3 h-5 w-5" />
              <span className="font-medium">Study Materials</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/schedule"
              className="flex items-center rounded-lg px-4 py-2.5 text-gray-700 transition-colors hover:bg-gray-100"
            >
              <Calendar className="mr-3 h-5 w-5" />
              <span className="font-medium">Schedule</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/mock-interviews"
              className="flex items-center rounded-lg px-4 py-2.5 text-gray-700 transition-colors hover:bg-gray-100"
            >
              <MessageSquare className="mr-3 h-5 w-5" />
              <span className="font-medium">Mock Interviews</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/video-chat"
              className="flex items-center rounded-lg px-4 py-2.5 text-gray-700 transition-colors hover:bg-gray-100"
            >
              <Video className="mr-3 h-5 w-5" />
              <span className="font-medium">Video Chat</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/achievements"
              className="flex items-center rounded-lg px-4 py-2.5 text-gray-700 transition-colors hover:bg-gray-100"
            >
              <Award className="mr-3 h-5 w-5" />
              <span className="font-medium">Achievements</span>
            </Link>
          </li>
        </ul>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <ul className="space-y-1">
            <li>
              <Link
                href="/dashboard/settings"
                className="flex items-center rounded-lg px-4 py-2.5 text-gray-700 transition-colors hover:bg-gray-100"
              >
                <Settings className="mr-3 h-5 w-5" />
                <span className="font-medium">Settings</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/help"
                className="flex items-center rounded-lg px-4 py-2.5 text-gray-700 transition-colors hover:bg-gray-100"
              >
                <HelpCircle className="mr-3 h-5 w-5" />
                <span className="font-medium">Help & Support</span>
              </Link>
            </li>
            <li>
              <Link
                href="/logout"
                className="flex items-center rounded-lg px-4 py-2.5 text-gray-700 transition-colors hover:bg-gray-100"
              >
                <LogOut className="mr-3 h-5 w-5" />
                <span className="font-medium">Log Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
