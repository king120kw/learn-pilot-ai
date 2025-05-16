import { TrendingUp, Zap, Award } from "lucide-react"

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {/* Progress Card */}
      <div className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
        <div className="flex items-center">
          <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <TrendingUp className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Overall Progress</p>
            <div className="mt-1 flex items-baseline">
              <h3 className="text-2xl font-bold text-gray-900">68%</h3>
              <span className="ml-2 text-sm font-medium text-green-600">+5% this week</span>
            </div>
          </div>
        </div>
        <div className="mt-4 h-2 w-full rounded-full bg-gray-100">
          <div className="h-2 rounded-full bg-blue-600" style={{ width: "68%" }}></div>
        </div>
      </div>

      {/* Streak Card */}
      <div className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
        <div className="flex items-center">
          <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
            <Zap className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Current Streak</p>
            <div className="mt-1 flex items-baseline">
              <h3 className="text-2xl font-bold text-gray-900">12 days</h3>
              <span className="ml-2 text-sm font-medium text-orange-600">Keep it up!</span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex space-x-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className={`h-2 flex-1 rounded-full ${i < 5 ? "bg-orange-500" : "bg-gray-200"}`}></div>
          ))}
        </div>
      </div>

      {/* Achievements Card */}
      <div className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
        <div className="flex items-center">
          <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
            <Award className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Achievements</p>
            <div className="mt-1 flex items-baseline">
              <h3 className="text-2xl font-bold text-gray-900">8 earned</h3>
              <span className="ml-2 text-sm font-medium text-purple-600">3 in progress</span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex -space-x-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-200 text-xs font-medium text-purple-700 ring-2 ring-white"
            >
              {i + 1}
            </div>
          ))}
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xs font-medium text-gray-700 ring-2 ring-white">
            +4
          </div>
        </div>
      </div>
    </div>
  )
}
