"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, Video, Mic, Settings, CheckCircle, AlertCircle } from "lucide-react"

interface WaitingRoomProps {
  sessionInfo: {
    title: string
    participant: string
    scheduledTime: string
    duration: string
  }
  onJoinSession: () => void
}

export function WaitingRoom({ sessionInfo, onJoinSession }: WaitingRoomProps) {
  const [isCameraReady, setIsCameraReady] = useState(false)
  const [isMicReady, setIsMicReady] = useState(false)
  const [isNetworkReady, setIsNetworkReady] = useState(false)
  const [activeTab, setActiveTab] = useState("checklist")
  const videoRef = useRef<HTMLVideoElement>(null)

  // Simulate device checks
  useEffect(() => {
    // In a real app, we would check camera, mic, and network here
    const checkDevices = async () => {
      // Simulate camera check
      setTimeout(() => {
        setIsCameraReady(true)
      }, 1500)

      // Simulate mic check
      setTimeout(() => {
        setIsMicReady(true)
      }, 2500)

      // Simulate network check
      setTimeout(() => {
        setIsNetworkReady(true)
      }, 3500)
    }

    checkDevices()

    // In a real app, we would get the user's camera stream
    // For now, we'll just use a placeholder
    if (videoRef.current) {
      videoRef.current.muted = true
    }
  }, [])

  const allChecksComplete = isCameraReady && isMicReady && isNetworkReady

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <Card className="mx-auto w-full max-w-4xl shadow-lg">
        <CardHeader className="bg-blue-600 text-white">
          <CardTitle className="text-2xl">{sessionInfo.title}</CardTitle>
          <CardDescription className="text-blue-100">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {sessionInfo.scheduledTime}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                {sessionInfo.duration}
              </div>
              <div className="flex items-center">
                <Video className="mr-2 h-4 w-4" />
                With {sessionInfo.participant}
              </div>
            </div>
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Video preview */}
            <div className="flex flex-col">
              <h3 className="mb-3 text-lg font-medium">Camera Preview</h3>
              <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-900">
                <video
                  ref={videoRef}
                  className="h-full w-full object-cover"
                  poster="/placeholder.svg?height=360&width=640"
                  autoPlay
                  playsInline
                  muted
                />
                <div className="absolute bottom-3 left-3 rounded bg-black/70 px-2 py-1 text-xs text-white">
                  <div className="flex items-center gap-1">
                    <span>You</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-center gap-4">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Button>
                <div className="flex items-center space-x-2">
                  <Switch id="mute-toggle" />
                  <Label htmlFor="mute-toggle">Mute microphone</Label>
                </div>
              </div>
            </div>

            {/* Tabs for checklist and tips */}
            <div>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="checklist">Pre-Join Checklist</TabsTrigger>
                  <TabsTrigger value="tips">Session Tips</TabsTrigger>
                </TabsList>

                <TabsContent value="checklist" className="mt-4">
                  <div className="space-y-4 rounded-lg border p-4">
                    <h3 className="text-lg font-medium">System Check</h3>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Video className="mr-2 h-5 w-5 text-gray-600" />
                          <span>Camera</span>
                        </div>
                        {isCameraReady ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <div className="flex items-center">
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
                            <span className="text-sm text-gray-500">Checking...</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Mic className="mr-2 h-5 w-5 text-gray-600" />
                          <span>Microphone</span>
                        </div>
                        {isMicReady ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <div className="flex items-center">
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
                            <span className="text-sm text-gray-500">Checking...</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 text-gray-600"
                          >
                            <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                            <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                            <circle cx="12" cy="20" r="1" />
                          </svg>
                          <span>Network Connection</span>
                        </div>
                        {isNetworkReady ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <div className="flex items-center">
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
                            <span className="text-sm text-gray-500">Checking...</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {allChecksComplete && (
                      <div className="mt-4 rounded-lg bg-green-50 p-3 text-green-800">
                        <div className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5" />
                          <span className="font-medium">All systems ready!</span>
                        </div>
                        <p className="mt-1 text-sm">You're all set to join the session.</p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="tips" className="mt-4">
                  <div className="space-y-4 rounded-lg border p-4">
                    <h3 className="text-lg font-medium">Prepare for a Great Session</h3>

                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium">Find a quiet environment</p>
                          <p className="text-sm text-gray-600">
                            Minimize background noise and distractions for better focus.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium">Have your materials ready</p>
                          <p className="text-sm text-gray-600">
                            Prepare any notes, questions, or resources you want to discuss.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium">Test screen sharing</p>
                          <p className="text-sm text-gray-600">
                            If you plan to share your screen, have the content ready to show.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium">Use headphones if possible</p>
                          <p className="text-sm text-gray-600">Headphones improve audio quality and reduce echo.</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <AlertCircle className="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                        <div>
                          <p className="font-medium">Session Topic: {sessionInfo.title}</p>
                          <p className="text-sm text-gray-600">
                            Review your questions about JavaScript promises and async/await.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between border-t bg-gray-50 px-6 py-4">
          <Button variant="outline">Cancel</Button>
          <Button onClick={onJoinSession} disabled={!allChecksComplete} className="bg-blue-600 hover:bg-blue-700">
            Join Session
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
