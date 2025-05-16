"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Send, FileText, ImageIcon, Paperclip } from "lucide-react"

interface ChatSidebarProps {
  onClose: () => void
}

interface ChatMessage {
  id: number
  sender: string
  content: string
  timestamp: string
  isSelf: boolean
}

interface Note {
  id: number
  content: string
  timestamp: string
}

export function ChatSidebar({ onClose }: ChatSidebarProps) {
  const [activeTab, setActiveTab] = useState("chat")
  const [message, setMessage] = useState("")
  const [note, setNote] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "Sarah Johnson",
      content: "Hi there! Ready to start our JavaScript tutoring session?",
      timestamp: "11:01 AM",
      isSelf: false,
    },
    {
      id: 2,
      sender: "You",
      content: "Yes, I'm ready! I have some questions about promises and async/await.",
      timestamp: "11:02 AM",
      isSelf: true,
    },
    {
      id: 3,
      sender: "Sarah Johnson",
      content:
        "Great! Let's start with promises. They're a way to handle asynchronous operations in JavaScript. What specific aspects are you struggling with?",
      timestamp: "11:03 AM",
      isSelf: false,
    },
  ])
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      content: "JavaScript promises represent future values that may not be available yet",
      timestamp: "11:05 AM",
    },
    {
      id: 2,
      content: "Promise states: pending, fulfilled, rejected",
      timestamp: "11:07 AM",
    },
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: ChatMessage = {
        id: messages.length + 1,
        sender: "You",
        content: message,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isSelf: true,
      }
      setMessages([...messages, newMessage])
      setMessage("")

      // Simulate a response after a short delay
      setTimeout(() => {
        const response: ChatMessage = {
          id: messages.length + 2,
          sender: "Sarah Johnson",
          content: "I see what you mean. Let me explain that concept in more detail...",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          isSelf: false,
        }
        setMessages((prev) => [...prev, response])
      }, 3000)
    }
  }

  const handleSaveNote = () => {
    if (note.trim()) {
      const newNote: Note = {
        id: notes.length + 1,
        content: note,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setNotes([...notes, newNote])
      setNote("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, type: "message" | "note") => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (type === "message") {
        handleSendMessage()
      } else {
        handleSaveNote()
      }
    }
  }

  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <h2 className="text-lg font-semibold">Session Tools</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="flex h-[calc(100%-40px)] flex-col">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isSelf ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      msg.isSelf ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {!msg.isSelf && <p className="mb-1 text-xs font-semibold">{msg.sender}</p>}
                    <p className="text-sm">{msg.content}</p>
                    <p className={`mt-1 text-right text-xs ${msg.isSelf ? "text-blue-100" : "text-gray-500"}`}>
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <div className="border-t p-3">
            <div className="mb-2 flex gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <ImageIcon className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <FileText className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Paperclip className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, "message")}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} disabled={!message.trim()} className="bg-blue-600 hover:bg-blue-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="notes" className="flex h-[calc(100%-40px)] flex-col">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {notes.map((note) => (
                <div key={note.id} className="rounded-lg border border-gray-200 p-3">
                  <p className="text-sm text-gray-800">{note.content}</p>
                  <p className="mt-2 text-right text-xs text-gray-500">{note.timestamp}</p>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="border-t p-3">
            <div className="flex flex-col gap-2">
              <Input
                placeholder="Add a note..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, "note")}
                className="flex-1"
              />
              <Button onClick={handleSaveNote} disabled={!note.trim()} className="bg-blue-600 hover:bg-blue-700">
                Save Note
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
