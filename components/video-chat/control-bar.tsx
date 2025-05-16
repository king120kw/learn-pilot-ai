"use client"
import { Button } from "@/components/ui/button"
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  ScreenShare,
  ScreenShareIcon as StopScreenShare,
  PhoneOff,
  Subtitles,
  Globe,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface ControlBarProps {
  isMuted: boolean
  isCameraOff: boolean
  isScreenSharing: boolean
  areCaptionsOn: boolean
  selectedLanguage: string
  onMuteToggle: () => void
  onCameraToggle: () => void
  onScreenShareToggle: () => void
  onCaptionsToggle: () => void
  onLanguageChange: (language: string) => void
  onLeaveSession: () => void
}

export function ControlBar({
  isMuted,
  isCameraOff,
  isScreenSharing,
  areCaptionsOn,
  selectedLanguage,
  onMuteToggle,
  onCameraToggle,
  onScreenShareToggle,
  onCaptionsToggle,
  onLanguageChange,
  onLeaveSession,
}: ControlBarProps) {
  const languages = ["English", "Spanish", "French", "German", "Chinese", "Japanese", "Arabic"]

  return (
    <div className="flex items-center justify-center bg-gray-800 px-4 py-3">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
        {/* Mute button */}
        <Button
          onClick={onMuteToggle}
          variant={isMuted ? "destructive" : "secondary"}
          size="icon"
          className="h-10 w-10 rounded-full"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
        </Button>

        {/* Camera button */}
        <Button
          onClick={onCameraToggle}
          variant={isCameraOff ? "destructive" : "secondary"}
          size="icon"
          className="h-10 w-10 rounded-full"
          title={isCameraOff ? "Turn on camera" : "Turn off camera"}
        >
          {isCameraOff ? <VideoOff className="h-5 w-5" /> : <Video className="h-5 w-5" />}
        </Button>

        {/* Screen share button */}
        <Button
          onClick={onScreenShareToggle}
          variant={isScreenSharing ? "destructive" : "secondary"}
          size="icon"
          className="h-10 w-10 rounded-full"
          title={isScreenSharing ? "Stop sharing" : "Share screen"}
        >
          {isScreenSharing ? <StopScreenShare className="h-5 w-5" /> : <ScreenShare className="h-5 w-5" />}
        </Button>

        {/* Captions button */}
        <Button
          onClick={onCaptionsToggle}
          variant={areCaptionsOn ? "default" : "secondary"}
          size="icon"
          className={`h-10 w-10 rounded-full ${areCaptionsOn ? "bg-blue-600 hover:bg-blue-700" : ""}`}
          title={areCaptionsOn ? "Turn off captions" : "Turn on captions"}
        >
          <Subtitles className="h-5 w-5" />
        </Button>

        {/* Language selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" className="h-10 gap-2 rounded-full px-3" title="Select language">
              <Globe className="h-5 w-5" />
              <span className="hidden md:inline">{selectedLanguage}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            {languages.map((language) => (
              <DropdownMenuItem
                key={language}
                onClick={() => onLanguageChange(language)}
                className={language === selectedLanguage ? "bg-blue-50 font-medium text-blue-600" : ""}
              >
                {language}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Leave session button */}
        <Button
          onClick={onLeaveSession}
          variant="destructive"
          className="h-10 gap-2 rounded-full px-4"
          title="Leave session"
        >
          <PhoneOff className="h-5 w-5" />
          <span className="hidden md:inline">Leave</span>
        </Button>
      </div>
    </div>
  )
}
