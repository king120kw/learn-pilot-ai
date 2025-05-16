import { UserGreeting } from "@/components/user-greeting"
import { StatsCards } from "@/components/stats-cards"
import { RecentActivities } from "@/components/recent-activities"
import { RecommendedTopics } from "@/components/recommended-topics"
import { UpcomingSessions } from "@/components/upcoming-sessions"
import { QuickAccessButtons } from "@/components/quick-access-buttons"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <div className="flex flex-1">
        {/* Main content */}
        <div className="flex-1 overflow-y-auto">
          <main className="container mx-auto px-4 py-6 lg:px-8">
            {/* Top area with greeting and stats */}
            <div className="mb-8">
              <UserGreeting />
              <StatsCards />
            </div>

            {/* Quick access buttons - visible on mobile */}
            <div className="mb-8 lg:hidden">
              <QuickAccessButtons />
            </div>

            {/* Main dashboard content */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <RecentActivities />
                <div className="mt-6">
                  <RecommendedTopics />
                </div>
              </div>
              <div>
                <UpcomingSessions />
                {/* Quick access buttons - visible on desktop */}
                <div className="mt-6 hidden lg:block">
                  <QuickAccessButtons />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
