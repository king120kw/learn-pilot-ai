"use client"

import { useState } from "react"
import { InterviewSetup } from "@/components/interview/interview-setup"
import { InterviewSession } from "@/components/interview/interview-session"
import { InterviewFeedback } from "@/components/interview/interview-feedback"

export default function MockInterviewPage() {
  const [interviewState, setInterviewState] = useState<"setup" | "session" | "feedback">("setup")
  const [interviewData, setInterviewData] = useState({
    topic: "",
    difficulty: "beginner",
    duration: 0,
    questions: [],
    answers: [],
    feedback: null,
  })

  const startInterview = (topic: string, difficulty: string) => {
    setInterviewData({
      ...interviewData,
      topic,
      difficulty,
      questions: getMockQuestions(topic, difficulty),
      duration: 0,
      answers: [],
      feedback: null,
    })
    setInterviewState("session")
  }

  const endInterview = (answers: any[], duration: number) => {
    setInterviewData({
      ...interviewData,
      answers,
      duration,
      feedback: generateMockFeedback(interviewData.difficulty),
    })
    setInterviewState("feedback")
  }

  const resetInterview = () => {
    setInterviewState("setup")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">Mock Interview</h1>

      {interviewState === "setup" && <InterviewSetup onStartInterview={startInterview} />}

      {interviewState === "session" && (
        <InterviewSession
          topic={interviewData.topic}
          difficulty={interviewData.difficulty}
          questions={interviewData.questions}
          onEndInterview={endInterview}
        />
      )}

      {interviewState === "feedback" && (
        <InterviewFeedback
          topic={interviewData.topic}
          difficulty={interviewData.difficulty}
          duration={interviewData.duration}
          questions={interviewData.questions}
          answers={interviewData.answers}
          feedback={interviewData.feedback}
          onReset={resetInterview}
        />
      )}
    </div>
  )
}

// Helper functions to generate mock data
function getMockQuestions(topic: string, difficulty: string) {
  // In a real app, these would come from an API or database
  const questions = [
    "Tell me about your experience with this technology.",
    "How would you solve [specific problem related to topic]?",
    "Explain the concept of [key concept in topic].",
    "What are the best practices for [topic-related activity]?",
    "How do you stay updated with the latest developments in this field?",
  ]

  return questions
}

function generateMockFeedback(difficulty: string) {
  // In a real app, this would be generated based on actual performance
  return {
    overallScore: 78,
    strengths: [
      "Clear communication of technical concepts",
      "Good problem-solving approach",
      "Demonstrated relevant knowledge",
    ],
    areasForImprovement: [
      "Could provide more specific examples",
      "Consider structuring answers with STAR method",
      "Work on conciseness in responses",
    ],
    tips: [
      "Practice explaining complex topics in simpler terms",
      "Prepare more concrete examples from your experience",
      "Focus on highlighting measurable outcomes",
    ],
  }
}
