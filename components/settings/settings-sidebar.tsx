"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Bell, Globe, Eye } from "lucide-react"

interface SettingsSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function SettingsSidebar({ activeTab, setActiveTab }: SettingsSidebarProps) {
  const menuItems = [
    { id: "account", label: "Account", icon: <User className="h-4 w-4" /> },
    { id: "notifications", label: "Notifications", icon: <Bell className="h-4 w-4" /> },
    { id: "language", label: "Language", icon: <Globe className="h-4 w-4" /> },
    { id: "accessibility", label: "Accessibility", icon: <Eye className="h-4 w-4" /> },
  ]

  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={activeTab === item.id ? "default" : "ghost"}
            className={`justify-start rounded-none ${
              activeTab === item.id ? "bg-blue-600 text-white hover:bg-blue-700" : ""
            }`}
            onClick={() => setActiveTab(item.id)}
          >
            <div className="flex items-center">
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </div>
          </Button>
        ))}
      </div>
    </Card>
  )
}
