"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Pause, Play, StopCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface InterviewSessionProps {
  topic: string
  difficulty: string
  questions: string[]
  onEndInterview: (answers: any[], duration: number) => void
}

export function InterviewSession({ topic, difficulty, questions, onEndInterview }: InterviewSessionProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isRecording, setIsRecording] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [answers, setAnswers] = useState<any[]>([])
  const [realtimeFeedback, setRealtimeFeedback] = useState("")
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Start timer when component mounts
  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (isRecording && !isPaused) {
        setElapsedTime((prev) => prev + 1)
      }
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isRecording, isPaused])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const startRecording = () => {
    setIsRecording(true)
    setIsPaused(false)
    // In a real app, this would start actual audio recording
  }

  const pauseRecording = () => {
    setIsPaused(true)
    // In a real app, this would pause actual audio recording
  }

  const resumeRecording = () => {
    setIsPaused(false)
    // In a real app, this would resume actual audio recording
  }

  const stopRecording = () => {
    setIsRecording(false)
    setIsPaused(false)
    // In a real app, this would stop actual audio recording and process the result

    // Mock saving the answer
    const newAnswers = [...answers]
    newAnswers[currentQuestionIndex] = {
      question: questions[currentQuestionIndex],
      answer: "User's recorded answer would be here",
      duration: elapsedTime,
    }
    setAnswers(newAnswers)

    // Generate mock real-time feedback
    setRealtimeFeedback(
      "Good answer! You provided relevant information and structured your response well. Consider adding more specific examples to strengthen your point.",
    )
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setRealtimeFeedback("")
      setElapsedTime(0)
    } else {
      // End the interview if we've gone through all questions
      onEndInterview(answers, elapsedTime)
    }
  }

  const handleEndInterview = () => {
    onEndInterview(answers, elapsedTime)
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Left column - Virtual Interviewer */}
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full bg-blue-100">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Virtual Interviewer"
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900">AI Interviewer</h3>
                <p className="text-sm text-gray-500">
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Level
                </p>

                <div className="mt-6 w-full">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm text-gray-500">
                      {currentQuestionIndex + 1} of {questions.length}
                    </span>
                  </div>
                  <Progress value={((currentQuestionIndex + 1) / questions.length) * 100} className="h-2" />
                </div>

                <div className="mt-6 w-full">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Time</span>
                    <span className="text-sm text-gray-500">{formatTime(elapsedTime)}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-blue-600 transition-all"
                      style={{ width: `${Math.min((elapsedTime / 300) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column - Question and Recording */}
        <div className="md:col-span-2">
          <Card className="mb-6">
            <CardContent className="p-6">
              <h3 className="mb-2 text-lg font-medium text-gray-900">Question {currentQuestionIndex + 1}</h3>
              <p className="text-gray-700">{questions[currentQuestionIndex]}</p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {!isRecording ? (
                  <Button onClick={startRecording} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                    <Mic className="h-4 w-4" />
                    Start Recording
                  </Button>
                ) : (
                  <>
                    {isPaused ? (
                      <Button onClick={resumeRecording} variant="outline" className="flex items-center gap-2">
                        <Play className="h-4 w-4" />
                        Resume
                      </Button>
                    ) : (
                      <Button onClick={pauseRecording} variant="outline" className="flex items-center gap-2">
                        <Pause className="h-4 w-4" />
                        Pause
                      </Button>
                    )}
                    <Button onClick={stopRecording} variant="destructive" className="flex items-center gap-2">
                      <StopCircle className="h-4 w-4" />
                      Stop
                    </Button>
                  </>
                )}

                <div className="ml-auto">
                  {isRecording && !isPaused && (
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
                      </span>
                      <span className="text-sm text-gray-500">Recording...</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Real-time feedback */}
          {realtimeFeedback && (
            <Card className="mb-6 border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-medium text-gray-900">Real-time Feedback</h3>
                <p className="text-gray-700">{realtimeFeedback}</p>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handleEndInterview}
              className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
            >
              End Interview
            </Button>
            <Button
              onClick={handleNextQuestion}
              disabled={!answers[currentQuestionIndex]}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Interview"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
