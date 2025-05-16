"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Mic, MicOff } from "lucide-react"

interface VideoFeedsProps {
  isCameraOff: boolean
  isScreenSharing: boolean
  areCaptionsOn: boolean
  selectedLanguage: string
}

export function VideoFeeds({ isCameraOff, isScreenSharing, areCaptionsOn, selectedLanguage }: VideoFeedsProps) {
  const mainVideoRef = useRef<HTMLVideoElement>(null)
  const selfVideoRef = useRef<HTMLVideoElement>(null)

  // In a real app, we would connect to WebRTC streams here
  useEffect(() => {
    // Simulate video streams with placeholder videos
    if (mainVideoRef.current) {
      mainVideoRef.current.muted = true
      // In a real app, we would attach the peer's video stream here
    }

    if (selfVideoRef.current) {
      selfVideoRef.current.muted = true
      // In a real app, we would attach the user's camera stream here
    }
  }, [])

  return (
    <div className="relative h-full w-full bg-gray-900">
      {/* Main video (peer) */}
      <div className="h-full w-full">
        {isScreenSharing ? (
          // Screen sharing view
          <div className="flex h-full w-full items-center justify-center bg-gray-800">
            <div className="rounded-lg bg-white p-8 text-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Screen share"
                width={600}
                height={400}
                className="mx-auto rounded-md"
              />
              <p className="mt-4 text-gray-700">Screen sharing is active</p>
            </div>
          </div>
        ) : isCameraOff ? (
          // Camera off view for peer
          <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-blue-600 text-4xl font-semibold text-white">
              SJ
            </div>
            <h3 className="mt-4 text-xl font-medium text-white">Sarah Johnson</h3>
            <p className="text-gray-300">Camera is turned off</p>
          </div>
        ) : (
          // Normal video view
          <video
            ref={mainVideoRef}
            className="h-full w-full object-cover"
            poster="/placeholder.svg?height=720&width=1280"
            autoPlay
            playsInline
          />
        )}

        {/* Captions overlay */}
        {areCaptionsOn && (
          <div className="absolute bottom-32 left-0 right-0 mx-auto w-3/4 rounded-lg bg-black/70 p-3 text-center text-white">
            <p>
              So as I was explaining, the key concept in JavaScript promises is the ability to handle asynchronous
              operations more elegantly.
            </p>
          </div>
        )}

        {/* Peer name and status */}
        <div className="absolute left-4 top-4 rounded-lg bg-black/50 px-3 py-1.5 text-white">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            <span>Sarah Johnson</span>
            <MicOff className="h-4 w-4 text-red-400" />
          </div>
        </div>
      </div>

      {/* Self video (picture-in-picture) */}
      <div className="absolute bottom-4 right-4 h-48 w-64 overflow-hidden rounded-lg border-4 border-gray-900 shadow-lg md:h-36 md:w-48 lg:h-48 lg:w-64">
        {isCameraOff ? (
          // Camera off view for self
          <div className="flex h-full w-full flex-col items-center justify-center bg-gray-800">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-semibold text-white">
              YO
            </div>
            <p className="mt-2 text-xs text-gray-300">Camera off</p>
          </div>
        ) : (
          // Self video
          <video
            ref={selfVideoRef}
            className="h-full w-full object-cover"
            poster="/placeholder.svg?height=180&width=320"
            autoPlay
            playsInline
            muted
          />
        )}

        {/* Self status indicator */}
        <div className="absolute left-2 top-2 rounded bg-black/50 px-2 py-0.5 text-xs text-white">
          <div className="flex items-center gap-1">
            <span>You</span>
            {isCameraOff ? null : <Mic className="h-3 w-3" />}
          </div>
        </div>
      </div>
    </div>
  )
}
