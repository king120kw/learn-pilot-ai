export function RecommendedTopics() {
  const topics = [
    {
      id: 1,
      title: "JavaScript Promises",
      category: "Programming",
      difficulty: "Intermediate",
      progress: 25,
    },
    {
      id: 2,
      title: "React Component Lifecycle",
      category: "Web Development",
      difficulty: "Advanced",
      progress: 10,
    },
    {
      id: 3,
      title: "CSS Grid Layout",
      category: "Web Design",
      difficulty: "Beginner",
      progress: 60,
    },
  ]

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Recommended Topics</h2>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">View All</button>
      </div>

      <div className="space-y-4">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="rounded-lg border border-gray-100 p-4 transition-all hover:border-blue-100 hover:shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-900">{topic.title}</h3>
              <span
                className={`rounded-full px-2 py-1 text-xs font-medium ${
                  topic.difficulty === "Beginner"
                    ? "bg-green-100 text-green-800"
                    : topic.difficulty === "Intermediate"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                }`}
              >
                {topic.difficulty}
              </span>
            </div>
            <p className="mt-1 text-sm text-gray-500">{topic.category}</p>
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Progress</span>
                <span className="font-medium text-gray-700">{topic.progress}%</span>
              </div>
              <div className="mt-1 h-1.5 w-full rounded-full bg-gray-100">
                <div className="h-1.5 rounded-full bg-blue-600" style={{ width: `${topic.progress}%` }}></div>
              </div>
            </div>
            <button className="mt-3 w-full rounded-lg border border-blue-600 py-1.5 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50">
              Continue Learning
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
