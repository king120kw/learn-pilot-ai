"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

interface SessionTimerProps {
  duration: string
}

export function SessionTimer({ duration }: SessionTimerProps) {
  const [timeElapsed, setTimeElapsed] = useState("00:00")
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    const startTime = Date.now()
    let intervalId: NodeJS.Timeout

    if (isRunning) {
      intervalId = setInterval(() => {
        const elapsedMs = Date.now() - startTime
        const minutes = Math.floor(elapsedMs / 60000)
        const seconds = Math.floor((elapsedMs % 60000) / 1000)

        setTimeElapsed(`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`)
      }, 1000)
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [isRunning])

  return (
    <div className="flex items-center rounded-full bg-gray-700 px-3 py-1 text-sm text-white">
      <Clock className="mr-2 h-4 w-4" />
      <span>
        {timeElapsed} / {duration}
      </span>
    </div>
  )
}
