import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Clock, Calendar, BookOpen, TrendingUp, BarChart3 } from "lucide-react"

export function LearningStats() {
  // Mock data - in a real app, this would come from an API or database
  const overviewStats = {
    totalSessions: 42,
    totalHours: 68,
    averageScore: 85,
    skillsMastered: 12,
    currentStreak: 8,
    longestStreak: 14,
  }

  const weeklyActivity = [65, 45, 75, 50, 80, 30, 60]
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  const topSkills = [
    { name: "JavaScript", progress: 85 },
    { name: "React", progress: 72 },
    { name: "Node.js", progress: 65 },
    { name: "TypeScript", progress: 58 },
    { name: "CSS/SCSS", progress: 80 },
  ]

  const recentAchievements = [
    { name: "Interview Master", description: "Completed 10 mock interviews", date: "May 10, 2025" },
    { name: "Study Streak", description: "Maintained a 7-day study streak", date: "May 8, 2025" },
    { name: "Quick Learner", description: "Mastered 5 skills in one month", date: "April 30, 2025" },
  ]

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="flex flex-row items-center p-6">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Total Sessions</p>
              <h3 className="text-2xl font-bold text-gray-900">{overviewStats.totalSessions}</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-row items-center p-6">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Learning Hours</p>
              <h3 className="text-2xl font-bold text-gray-900">{overviewStats.totalHours} hrs</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-row items-center p-6">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Average Score</p>
              <h3 className="text-2xl font-bold text-gray-900">{overviewStats.averageScore}%</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-row items-center p-6">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
              <BookOpen className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Skills Mastered</p>
              <h3 className="text-2xl font-bold text-gray-900">{overviewStats.skillsMastered}</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-row items-center p-6">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <TrendingUp className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Current Streak</p>
              <h3 className="text-2xl font-bold text-gray-900">{overviewStats.currentStreak} days</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-row items-center p-6">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
              <BarChart3 className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Longest Streak</p>
              <h3 className="text-2xl font-bold text-gray-900">{overviewStats.longestStreak} days</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Stats */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Weekly Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
            <CardDescription>Your learning activity over the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full">
              <div className="flex h-full items-end justify-between gap-2">
                {weeklyActivity.map((value, index) => (
                  <div key={index} className="flex w-full flex-col items-center">
                    <div
                      className="w-full rounded-t-sm bg-blue-600 transition-all hover:bg-blue-700"
                      style={{ height: `${value}%` }}
                    ></div>
                    <div className="mt-2 text-xs font-medium">{weekdays[index]}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Skills & Achievements */}
        <Card>
          <CardHeader>
            <Tabs defaultValue="skills">
              <div className="flex items-center justify-between">
                <CardTitle>Progress & Achievements</CardTitle>
                <TabsList>
                  <TabsTrigger value="skills">Top Skills</TabsTrigger>
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="skills">
              <TabsContent value="skills" className="mt-0">
                <div className="space-y-4">
                  {topSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-gray-500">{skill.progress}%</span>
                      </div>
                      <Progress value={skill.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="achievements" className="mt-0">
                <div className="space-y-4">
                  {recentAchievements.map((achievement, index) => (
                    <div key={index} className="rounded-lg border p-3">
                      <div className="flex items-start">
                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                          <Award className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{achievement.name}</h4>
                          <p className="text-sm text-gray-600">{achievement.description}</p>
                          <p className="mt-1 text-xs text-gray-500">{achievement.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
