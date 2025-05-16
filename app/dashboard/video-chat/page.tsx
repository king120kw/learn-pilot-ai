"use client"

import { useState } from "react"
import { VideoChat } from "@/components/video-chat/video-chat"
import { WaitingRoom } from "@/components/video-chat/waiting-room"

export default function VideoChatPage() {
  const [isInSession, setIsInSession] = useState(false)
  const [sessionInfo, setSessionInfo] = useState({
    title: "Advanced JavaScript Tutoring",
    participant: "Sarah Johnson",
    scheduledTime: "May 15, 2025 • 11:00 AM",
    duration: "45 minutes",
  })

  const handleJoinSession = () => {
    setIsInSession(true)
  }

  const handleLeaveSession = () => {
    if (confirm("Are you sure you want to leave this session?")) {
      setIsInSession(false)
    }
  }

  return (
    <div className="h-screen w-full bg-gray-50">
      {isInSession ? (
        <VideoChat sessionInfo={sessionInfo} onLeaveSession={handleLeaveSession} />
      ) : (
        <WaitingRoom sessionInfo={sessionInfo} onJoinSession={handleJoinSession} />
      )}
    </div>
  )
}
