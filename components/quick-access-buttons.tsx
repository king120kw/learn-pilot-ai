"use client"

import Link from "next/link"
import { MessageSquare, BookOpen, Video } from "lucide-react"
import { motion } from "framer-motion"

export function QuickAccessButtons() {
  return (
    <div className="rounded-2xl bg-white/90 p-8 shadow-lg border border-gray-100">
      <h2 className="mb-6 text-xl font-bold text-gray-900 tracking-tight">Quick Access</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Link
          href="/dashboard/mock-interviews"
          className="flex flex-col items-center rounded-xl border border-gray-100 p-5 text-center transition-all hover:border-blue-300 hover:bg-blue-50/60 group shadow-sm"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-600 transition-colors shadow-md">
            <MessageSquare className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
          </div>
          <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">Mock Interview</h3>
          <p className="mt-1 text-xs text-gray-500">Practice for your next interview</p>
        </Link>

        <Link
          href="/dashboard/study"
          className="flex flex-col items-center rounded-xl border border-gray-100 p-5 text-center transition-all hover:border-blue-300 hover:bg-blue-50/60 group shadow-sm"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-600 transition-colors shadow-md">
            <BookOpen className="h-7 w-7 text-green-600 group-hover:text-white transition-colors" />
          </div>
          <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-green-700 transition-colors">Study Buddy</h3>
          <p className="mt-1 text-xs text-gray-500">Get personalized learning help</p>
        </Link>

        <Link
          href="/dashboard/video-meeting"
          className="flex flex-col items-center rounded-xl border border-gray-100 p-5 text-center transition-all hover:border-blue-300 hover:bg-blue-50/60 group shadow-sm"
        >
          <motion.div
            initial={{ scale: 1, boxShadow: "0 2px 8px rgba(0,0,0,0.10)" }}
            animate={{ scale: [1, 1.08, 1], boxShadow: [
              "0 2px 8px rgba(0,0,0,0.10)",
              "0 6px 18px rgba(0, 132, 255, 0.18)",
              "0 2px 8px rgba(0,0,0,0.10)"
            ] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-600 transition-colors shadow-md"
          >
            <Video className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors" />
          </motion.div>
          <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">Video Meeting</h3>
          <p className="mt-1 text-xs text-gray-500">Host or join live sessions</p>
        </Link>
      </div>
    </div>
  )
}
