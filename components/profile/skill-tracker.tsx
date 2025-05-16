import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, BookOpen, AlertTriangle, CheckCircle, Clock, Calendar, Eye } from "lucide-react"

export function SkillTracker() {
  // Mock data - in a real app, this would come from an API or database
  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: "Advanced", progress: 90, lastPracticed: "2 days ago" },
        { name: "JavaScript", level: "Advanced", progress: 85, lastPracticed: "1 day ago" },
        { name: "React", level: "Intermediate", progress: 72, lastPracticed: "3 days ago" },
        { name: "TypeScript", level: "Intermediate", progress: 65, lastPracticed: "1 week ago" },
        { name: "Redux", level: "Beginner", progress: 45, lastPracticed: "2 weeks ago" },
      ],
    },
    {
      id: "backend",
      name: "Backend Development",
      skills: [
        { name: "Node.js", level: "Intermediate", progress: 68, lastPracticed: "4 days ago" },
        { name: "Express", level: "Intermediate", progress: 70, lastPracticed: "4 days ago" },
        { name: "MongoDB", level: "Beginner", progress: 55, lastPracticed: "1 week ago" },
        { name: "SQL", level: "Beginner", progress: 40, lastPracticed: "3 weeks ago" },
        { name: "GraphQL", level: "Beginner", progress: 30, lastPracticed: "1 month ago" },
      ],
    },
    {
      id: "tools",
      name: "Tools & Methodologies",
      skills: [
        { name: "Git", level: "Advanced", progress: 88, lastPracticed: "2 days ago" },
        { name: "Docker", level: "Beginner", progress: 35, lastPracticed: "1 month ago" },
        { name: "CI/CD", level: "Beginner", progress: 30, lastPracticed: "1 month ago" },
        { name: "Agile/Scrum", level: "Intermediate", progress: 75, lastPracticed: "1 week ago" },
        { name: "Testing", level: "Intermediate", progress: 60, lastPracticed: "2 weeks ago" },
      ],
    },
  ]

  const recommendedSkills = [
    {
      name: "Redux",
      reason: "Complement your React skills",
      currentLevel: "Beginner",
      targetLevel: "Intermediate",
    },
    {
      name: "TypeScript",
      reason: "Enhance your JavaScript development",
      currentLevel: "Intermediate",
      targetLevel: "Advanced",
    },
    {
      name: "GraphQL",
      reason: "Modern API development",
      currentLevel: "Beginner",
      targetLevel: "Intermediate",
    },
  ]

  const skillAssessments = [
    {
      id: "assessment-1",
      name: "Frontend Developer Assessment",
      date: "May 5, 2025",
      score: 78,
      skills: ["HTML/CSS", "JavaScript", "React"],
      strengths: ["DOM Manipulation", "CSS Layouts"],
      weaknesses: ["React Hooks", "Performance Optimization"],
    },
    {
      id: "assessment-2",
      name: "JavaScript Fundamentals",
      date: "April 20, 2025",
      score: 85,
      skills: ["JavaScript"],
      strengths: ["Closures", "Promises", "ES6 Features"],
      weaknesses: ["Prototypal Inheritance"],
    },
    {
      id: "assessment-3",
      name: "Web Development Basics",
      date: "April 10, 2025",
      score: 92,
      skills: ["HTML/CSS", "JavaScript", "Responsive Design"],
      strengths: ["Semantic HTML", "Flexbox", "CSS Grid"],
      weaknesses: ["CSS Animations"],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-amber-100 text-amber-800"
      case "Intermediate":
        return "bg-blue-100 text-blue-800"
      case "Advanced":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-green-600"
    if (progress >= 60) return "bg-blue-600"
    if (progress >= 40) return "bg-amber-600"
    return "bg-red-600"
  }

  return (
    <div className="space-y-6">
      {/* Skill Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Skill Overview</CardTitle>
          <CardDescription>Track your progress across different skill categories</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={skillCategories[0].id} className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-3">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="rounded-lg border p-4">
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium text-gray-900">{skill.name}</h4>
                            <Badge className={getLevelColor(skill.level)}>{skill.level}</Badge>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">Last practiced: {skill.lastPracticed}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{skill.progress}%</span>
                          <Button variant="outline" size="sm">
                            Practice
                          </Button>
                        </div>
                      </div>
                      <div className="mt-3">
                        <Progress value={skill.progress} className={`h-2 ${getProgressColor(skill.progress)}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Skill Recommendations and Assessments */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Skill Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle>Recommended Skills</CardTitle>
            <CardDescription>Skills to focus on based on your learning path</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendedSkills.map((skill, index) => (
                <div key={index} className="rounded-lg border p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                        <h4 className="font-medium text-gray-900">{skill.name}</h4>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-amber-50 text-amber-800">
                            {skill.currentLevel}
                          </Badge>
                          <span className="text-gray-400">→</span>
                          <Badge variant="outline" className="bg-blue-50 text-blue-800">
                            {skill.targetLevel}
                          </Badge>
                        </div>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">{skill.reason}</p>
                      <div className="mt-3 flex justify-end">
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          Start Learning
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skill Assessments */}
        <Card>
          <CardHeader>
            <CardTitle>Skill Assessments</CardTitle>
            <CardDescription>Results from your skill assessment tests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {skillAssessments.map((assessment) => (
                <div key={assessment.id} className="rounded-lg border p-4">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">{assessment.name}</h4>
                      <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {assessment.date}
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {assessment.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="bg-gray-50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-green-100 text-center">
                      <span className="text-lg font-bold text-green-600">{assessment.score}</span>
                      <span className="text-xs text-gray-500">Score</span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="rounded-md bg-green-50 p-3">
                      <div className="mb-1 flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-800">Strengths</span>
                      </div>
                      <ul className="ml-5 list-disc text-sm text-green-700">
                        {assessment.strengths.map((strength, index) => (
                          <li key={index}>{strength}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-md bg-amber-50 p-3">
                      <div className="mb-1 flex items-center gap-1">
                        <AlertTriangle className="h-4 w-4 text-amber-600" />
                        <span className="font-medium text-amber-800">Areas to Improve</span>
                      </div>
                      <ul className="ml-5 list-disc text-sm text-amber-700">
                        {assessment.weaknesses.map((weakness, index) => (
                          <li key={index}>{weakness}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-3 flex justify-end">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700">Take New Assessment</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Learning Path */}
      <Card>
        <CardHeader>
          <CardTitle>Learning Path</CardTitle>
          <CardDescription>Your personalized learning journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>

            <div className="space-y-8">
              {/* Completed Step */}
              <div className="relative pl-10">
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-4 border-green-100 bg-green-500 text-white">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                  <h4 className="font-medium text-gray-900">Web Development Fundamentals</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Master the basics of HTML, CSS, and JavaScript to build interactive websites.
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>Completed on April 15, 2025</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <Badge variant="outline" className="bg-green-100 text-green-800">
                      HTML/CSS
                    </Badge>
                    <Badge variant="outline" className="bg-green-100 text-green-800">
                      JavaScript
                    </Badge>
                    <Badge variant="outline" className="bg-green-100 text-green-800">
                      Responsive Design
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Current Step */}
              <div className="relative pl-10">
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-4 border-blue-100 bg-blue-500 text-white">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <h4 className="font-medium text-gray-900">Frontend Frameworks</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Learn modern frontend frameworks like React to build dynamic web applications.
                  </p>
                  <div className="mt-2">
                    <div className="mb-1 flex justify-between text-xs">
                      <span className="font-medium text-blue-800">In Progress - 65% Complete</span>
                    </div>
                    <Progress value={65} className="h-2 bg-blue-200" />
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <Badge variant="outline" className="bg-blue-100 text-blue-800">
                      React
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100 text-blue-800">
                      State Management
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100 text-blue-800">
                      Component Design
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Upcoming Step */}
              <div className="relative pl-10">
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-4 border-gray-200 bg-white text-gray-400">
                  <span className="text-sm font-medium">3</span>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium text-gray-900">Backend Development</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Build server-side applications with Node.js, Express, and databases.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Express</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                    <Badge variant="outline">API Design</Badge>
                  </div>
                </div>
              </div>

              {/* Upcoming Step */}
              <div className="relative pl-10">
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-4 border-gray-200 bg-white text-gray-400">
                  <span className="text-sm font-medium">4</span>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium text-gray-900">Full Stack Projects</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Apply your skills to build complete web applications from frontend to backend.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <Badge variant="outline">Project Planning</Badge>
                    <Badge variant="outline">Full Stack Integration</Badge>
                    <Badge variant="outline">Deployment</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
