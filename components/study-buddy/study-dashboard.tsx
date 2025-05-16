"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Calendar, Clock, Zap, Award, BookOpen, ArrowRight } from "lucide-react"

interface StudyDashboardProps {
  onStartStudy: (deckId: string) => void
}

export function StudyDashboard({ onStartStudy }: StudyDashboardProps) {
  // Mock data - in a real app, this would come from an API or database
  const recentDecks = [
    { id: "deck1", name: "JavaScript Fundamentals", cards: 42, dueCards: 12, lastStudied: "2 days ago" },
    { id: "deck2", name: "React Hooks", cards: 28, dueCards: 8, lastStudied: "Yesterday" },
    { id: "deck3", name: "CSS Grid & Flexbox", cards: 35, dueCards: 15, lastStudied: "3 days ago" },
  ]

  const studyStats = {
    streak: 7,
    cardsStudied: 124,
    minutesStudied: 45,
    masteryScore: 78,
  }

  const scheduledDecks = [
    { id: "deck4", name: "TypeScript Basics", dueCards: 18, dueDate: "Today" },
    { id: "deck5", name: "Design Patterns", dueCards: 9, dueDate: "Tomorrow" },
  ]

  return (
    <div className="space-y-6">
      {/* Study Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex flex-row items-center p-6">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Current Streak</p>
              <h3 className="text-2xl font-bold text-gray-900">{studyStats.streak} days</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-row items-center p-6">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Cards Studied</p>
              <h3 className="text-2xl font-bold text-gray-900">{studyStats.cardsStudied} cards</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-row items-center p-6">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Study Time</p>
              <h3 className="text-2xl font-bold text-gray-900">{studyStats.minutesStudied} mins</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-row items-center p-6">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
              <Award className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Mastery Score</p>
              <h3 className="text-2xl font-bold text-gray-900">{studyStats.masteryScore}%</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Due Today Section */}
      <Card>
        <CardHeader>
          <CardTitle>Due Today</CardTitle>
          <CardDescription>Decks with cards scheduled for review today</CardDescription>
        </CardHeader>
        <CardContent>
          {scheduledDecks.length > 0 ? (
            <div className="space-y-4">
              {scheduledDecks.map((deck) => (
                <div key={deck.id} className="flex items-center justify-between rounded-lg border p-4">
                  <div>
                    <h3 className="font-medium text-gray-900">{deck.name}</h3>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <Calendar className="mr-1.5 h-4 w-4" />
                      {deck.dueDate}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-900">{deck.dueCards} cards</span>
                      <p className="text-xs text-gray-500">due for review</p>
                    </div>
                    <Button size="sm" onClick={() => onStartStudy(deck.id)} className="bg-blue-600 hover:bg-blue-700">
                      Study
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center">
              <h3 className="text-lg font-medium text-gray-900">All caught up!</h3>
              <p className="mt-1 text-gray-500">You don't have any cards due for review today.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Decks */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Decks</CardTitle>
          <CardDescription>Your recently studied flashcard decks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentDecks.map((deck) => (
              <div key={deck.id} className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900">{deck.name}</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onStartStudy(deck.id)}
                    className="flex items-center gap-1"
                  >
                    Study <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
                  <span>{deck.cards} cards total</span>
                  <span>Last studied: {deck.lastStudied}</span>
                </div>
                <div className="mt-3">
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span>Progress</span>
                    <span>{Math.round(((deck.cards - deck.dueCards) / deck.cards) * 100)}%</span>
                  </div>
                  <Progress value={((deck.cards - deck.dueCards) / deck.cards) * 100} className="h-1.5" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
