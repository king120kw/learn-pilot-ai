"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Search, Filter, MessageSquare, BookOpen, Video, Download, Eye } from "lucide-react"

export function ActivityHistory() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterDate, setFilterDate] = useState("all")

  // Mock data - in a real app, this would come from an API or database
  const mockInterviews = [
    {
      id: "int-1",
      title: "Frontend Developer Interview",
      date: "May 12, 2025",
      time: "2:00 PM - 3:00 PM",
      participant: "Sarah Johnson",
      score: 85,
      feedback: "Good technical knowledge. Work on explaining complex concepts more clearly.",
    },
    {
      id: "int-2",
      title: "React Developer Interview",
      date: "May 5, 2025",
      time: "10:00 AM - 11:00 AM",
      participant: "Michael Chen",
      score: 78,
      feedback: "Strong on React fundamentals. Need more practice with state management patterns.",
    },
    {
      id: "int-3",
      title: "JavaScript Fundamentals Interview",
      date: "April 28, 2025",
      time: "3:30 PM - 4:30 PM",
      participant: "Emily Rodriguez",
      score: 92,
      feedback: "Excellent understanding of core JavaScript concepts. Very well prepared.",
    },
  ]

  const studySessions = [
    {
      id: "study-1",
      title: "JavaScript Promises Deep Dive",
      date: "May 14, 2025",
      time: "1:00 PM - 2:30 PM",
      type: "Self-study",
      topics: ["Promises", "Async/Await", "Error Handling"],
      notes: "Reviewed promise chaining and error propagation. Created practice examples.",
    },
    {
      id: "study-2",
      title: "React Hooks Workshop",
      date: "May 8, 2025",
      time: "11:00 AM - 12:30 PM",
      type: "Group Session",
      topics: ["useState", "useEffect", "Custom Hooks"],
      notes: "Learned about dependency arrays in useEffect and memoization techniques.",
    },
    {
      id: "study-3",
      title: "CSS Grid & Flexbox Practice",
      date: "May 2, 2025",
      time: "9:00 AM - 10:30 AM",
      type: "Tutoring",
      topics: ["CSS Grid", "Flexbox", "Responsive Design"],
      notes: "Worked through complex layout challenges. Created responsive dashboard examples.",
    },
    {
      id: "study-4",
      title: "TypeScript Fundamentals",
      date: "April 25, 2025",
      time: "2:00 PM - 3:30 PM",
      type: "Video Course",
      topics: ["Types", "Interfaces", "Generics"],
      notes: "Completed introduction to TypeScript. Started working on type challenges.",
    },
  ]

  const tutoringSessions = [
    {
      id: "tutor-1",
      title: "Advanced JavaScript Concepts",
      date: "May 10, 2025",
      time: "4:00 PM - 5:00 PM",
      tutor: "Dr. James Wilson",
      topics: ["Closures", "Prototypes", "This keyword"],
      notes: "Clarified misconceptions about closures and the 'this' keyword in different contexts.",
    },
    {
      id: "tutor-2",
      title: "React Performance Optimization",
      date: "May 3, 2025",
      time: "1:00 PM - 2:00 PM",
      tutor: "Lisa Chang",
      topics: ["Memoization", "React.memo", "useMemo", "useCallback"],
      notes: "Learned techniques to prevent unnecessary re-renders and optimize component performance.",
    },
    {
      id: "tutor-3",
      title: "Data Structures in JavaScript",
      date: "April 22, 2025",
      time: "11:00 AM - 12:00 PM",
      tutor: "Prof. Robert Martinez",
      topics: ["Arrays", "Objects", "Maps", "Sets"],
      notes: "Discussed time complexity and choosing the right data structure for different scenarios.",
    },
  ]

  // Filter functions
  const filterActivities = (activities: any[], type: string) => {
    return activities.filter((activity) => {
      const matchesSearch =
        searchQuery === "" ||
        activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (activity.topics && activity.topics.some((t: string) => t.toLowerCase().includes(searchQuery.toLowerCase())))

      const matchesDate =
        filterDate === "all" ||
        (filterDate === "recent" && new Date(activity.date) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)) ||
        (filterDate === "month" && new Date(activity.date) >= new Date(Date.now() - 30 * 24 * 60 * 60 * 1000))

      return matchesSearch && matchesDate
    })
  }

  const filteredInterviews = filterActivities(mockInterviews, "interview")
  const filteredStudySessions = filterActivities(studySessions, "study")
  const filteredTutoringSessions = filterActivities(tutoringSessions, "tutoring")

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search activities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Select value={filterDate} onValueChange={setFilterDate}>
                <SelectTrigger className="w-[180px]">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Filter by date" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="recent">Last 7 Days</SelectItem>
                  <SelectItem value="month">Last 30 Days</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>More Filters</span>
              </Button>

              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activity Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-4">
          <TabsTrigger value="all">All Activities</TabsTrigger>
          <TabsTrigger value="interviews">Mock Interviews</TabsTrigger>
          <TabsTrigger value="study">Study Sessions</TabsTrigger>
          <TabsTrigger value="tutoring">Tutoring Sessions</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="space-y-6">
            {/* Mock Interviews Section */}
            {filteredInterviews.length > 0 && (
              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-900">Mock Interviews</h3>
                <div className="space-y-4">
                  {filteredInterviews.map((interview) => (
                    <Card key={interview.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                          <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                              <MessageSquare className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{interview.title}</h4>
                              <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                                <div className="flex items-center">
                                  <Calendar className="mr-1 h-4 w-4" />
                                  {interview.date}
                                </div>
                                <div className="flex items-center">
                                  <Clock className="mr-1 h-4 w-4" />
                                  {interview.time}
                                </div>
                              </div>
                              <div className="mt-2 flex items-center gap-2">
                                <Badge variant="outline" className="bg-blue-50">
                                  Score: {interview.score}%
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Study Sessions Section */}
            {filteredStudySessions.length > 0 && (
              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-900">Study Sessions</h3>
                <div className="space-y-4">
                  {filteredStudySessions.map((session) => (
                    <Card key={session.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                          <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                              <BookOpen className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{session.title}</h4>
                              <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                                <div className="flex items-center">
                                  <Calendar className="mr-1 h-4 w-4" />
                                  {session.date}
                                </div>
                                <div className="flex items-center">
                                  <Clock className="mr-1 h-4 w-4" />
                                  {session.time}
                                </div>
                              </div>
                              <div className="mt-2 flex flex-wrap gap-2">
                                {session.topics.map((topic: string, index: number) => (
                                  <Badge key={index} variant="outline" className="bg-green-50">
                                    {topic}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            View Notes
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Tutoring Sessions Section */}
            {filteredTutoringSessions.length > 0 && (
              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-900">Tutoring Sessions</h3>
                <div className="space-y-4">
                  {filteredTutoringSessions.map((session) => (
                    <Card key={session.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                          <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                              <Video className="h-5 w-5 text-purple-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{session.title}</h4>
                              <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                                <div className="flex items-center">
                                  <Calendar className="mr-1 h-4 w-4" />
                                  {session.date}
                                </div>
                                <div className="flex items-center">
                                  <Clock className="mr-1 h-4 w-4" />
                                  {session.time}
                                </div>
                              </div>
                              <div className="mt-2 flex flex-wrap gap-2">
                                {session.topics.map((topic: string, index: number) => (
                                  <Badge key={index} variant="outline" className="bg-purple-50">
                                    {topic}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            View Recording
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {filteredInterviews.length === 0 &&
              filteredStudySessions.length === 0 &&
              filteredTutoringSessions.length === 0 && (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                      <Search className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">No activities found</h3>
                    <p className="mt-1 text-gray-500">
                      {searchQuery
                        ? `No activities match your search for "${searchQuery}"`
                        : "You don't have any recorded activities yet"}
                    </p>
                  </CardContent>
                </Card>
              )}
          </div>
        </TabsContent>

        <TabsContent value="interviews">
          <div className="space-y-4">
            {filteredInterviews.length > 0 ? (
              filteredInterviews.map((interview) => (
                <Card key={interview.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                          <MessageSquare className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{interview.title}</h4>
                          <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-4 w-4" />
                              {interview.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              {interview.time}
                            </div>
                          </div>
                          <div className="mt-2">
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">Interviewer:</span> {interview.participant}
                            </p>
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">Feedback:</span> {interview.feedback}
                            </p>
                          </div>
                          <div className="mt-2 flex items-center gap-2">
                            <Badge variant="outline" className="bg-blue-50">
                              Score: {interview.score}%
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                    <MessageSquare className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">No interviews found</h3>
                  <p className="mt-1 text-gray-500">
                    {searchQuery
                      ? `No interviews match your search for "${searchQuery}"`
                      : "You haven't participated in any mock interviews yet"}
                  </p>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Schedule an Interview</Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="study">
          <div className="space-y-4">
            {filteredStudySessions.length > 0 ? (
              filteredStudySessions.map((session) => (
                <Card key={session.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                          <BookOpen className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{session.title}</h4>
                          <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-4 w-4" />
                              {session.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              {session.time}
                            </div>
                            <div>
                              <Badge variant="secondary">{session.type}</Badge>
                            </div>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {session.topics.map((topic: string, index: number) => (
                              <Badge key={index} variant="outline" className="bg-green-50">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                          <p className="mt-2 text-sm text-gray-600">
                            <span className="font-medium">Notes:</span> {session.notes}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        View Notes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                    <BookOpen className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">No study sessions found</h3>
                  <p className="mt-1 text-gray-500">
                    {searchQuery
                      ? `No study sessions match your search for "${searchQuery}"`
                      : "You haven't recorded any study sessions yet"}
                  </p>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Start Studying</Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="tutoring">
          <div className="space-y-4">
            {filteredTutoringSessions.length > 0 ? (
              filteredTutoringSessions.map((session) => (
                <Card key={session.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                          <Video className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{session.title}</h4>
                          <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-4 w-4" />
                              {session.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              {session.time}
                            </div>
                          </div>
                          <p className="mt-2 text-sm text-gray-600">
                            <span className="font-medium">Tutor:</span> {session.tutor}
                          </p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {session.topics.map((topic: string, index: number) => (
                              <Badge key={index} variant="outline" className="bg-purple-50">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                          <p className="mt-2 text-sm text-gray-600">
                            <span className="font-medium">Notes:</span> {session.notes}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        View Recording
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                    <Video className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">No tutoring sessions found</h3>
                  <p className="mt-1 text-gray-500">
                    {searchQuery
                      ? `No tutoring sessions match your search for "${searchQuery}"`
                      : "You haven't participated in any tutoring sessions yet"}
                  </p>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Book a Tutor</Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
