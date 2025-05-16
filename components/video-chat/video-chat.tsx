"use client"

import { useState, useEffect } from "react"
import { VideoFeeds } from "@/components/video-chat/video-feeds"
import { ChatSidebar } from "@/components/video-chat/chat-sidebar"
import { ControlBar } from "@/components/video-chat/control-bar"
import { SessionTimer } from "@/components/video-chat/session-timer"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

interface VideoChatProps {
  sessionInfo: {
    title: string
    participant: string
    scheduledTime: string
    duration: string
  }
  onLeaveSession: () => void
}

export function VideoChat({ sessionInfo, onLeaveSession }: VideoChatProps) {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isCameraOff, setIsCameraOff] = useState(false)
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const [areCaptionsOn, setAreCaptionsOn] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("English")

  // Toggle chat sidebar
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }

  // Handle control actions
  const handleMuteToggle = () => {
    setIsMuted(!isMuted)
  }

  const handleCameraToggle = () => {
    setIsCameraOff(!isCameraOff)
  }

  const handleScreenShareToggle = () => {
    setIsScreenSharing(!isScreenSharing)
  }

  const handleCaptionsToggle = () => {
    setAreCaptionsOn(!areCaptionsOn)
  }

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language)
  }

  // In a real app, we would set up WebRTC connections here
  useEffect(() => {
    // Initialize video chat connection
    console.log("Setting up video chat connection...")

    // Cleanup function
    return () => {
      console.log("Cleaning up video chat connection...")
    }
  }, [])

  return (
    <div className="flex h-full w-full flex-col bg-gray-900">
      {/* Session header */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-white">
        <div>
          <h1 className="text-lg font-semibold">{sessionInfo.title}</h1>
          <p className="text-sm text-gray-300">With {sessionInfo.participant}</p>
        </div>
        <SessionTimer duration="45:00" />
      </div>

      {/* Main content area */}
      <div className="relative flex flex-1 overflow-hidden">
        {/* Video feeds */}
        <div className={`relative flex-1 transition-all duration-300 ${isChatOpen ? "mr-[320px] lg:mr-[400px]" : ""}`}>
          <VideoFeeds
            isCameraOff={isCameraOff}
            isScreenSharing={isScreenSharing}
            areCaptionsOn={areCaptionsOn}
            selectedLanguage={selectedLanguage}
          />
        </div>

        {/* Chat sidebar */}
        <div
          className={`absolute right-0 top-0 h-full w-[320px] transform bg-white transition-transform duration-300 lg:w-[400px] ${
            isChatOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ChatSidebar onClose={toggleChat} />
        </div>

        {/* Chat toggle button (visible when chat is closed) */}
        {!isChatOpen && (
          <Button
            onClick={toggleChat}
            variant="secondary"
            size="sm"
            className="absolute right-4 top-4 z-10 flex items-center gap-1 bg-white/90 shadow-md backdrop-blur-sm"
          >
            <span>Chat</span>
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Control bar */}
      <ControlBar
        isMuted={isMuted}
        isCameraOff={isCameraOff}
        isScreenSharing={isScreenSharing}
        areCaptionsOn={areCaptionsOn}
        selectedLanguage={selectedLanguage}
        onMuteToggle={handleMuteToggle}
        onCameraToggle={handleCameraToggle}
        onScreenShareToggle={handleScreenShareToggle}
        onCaptionsToggle={handleCaptionsToggle}
        onLanguageChange={handleLanguageChange}
        onLeaveSession={onLeaveSession}
      />
    </div>
  )
}
