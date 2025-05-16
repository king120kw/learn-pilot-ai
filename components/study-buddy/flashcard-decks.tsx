"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { BookOpen, Search, Plus, MoreVertical, Edit, Trash2, Share2, Play, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface FlashcardDecksProps {
  onStartStudy: (deckId: string) => void
}

export function FlashcardDecks({ onStartStudy }: FlashcardDecksProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Mock data - in a real app, this would come from an API or database
  const decks = [
    {
      id: "deck1",
      name: "JavaScript Fundamentals",
      cards: 42,
      lastStudied: "2 days ago",
      tags: ["Programming", "Web Development"],
      description: "Core JavaScript concepts and syntax",
    },
    {
      id: "deck2",
      name: "React Hooks",
      cards: 28,
      lastStudied: "Yesterday",
      tags: ["React", "Web Development"],
      description: "Modern React hooks and state management",
    },
    {
      id: "deck3",
      name: "CSS Grid & Flexbox",
      cards: 35,
      lastStudied: "3 days ago",
      tags: ["CSS", "Web Development"],
      description: "Modern CSS layout techniques",
    },
    {
      id: "deck4",
      name: "TypeScript Basics",
      cards: 50,
      lastStudied: "1 week ago",
      tags: ["TypeScript", "Programming"],
      description: "TypeScript fundamentals and type system",
    },
    {
      id: "deck5",
      name: "Design Patterns",
      cards: 24,
      lastStudied: "2 weeks ago",
      tags: ["Programming", "Software Design"],
      description: "Common software design patterns",
    },
    {
      id: "deck6",
      name: "Data Structures",
      cards: 38,
      lastStudied: "1 month ago",
      tags: ["Programming", "Computer Science"],
      description: "Essential data structures for programming",
    },
  ]

  const filteredDecks = decks.filter(
    (deck) =>
      deck.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deck.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      deck.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search decks by name or tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setViewMode("grid")}
            className={viewMode === "grid" ? "bg-gray-100" : ""}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-grid-2x2"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M3 12h18" />
              <path d="M12 3v18" />
            </svg>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setViewMode("list")}
            className={viewMode === "list" ? "bg-gray-100" : ""}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-list"
            >
              <line x1="8" x2="21" y1="6" y2="6" />
              <line x1="8" x2="21" y1="12" y2="12" />
              <line x1="8" x2="21" y1="18" y2="18" />
              <line x1="3" x2="3.01" y1="6" y2="6" />
              <line x1="3" x2="3.01" y1="12" y2="12" />
              <line x1="3" x2="3.01" y1="18" y2="18" />
            </svg>
          </Button>
          <Button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4" />
            New Deck
          </Button>
        </div>
      </div>

      {filteredDecks.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <BookOpen className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">No decks found</h3>
            <p className="mt-1 text-center text-gray-500">
              {searchQuery
                ? `No decks match your search for "${searchQuery}"`
                : "You haven't created any flashcard decks yet"}
            </p>
            <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Create Your First Deck</Button>
          </CardContent>
        </Card>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDecks.map((deck) => (
            <Card key={deck.id} className="overflow-hidden">
              <div className="h-2 bg-blue-600"></div>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{deck.name}</CardTitle>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="-mr-2 h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="flex items-center gap-2">
                        <Edit className="h-4 w-4" /> Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2">
                        <Share2 className="h-4 w-4" /> Share
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                        <Trash2 className="h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <CardDescription>{deck.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-3 flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-500">
                    <BookOpen className="mr-1.5 h-4 w-4" />
                    {deck.cards} cards
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="mr-1.5 h-4 w-4" />
                    {deck.lastStudied}
                  </div>
                </div>

                <div className="mb-4 flex flex-wrap gap-1">
                  {deck.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-100">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button onClick={() => onStartStudy(deck.id)} className="w-full bg-blue-600 hover:bg-blue-700">
                  <Play className="mr-2 h-4 w-4" /> Study Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {filteredDecks.map((deck) => (
                <div key={deck.id} className="flex items-center justify-between p-4">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{deck.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{deck.description}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {deck.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="bg-gray-100 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="ml-4 flex flex-col items-end gap-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <BookOpen className="mr-1.5 h-4 w-4" />
                      {deck.cards} cards
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="mr-1.5 h-4 w-4" />
                      {deck.lastStudied}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => onStartStudy(deck.id)}
                        className="h-8 bg-blue-600 hover:bg-blue-700"
                      >
                        Study
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
