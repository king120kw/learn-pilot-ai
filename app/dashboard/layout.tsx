import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { MobileHeader } from "@/components/mobile-header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - hidden on mobile */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile header - visible only on mobile */}
      <div className="fixed top-0 z-30 w-full md:hidden">
        <MobileHeader />
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto pt-16 md:pt-0">{children}</div>
    </div>
  )
}
