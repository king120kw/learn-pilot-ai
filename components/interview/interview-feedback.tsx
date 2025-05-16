"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, AlertCircle, Lightbulb, Download, Share2 } from "lucide-react"

interface InterviewFeedbackProps {
  topic: string
  difficulty: string
  duration: number
  questions: string[]
  answers: any[]
  feedback: any
  onReset: () => void
}

export function InterviewFeedback({
  topic,
  difficulty,
  duration,
  questions,
  answers,
  feedback,
  onReset,
}: InterviewFeedbackProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="mx-auto max-w-4xl">
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Interview Performance Summary</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              Save
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <h3 className="text-sm font-medium text-gray-500">Topic</h3>
              <p className="mt-1 text-lg font-semibold text-gray-900">{topic}</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <h3 className="text-sm font-medium text-gray-500">Difficulty</h3>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <h3 className="text-sm font-medium text-gray-500">Duration</h3>
              <p className="mt-1 text-lg font-semibold text-gray-900">{formatTime(duration)}</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <h3 className="text-sm font-medium text-gray-500">Overall Score</h3>
              <p className="mt-1 text-lg font-semibold text-gray-900">{feedback.overallScore}/100</p>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-4 flex items-center justify-center">
              <div className="relative h-36 w-36">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="10" strokeLinecap="round" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke={
                      feedback.overallScore >= 80 ? "#22c55e" : feedback.overallScore >= 60 ? "#3b82f6" : "#f59e0b"
                    }
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray="283"
                    strokeDashoffset={283 - (283 * feedback.overallScore) / 100}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold">{feedback.overallScore}</span>
                </div>
              </div>
            </div>

            <Tabs defaultValue="strengths" className="mt-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="strengths">Strengths</TabsTrigger>
                <TabsTrigger value="improvements">Areas for Improvement</TabsTrigger>
                <TabsTrigger value="tips">Tips & Advice</TabsTrigger>
              </TabsList>
              <TabsContent value="strengths" className="mt-4 space-y-4">
                {feedback.strengths.map((strength: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 rounded-lg border border-green-100 bg-green-50 p-4"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <p className="text-gray-800">{strength}</p>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="improvements" className="mt-4 space-y-4">
                {feedback.areasForImprovement.map((area: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 rounded-lg border border-amber-100 bg-amber-50 p-4"
                  >
                    <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <p className="text-gray-800">{area}</p>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="tips" className="mt-4 space-y-4">
                {feedback.tips.map((tip: string, index: number) => (
                  <div key={index} className="flex items-start gap-2 rounded-lg border border-blue-100 bg-blue-50 p-4">
                    <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <p className="text-gray-800">{tip}</p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Question & Answer Review</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {questions.map((question, index) => (
              <div key={index} className="rounded-lg border border-gray-200 p-4">
                <h3 className="mb-2 font-medium text-gray-900">Question {index + 1}</h3>
                <p className="mb-4 text-gray-700">{question}</p>

                {answers[index] ? (
                  <>
                    <h4 className="mb-2 text-sm font-medium text-gray-700">Your Answer:</h4>
                    <p className="text-gray-600">{answers[index].answer}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-500">Duration: {formatTime(answers[index].duration)}</span>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-medium text-gray-700">Clarity:</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className={`h-4 w-4 ${star <= 4 ? "text-yellow-400" : "text-gray-300"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="italic text-gray-500">No answer recorded</p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 flex justify-center">
        <Button onClick={onReset} className="bg-blue-600 hover:bg-blue-700">
          Start New Interview
        </Button>
      </div>
    </div>
  )
}
