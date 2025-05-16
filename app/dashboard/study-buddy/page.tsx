"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StudyDashboard } from "@/components/study-buddy/study-dashboard"
import { FlashcardCreator } from "@/components/study-buddy/flashcard-creator"
import { FlashcardDecks } from "@/components/study-buddy/flashcard-decks"
import { StudyMode } from "@/components/study-buddy/study-mode"
import { PerformanceTracker } from "@/components/study-buddy/performance-tracker"

export default function StudyBuddyPage() {
  const [selectedDeck, setSelectedDeck] = useState<string | null>(null)
  const [isStudyMode, setIsStudyMode] = useState(false)

  const handleStartStudy = (deckId: string) => {
    setSelectedDeck(deckId)
    setIsStudyMode(true)
  }

  const handleExitStudyMode = () => {
    setIsStudyMode(false)
  }

  if (isStudyMode && selectedDeck) {
    return <StudyMode deckId={selectedDeck} onExit={handleExitStudyMode} />
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">Study Buddy</h1>

      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-4">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="create">Create</TabsTrigger>
          <TabsTrigger value="decks">My Decks</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <StudyDashboard onStartStudy={handleStartStudy} />
        </TabsContent>

        <TabsContent value="create">
          <FlashcardCreator />
        </TabsContent>

        <TabsContent value="decks">
          <FlashcardDecks onStartStudy={handleStartStudy} />
        </TabsContent>

        <TabsContent value="performance">
          <PerformanceTracker />
        </TabsContent>
      </Tabs>
    </div>
  )
}
