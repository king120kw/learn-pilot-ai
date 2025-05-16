"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Award, BookOpen, TrendingUp, AlertTriangle } from "lucide-react"

export function PerformanceTracker() {
  const [timeRange, setTimeRange] = useState("week")

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-xl font-bold text-gray-900">Performance Analytics</h2>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">Last 7 days</SelectItem>
            <SelectItem value="month">Last 30 days</SelectItem>
            <SelectItem value="quarter">Last 3 months</SelectItem>
            <SelectItem value="year">Last year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex flex-row items-center p-6">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Study Sessions</p>
              <h3 className="text-2xl font-bold text-gray-900">24</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-row items-center p-6">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Study Time</p>
              <h3 className="text-2xl font-bold text-gray-900">8.5 hrs</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-row items-center p-6">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Cards Reviewed</p>
              <h3 className="text-2xl font-bold text-gray-900">342</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-row items-center p-6">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
              <Award className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Retention Rate</p>
              <h3 className="text-2xl font-bold text-gray-900">84%</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="decks">Deck Performance</TabsTrigger>
          <TabsTrigger value="weak-areas">Weak Areas</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Study Activity</CardTitle>
                <CardDescription>Your study sessions over time</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                {/* This would be a chart in a real app */}
                <div className="h-64 w-full rounded-lg bg-gray-100 p-4">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-center text-gray-500">
                      [Study Activity Chart]
                      <br />
                      Shows frequency and duration of study sessions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Retention Rate</CardTitle>
                <CardDescription>How well you remember cards over time</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                {/* This would be a chart in a real app */}
                <div className="h-64 w-full rounded-lg bg-gray-100 p-4">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-center text-gray-500">
                      [Retention Rate Chart]
                      <br />
                      Shows percentage of cards remembered correctly
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>Your overall learning journey</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                {/* This would be a chart in a real app */}
                <div className="h-64 w-full rounded-lg bg-gray-100 p-4">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-center text-gray-500">
                      [Learning Progress Chart]
                      <br />
                      Shows cumulative cards learned and mastery level over time
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="decks">
          <Card>
            <CardHeader>
              <CardTitle>Deck Performance</CardTitle>
              <CardDescription>How you're performing across different decks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* JavaScript Fundamentals */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">JavaScript Fundamentals</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-700">Mastery:</span>
                      <span className="text-sm font-bold text-green-600">92%</span>
                    </div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-100">
                    <div className="h-2 rounded-full bg-green-600" style={{ width: "92%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>42 cards total</span>
                    <span>Last studied: 2 days ago</span>
                  </div>
                </div>

                {/* React Hooks */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">React Hooks</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-700">Mastery:</span>
                      <span className="text-sm font-bold text-blue-600">78%</span>
                    </div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-100">
                    <div className="h-2 rounded-full bg-blue-600" style={{ width: "78%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>28 cards total</span>
                    <span>Last studied: Yesterday</span>
                  </div>
                </div>

                {/* CSS Grid & Flexbox */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">CSS Grid & Flexbox</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-700">Mastery:</span>
                      <span className="text-sm font-bold text-yellow-600">65%</span>
                    </div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-100">
                    <div className="h-2 rounded-full bg-yellow-600" style={{ width: "65%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>35 cards total</span>
                    <span>Last studied: 3 days ago</span>
                  </div>
                </div>

                {/* TypeScript Basics */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">TypeScript Basics</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-700">Mastery:</span>
                      <span className="text-sm font-bold text-red-600">42%</span>
                    </div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-100">
                    <div className="h-2 rounded-full bg-red-600" style={{ width: "42%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>50 cards total</span>
                    <span>Last studied: 1 week ago</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weak-areas">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Weak Areas</CardTitle>
                <CardDescription>Cards and topics you're struggling with</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Difficult Cards */}
                  <div className="rounded-lg border border-red-100 bg-red-50 p-4">
                    <div className="mb-3 flex items-center">
                      <AlertTriangle className="mr-2 h-5 w-5 text-red-600" />
                      <h3 className="font-medium text-gray-900">Difficult Cards</h3>
                    </div>
                    <ul className="space-y-2">
                      <li className="rounded-md border border-red-200 bg-white p-3">
                        <p className="font-medium text-gray-900">What is hoisting in JavaScript?</p>
                        <p className="mt-1 text-sm text-gray-500">Answered incorrectly 3 times</p>
                      </li>
                      <li className="rounded-md border border-red-200 bg-white p-3">
                        <p className="font-medium text-gray-900">Explain the event loop in JavaScript.</p>
                        <p className="mt-1 text-sm text-gray-500">Answered incorrectly 2 times</p>
                      </li>
                      <li className="rounded-md border border-red-200 bg-white p-3">
                        <p className="font-medium text-gray-900">What are TypeScript generics?</p>
                        <p className="mt-1 text-sm text-gray-500">Answered incorrectly 4 times</p>
                      </li>
                    </ul>
                    <Button className="mt-3 w-full bg-red-600 hover:bg-red-700">Review Difficult Cards</Button>
                  </div>

                  {/* Topics to Focus On */}
                  <div className="rounded-lg border p-4">
                    <h3 className="mb-3 font-medium text-gray-900">Topics to Focus On</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center justify-between rounded-md bg-gray-50 p-3">
                        <div className="flex items-center">
                          <div className="mr-3 h-2 w-2 rounded-full bg-red-600"></div>
                          <span className="font-medium text-gray-900">TypeScript Generics</span>
                        </div>
                        <span className="text-sm text-red-600">42% mastery</span>
                      </li>
                      <li className="flex items-center justify-between rounded-md bg-gray-50 p-3">
                        <div className="flex items-center">
                          <div className="mr-3 h-2 w-2 rounded-full bg-yellow-600"></div>
                          <span className="font-medium text-gray-900">JavaScript Event Loop</span>
                        </div>
                        <span className="text-sm text-yellow-600">58% mastery</span>
                      </li>
                      <li className="flex items-center justify-between rounded-md bg-gray-50 p-3">
                        <div className="flex items-center">
                          <div className="mr-3 h-2 w-2 rounded-full bg-yellow-600"></div>
                          <span className="font-medium text-gray-900">CSS Grid Layout</span>
                        </div>
                        <span className="text-sm text-yellow-600">65% mastery</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Improvement Suggestions</CardTitle>
                <CardDescription>Tips to boost your learning</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
                    <div className="mb-2 flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5 text-blue-600" />
                      <h3 className="font-medium text-gray-900">Study Consistency</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Try to study more consistently. Your retention is 30% higher when you study daily rather than
                      cramming.
                    </p>
                  </div>

                  <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
                    <div className="mb-2 flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5 text-blue-600" />
                      <h3 className="font-medium text-gray-900">Focus Areas</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Spend more time on TypeScript topics. Your mastery in this area is lower than other subjects.
                    </p>
                  </div>

                  <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
                    <div className="mb-2 flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5 text-blue-600" />
                      <h3 className="font-medium text-gray-900">Review Strategy</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Try reviewing difficult cards more frequently. Increasing review frequency can improve retention
                      by up to 45%.
                    </p>
                  </div>
                </div>

                <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700">Generate Study Plan</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
