"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AccountSettings } from "@/components/settings/account-settings"
import { NotificationSettings } from "@/components/settings/notification-settings"
import { LanguageSettings } from "@/components/settings/language-settings"
import { AccessibilitySettings } from "@/components/settings/accessibility-settings"
import { SettingsSidebar } from "@/components/settings/settings-sidebar"
import { useIsMobile } from "@/hooks/use-mobile"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account")
  const isMobile = useIsMobile()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">Settings</h1>

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Settings sidebar - only visible on desktop */}
        {!isMobile && (
          <div className="w-64 shrink-0">
            <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        )}

        {/* Settings content */}
        <div className="flex-1">
          {/* Mobile tabs - only visible on mobile */}
          {isMobile && (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6 w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="language">Language</TabsTrigger>
                <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
              </TabsList>
            </Tabs>
          )}

          {/* Settings content based on active tab */}
          {activeTab === "account" && <AccountSettings />}
          {activeTab === "notifications" && <NotificationSettings />}
          {activeTab === "language" && <LanguageSettings />}
          {activeTab === "accessibility" && <AccessibilitySettings />}
        </div>
      </div>
    </div>
  )
}
