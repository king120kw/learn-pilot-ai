"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Volume2, ThumbsUp, ThumbsDown, HelpCircle } from "lucide-react"

interface StudyModeProps {
  deckId: string
  onExit: () => void
}

export function StudyMode({ deckId, onExit }: StudyModeProps) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [studyComplete, setStudyComplete] = useState(false)
  const [cardResponses, setCardResponses] = useState<Record<number, "easy" | "medium" | "hard">>({})

  // Mock data - in a real app, this would come from an API or database
  const deck = {
    id: deckId,
    name: "JavaScript Fundamentals",
    cards: [
      {
        id: 1,
        front: "What is a closure in JavaScript?",
        back: "A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). In JavaScript, closures are created every time a function is created, at function creation time.",
      },
      {
        id: 2,
        front: "Explain the difference between '==' and '===' in JavaScript.",
        back: "The '==' operator performs type coercion, meaning it converts the operands to the same type before comparison. The '===' operator is a strict equality operator that checks both value and type without conversion.",
      },
      {
        id: 3,
        front: "What is hoisting in JavaScript?",
        back: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. Variables declared with 'var' are hoisted and initialized with undefined, while 'let' and 'const' declarations are hoisted but not initialized.",
      },
      {
        id: 4,
        front: "Explain the event loop in JavaScript.",
        back: "The event loop is a mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded. It monitors the call stack and callback queue, pushing callbacks from the queue to the stack when it's empty.",
      },
      {
        id: 5,
        front: "What is the difference between 'null' and 'undefined'?",
        back: "undefined means a variable has been declared but has not yet been assigned a value. null is an assignment value that represents no value or no object. It is explicitly assigned to variables to represent 'no value'.",
      },
    ],
  }

  const handleCardResponse = (response: "easy" | "medium" | "hard") => {
    // In a real app, this would update the spaced repetition algorithm
    setCardResponses({
      ...cardResponses,
      [currentCardIndex]: response,
    })

    // Move to the next card or complete the study session
    if (currentCardIndex < deck.cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
      setIsFlipped(false)
    } else {
      setStudyComplete(true)
    }
  }

  const resetStudySession = () => {
    setCurrentCardIndex(0)
    setIsFlipped(false)
    setStudyComplete(false)
    setCardResponses({})
  }

  // Calculate stats for the summary
  const getResponseCounts = () => {
    const counts = { easy: 0, medium: 0, hard: 0 }
    Object.values(cardResponses).forEach((response) => {
      counts[response]++
    })
    return counts
  }

  if (studyComplete) {
    const responseCounts = getResponseCounts()

    return (
      <div className="mx-auto max-w-2xl px-4">
        <Card className="overflow-hidden">
          <div className="h-2 bg-green-600"></div>
          <CardContent className="p-6">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-gray-900">Study Session Complete!</h2>
              <p className="mt-2 text-gray-600">You've reviewed all {deck.cards.length} cards in this deck.</p>
            </div>

            <div className="mb-6 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-lg bg-green-50 p-4">
                <h3 className="text-sm font-medium text-gray-500">Easy</h3>
                <p className="mt-1 text-2xl font-bold text-green-600">{responseCounts.easy}</p>
              </div>
              <div className="rounded-lg bg-yellow-50 p-4">
                <h3 className="text-sm font-medium text-gray-500">Medium</h3>
                <p className="mt-1 text-2xl font-bold text-yellow-600">{responseCounts.medium}</p>
              </div>
              <div className="rounded-lg bg-red-50 p-4">
                <h3 className="text-sm font-medium text-gray-500">Hard</h3>
                <p className="mt-1 text-2xl font-bold text-red-600">{responseCounts.hard}</p>
              </div>
            </div>

            <div className="mb-6 rounded-lg bg-blue-50 p-4">
              <h3 className="mb-2 font-medium text-gray-900">Spaced Repetition</h3>
              <p className="text-sm text-gray-600">
                Based on your responses, we've scheduled your next review sessions:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>• {responseCounts.easy} cards will be reviewed in 4 days</li>
                <li>• {responseCounts.medium} cards will be reviewed in 2 days</li>
                <li>• {responseCounts.hard} cards will be reviewed tomorrow</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={onExit} className="flex-1">
                Back to Dashboard
              </Button>
              <Button onClick={resetStudySession} className="flex-1 bg-blue-600 hover:bg-blue-700">
                Study Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="mb-6 flex items-center justify-between">
        <Button variant="ghost" onClick={onExit} className="flex items-center gap-1 text-gray-600">
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Button>
        <div className="text-right">
          <h2 className="text-lg font-medium text-gray-900">{deck.name}</h2>
          <p className="text-sm text-gray-500">
            Card {currentCardIndex + 1} of {deck.cards.length}
          </p>
        </div>
      </div>

      <div className="mb-4">
        <div className="mb-1 flex justify-between text-xs text-gray-500">
          <span>Progress</span>
          <span>{Math.round((currentCardIndex / deck.cards.length) * 100)}%</span>
        </div>
        <Progress value={(currentCardIndex / deck.cards.length) * 100} className="h-1.5" />
      </div>

      {/* Flashcard */}
      <div className="mb-6">
        <div
          className="relative mx-auto h-64 w-full cursor-pointer rounded-xl border bg-white p-6 shadow-md transition-all duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front of card */}
          <div
            className="absolute inset-0 flex items-center justify-center backface-hidden p-6 text-center"
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <div>
              <h3 className="mb-2 text-sm font-medium text-gray-500">QUESTION</h3>
              <p className="text-lg font-medium text-gray-900">{deck.cards[currentCardIndex].front}</p>
              <div className="mt-4 text-sm text-gray-400">Click to flip</div>
            </div>
          </div>

          {/* Back of card */}
          <div
            className="absolute inset-0 flex items-center justify-center backface-hidden p-6 text-center"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div>
              <h3 className="mb-2 text-sm font-medium text-gray-500">ANSWER</h3>
              <p className="text-lg font-medium text-gray-900">{deck.cards[currentCardIndex].back}</p>
              <div className="mt-4 text-sm text-gray-400">Click to flip back</div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mb-6 flex justify-center">
        <Button variant="outline" size="icon" className="mx-2">
          <Volume2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Response buttons */}
      <div className="grid grid-cols-3 gap-3">
        <Button
          onClick={() => handleCardResponse("hard")}
          className="flex flex-col items-center gap-1 bg-red-600 py-3 hover:bg-red-700"
          disabled={!isFlipped}
        >
          <ThumbsDown className="h-5 w-5" />
          <span>Hard</span>
        </Button>
        <Button
          onClick={() => handleCardResponse("medium")}
          className="flex flex-col items-center gap-1 bg-yellow-600 py-3 hover:bg-yellow-700"
          disabled={!isFlipped}
        >
          <HelpCircle className="h-5 w-5" />
          <span>Medium</span>
        </Button>
        <Button
          onClick={() => handleCardResponse("easy")}
          className="flex flex-col items-center gap-1 bg-green-600 py-3 hover:bg-green-700"
          disabled={!isFlipped}
        >
          <ThumbsUp className="h-5 w-5" />
          <span>Easy</span>
        </Button>
      </div>
    </div>
  )
}
