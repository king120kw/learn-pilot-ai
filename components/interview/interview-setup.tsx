"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code, Briefcase, GraduationCap, Building2, Microscope } from "lucide-react"

interface InterviewSetupProps {
  onStartInterview: (topic: string, difficulty: string) => void
}

export function InterviewSetup({ onStartInterview }: InterviewSetupProps) {
  const [selectedTopic, setSelectedTopic] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState("beginner")

  const handleStartInterview = () => {
    if (selectedTopic) {
      onStartInterview(selectedTopic, selectedDifficulty)
    }
  }

  const topics = [
    { id: "web-development", name: "Web Development", icon: Code },
    { id: "data-science", name: "Data Science", icon: Microscope },
    { id: "product-management", name: "Product Management", icon: Briefcase },
    { id: "ux-design", name: "UX Design", icon: BookOpen },
    { id: "business-analysis", name: "Business Analysis", icon: Building2 },
    { id: "education", name: "Education", icon: GraduationCap },
  ]

  return (
    <div className="mx-auto max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>Set Up Your Mock Interview</CardTitle>
          <CardDescription>
            Choose a topic and difficulty level to start practicing for your next interview.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Topic Selection */}
          <div className="space-y-4">
            <div>
              <h3 className="mb-3 text-lg font-medium">Select Interview Topic</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {topics.map((topic) => (
                  <div key={topic.id}>
                    <button
                      type="button"
                      className={`flex w-full flex-col items-center rounded-lg border p-4 text-center transition-all hover:border-blue-200 hover:bg-blue-50 ${
                        selectedTopic === topic.id
                          ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500 ring-offset-2"
                          : "border-gray-200"
                      }`}
                      onClick={() => setSelectedTopic(topic.id)}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                        <topic.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <span className="mt-2 font-medium">{topic.name}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized Topic Dropdown */}
            {selectedTopic && (
              <div>
                <Label htmlFor="specialized-topic">Specialized Topic</Label>
                <Select onValueChange={(value) => setSelectedTopic(value)}>
                  <SelectTrigger id="specialized-topic" className="mt-1.5">
                    <SelectValue placeholder="Select a specialized topic" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedTopic === "web-development" && (
                      <>
                        <SelectItem value="frontend-react">Frontend (React)</SelectItem>
                        <SelectItem value="backend-node">Backend (Node.js)</SelectItem>
                        <SelectItem value="fullstack">Full Stack</SelectItem>
                      </>
                    )}
                    {selectedTopic === "data-science" && (
                      <>
                        <SelectItem value="machine-learning">Machine Learning</SelectItem>
                        <SelectItem value="data-analysis">Data Analysis</SelectItem>
                        <SelectItem value="big-data">Big Data</SelectItem>
                      </>
                    )}
                    {selectedTopic === "product-management" && (
                      <>
                        <SelectItem value="product-strategy">Product Strategy</SelectItem>
                        <SelectItem value="agile-methodologies">Agile Methodologies</SelectItem>
                        <SelectItem value="product-analytics">Product Analytics</SelectItem>
                      </>
                    )}
                    {selectedTopic === "ux-design" && (
                      <>
                        <SelectItem value="user-research">User Research</SelectItem>
                        <SelectItem value="interaction-design">Interaction Design</SelectItem>
                        <SelectItem value="visual-design">Visual Design</SelectItem>
                      </>
                    )}
                    {selectedTopic === "business-analysis" && (
                      <>
                        <SelectItem value="requirements-gathering">Requirements Gathering</SelectItem>
                        <SelectItem value="process-modeling">Process Modeling</SelectItem>
                        <SelectItem value="stakeholder-management">Stakeholder Management</SelectItem>
                      </>
                    )}
                    {selectedTopic === "education" && (
                      <>
                        <SelectItem value="k12-teaching">K-12 Teaching</SelectItem>
                        <SelectItem value="higher-education">Higher Education</SelectItem>
                        <SelectItem value="educational-technology">Educational Technology</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Difficulty Level */}
            <div>
              <h3 className="mb-3 text-lg font-medium">Select Difficulty Level</h3>
              <RadioGroup
                defaultValue="beginner"
                onValueChange={setSelectedDifficulty}
                className="flex flex-col space-y-1 sm:flex-row sm:space-x-4 sm:space-y-0"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="beginner" id="beginner" />
                  <Label htmlFor="beginner" className="cursor-pointer font-normal">
                    Beginner
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="intermediate" id="intermediate" />
                  <Label htmlFor="intermediate" className="cursor-pointer font-normal">
                    Intermediate
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="advanced" id="advanced" />
                  <Label htmlFor="advanced" className="cursor-pointer font-normal">
                    Advanced
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Interview Duration */}
            <div>
              <h3 className="mb-3 text-lg font-medium">Interview Duration</h3>
              <Select defaultValue="15">
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10 minutes</SelectItem>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="20">20 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleStartInterview}
            disabled={!selectedTopic}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Start Mock Interview
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
