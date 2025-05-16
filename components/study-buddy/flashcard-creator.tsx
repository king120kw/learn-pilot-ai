"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles, ImageIcon, Plus, Save, FileUp, FileDown } from "lucide-react"

export function FlashcardCreator() {
  const [flashcardFront, setFlashcardFront] = useState("")
  const [flashcardBack, setFlashcardBack] = useState("")
  const [selectedDeck, setSelectedDeck] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  // Mock decks - in a real app, this would come from an API or database
  const decks = [
    { id: "deck1", name: "JavaScript Fundamentals" },
    { id: "deck2", name: "React Hooks" },
    { id: "deck3", name: "CSS Grid & Flexbox" },
    { id: "deck4", name: "TypeScript Basics" },
    { id: "deck5", name: "Design Patterns" },
  ]

  const handleAiSuggestion = () => {
    setIsGenerating(true)
    // Simulate AI generation with a timeout
    setTimeout(() => {
      if (flashcardFront && !flashcardBack) {
        // If only front is filled, generate a back
        setFlashcardBack("This is an AI-generated answer for the question: " + flashcardFront)
      } else if (!flashcardFront && !flashcardBack) {
        // If both are empty, generate a complete flashcard
        setFlashcardFront("What is the difference between let and const in JavaScript?")
        setFlashcardBack(
          "let allows reassignment of values while const creates variables that cannot be reassigned after declaration. However, objects and arrays declared with const can still have their properties or elements modified.",
        )
      }
      setIsGenerating(false)
    }, 1500)
  }

  const handleSaveFlashcard = () => {
    // In a real app, this would save to a database
    alert("Flashcard saved to " + (selectedDeck ? decks.find((d) => d.id === selectedDeck)?.name : "a new deck"))
    setFlashcardFront("")
    setFlashcardBack("")
    setShowPreview(false)
  }

  const handleCreateDeck = () => {
    // In a real app, this would open a modal to create a new deck
    const newDeckName = prompt("Enter a name for your new deck:")
    if (newDeckName) {
      alert(`New deck "${newDeckName}" created!`)
    }
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="single" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-3">
          <TabsTrigger value="single">Create Single Card</TabsTrigger>
          <TabsTrigger value="bulk">Bulk Create</TabsTrigger>
          <TabsTrigger value="import">Import/Export</TabsTrigger>
        </TabsList>

        <TabsContent value="single">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Flashcard Creation Form */}
            <Card>
              <CardHeader>
                <CardTitle>Create Flashcard</CardTitle>
                <CardDescription>Enter the content for your flashcard or use AI to generate content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="front">Front (Question)</Label>
                  <Textarea
                    id="front"
                    placeholder="Enter your question or term here..."
                    value={flashcardFront}
                    onChange={(e) => setFlashcardFront(e.target.value)}
                    className="min-h-[100px] resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="back">Back (Answer)</Label>
                  <Textarea
                    id="back"
                    placeholder="Enter the answer or definition here..."
                    value={flashcardBack}
                    onChange={(e) => setFlashcardBack(e.target.value)}
                    className="min-h-[100px] resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deck">Add to Deck</Label>
                  <div className="flex gap-2">
                    <Select value={selectedDeck} onValueChange={setSelectedDeck}>
                      <SelectTrigger className="flex-1">
                        <SelectValue placeholder="Select a deck" />
                      </SelectTrigger>
                      <SelectContent>
                        {decks.map((deck) => (
                          <SelectItem key={deck.id} value={deck.id}>
                            {deck.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon" onClick={handleCreateDeck}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="preview" checked={showPreview} onCheckedChange={setShowPreview} />
                  <Label htmlFor="preview">Show preview</Label>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handleAiSuggestion}
                  disabled={isGenerating}
                  className="flex items-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  {isGenerating ? "Generating..." : "AI Suggestion"}
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ImageIcon className="h-4 w-4" />
                    Add Image
                  </Button>
                  <Button
                    onClick={handleSaveFlashcard}
                    disabled={!flashcardFront || !flashcardBack}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                  >
                    <Save className="h-4 w-4" />
                    Save Card
                  </Button>
                </div>
              </CardFooter>
            </Card>

            {/* Flashcard Preview */}
            {showPreview && (
              <Card>
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                  <CardDescription>Click the card to flip between question and answer</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center p-6">
                  <div
                    className="relative h-64 w-full cursor-pointer rounded-xl border bg-white p-6 shadow-md transition-all duration-500"
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
                        <p className="text-lg font-medium text-gray-900">
                          {flashcardFront || "Your question will appear here"}
                        </p>
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
                        <p className="text-lg font-medium text-gray-900">
                          {flashcardBack || "Your answer will appear here"}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="bulk">
          <Card>
            <CardHeader>
              <CardTitle>Bulk Create Flashcards</CardTitle>
              <CardDescription>
                Create multiple flashcards at once by entering them in a structured format
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="bulk-input">Enter Multiple Flashcards</Label>
                  <Textarea
                    id="bulk-input"
                    placeholder="Format: Question 1 | Answer 1
Question 2 | Answer 2
Question 3 | Answer 3"
                    className="min-h-[200px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bulk-deck">Add to Deck</Label>
                  <div className="flex gap-2">
                    <Select>
                      <SelectTrigger className="flex-1">
                        <SelectValue placeholder="Select a deck" />
                      </SelectTrigger>
                      <SelectContent>
                        {decks.map((deck) => (
                          <SelectItem key={deck.id} value={deck.id}>
                            {deck.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                AI Generate
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Create Cards</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="import">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Import Flashcards</CardTitle>
                <CardDescription>Import flashcards from CSV, JSON, or other formats</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                    <FileUp className="h-6 w-6 text-gray-500" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900">Drag and drop your file here</h3>
                  <p className="mt-1 text-xs text-gray-500">Supports CSV, JSON, and Anki files</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Browse Files
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="import-deck">Import to Deck</Label>
                  <div className="flex gap-2">
                    <Select>
                      <SelectTrigger className="flex-1">
                        <SelectValue placeholder="Select a deck" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">Create New Deck</SelectItem>
                        {decks.map((deck) => (
                          <SelectItem key={deck.id} value={deck.id}>
                            {deck.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Import Flashcards</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Export Flashcards</CardTitle>
                <CardDescription>Export your flashcards to use in other applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="export-deck">Select Deck to Export</Label>
                  <Select>
                    <SelectTrigger id="export-deck">
                      <SelectValue placeholder="Select a deck" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Decks</SelectItem>
                      {decks.map((deck) => (
                        <SelectItem key={deck.id} value={deck.id}>
                          {deck.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="export-format">Export Format</Label>
                  <Select defaultValue="csv">
                    <SelectTrigger id="export-format">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="csv">CSV</SelectItem>
                      <SelectItem value="json">JSON</SelectItem>
                      <SelectItem value="anki">Anki</SelectItem>
                      <SelectItem value="txt">Plain Text</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                    <FileDown className="h-6 w-6 text-gray-500" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900">Ready to export</h3>
                  <p className="mt-1 text-xs text-gray-500">Click the button below to download your flashcards</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Export Flashcards</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
