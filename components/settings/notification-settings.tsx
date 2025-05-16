"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Save, Bell, Mail, MessageSquare, Calendar, Clock, BookOpen } from "lucide-react"

export function NotificationSettings() {
  // Email notification settings
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [emailFrequency, setEmailFrequency] = useState("immediate")
  const [emailSessionReminders, setEmailSessionReminders] = useState(true)
  const [emailStudyReminders, setEmailStudyReminders] = useState(true)
  const [emailWeeklyDigest, setEmailWeeklyDigest] = useState(true)
  const [emailMarketingUpdates, setEmailMarketingUpdates] = useState(false)

  // App notification settings
  const [appNotifications, setAppNotifications] = useState(true)
  const [appSessionReminders, setAppSessionReminders] = useState(true)
  const [appStudyReminders, setAppStudyReminders] = useState(true)
  const [appAchievements, setAppAchievements] = useState(true)
  const [appMessages, setAppMessages] = useState(true)

  const handleSaveNotifications = () => {
    // In a real app, this would save to a database
    alert("Notification preferences saved successfully!")
  }

  return (
    <div className="space-y-6">
      {/* Email Notifications */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-blue-600" />
            <CardTitle>Email Notifications</CardTitle>
          </div>
          <CardDescription>Manage how you receive email notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-notifications" className="text-base">
                Email Notifications
              </Label>
              <p className="text-sm text-gray-500">Enable or disable all email notifications</p>
            </div>
            <Switch id="email-notifications" checked={emailNotifications} onCheckedChange={setEmailNotifications} />
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email-frequency">Email Frequency</Label>
              <Select value={emailFrequency} onValueChange={setEmailFrequency} disabled={!emailNotifications}>
                <SelectTrigger id="email-frequency">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediate</SelectItem>
                  <SelectItem value="daily">Daily Digest</SelectItem>
                  <SelectItem value="weekly">Weekly Digest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900">Notification Types</h3>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <Label htmlFor="email-session-reminders" className="text-sm">
                    Session Reminders
                  </Label>
                </div>
                <Switch
                  id="email-session-reminders"
                  checked={emailSessionReminders}
                  onCheckedChange={setEmailSessionReminders}
                  disabled={!emailNotifications}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <Label htmlFor="email-study-reminders" className="text-sm">
                    Study Reminders
                  </Label>
                </div>
                <Switch
                  id="email-study-reminders"
                  checked={emailStudyReminders}
                  onCheckedChange={setEmailStudyReminders}
                  disabled={!emailNotifications}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-gray-500" />
                  <Label htmlFor="email-weekly-digest" className="text-sm">
                    Weekly Learning Digest
                  </Label>
                </div>
                <Switch
                  id="email-weekly-digest"
                  checked={emailWeeklyDigest}
                  onCheckedChange={setEmailWeeklyDigest}
                  disabled={!emailNotifications}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <Label htmlFor="email-marketing-updates" className="text-sm">
                    Marketing Updates
                  </Label>
                </div>
                <Switch
                  id="email-marketing-updates"
                  checked={emailMarketingUpdates}
                  onCheckedChange={setEmailMarketingUpdates}
                  disabled={!emailNotifications}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* App Notifications */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-blue-600" />
            <CardTitle>App Notifications</CardTitle>
          </div>
          <CardDescription>Manage in-app notifications and alerts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="app-notifications" className="text-base">
                App Notifications
              </Label>
              <p className="text-sm text-gray-500">Enable or disable all in-app notifications</p>
            </div>
            <Switch id="app-notifications" checked={appNotifications} onCheckedChange={setAppNotifications} />
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900">Notification Types</h3>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <Label htmlFor="app-session-reminders" className="text-sm">
                  Session Reminders
                </Label>
              </div>
              <Switch
                id="app-session-reminders"
                checked={appSessionReminders}
                onCheckedChange={setAppSessionReminders}
                disabled={!appNotifications}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <Label htmlFor="app-study-reminders" className="text-sm">
                  Study Reminders
                </Label>
              </div>
              <Switch
                id="app-study-reminders"
                checked={appStudyReminders}
                onCheckedChange={setAppStudyReminders}
                disabled={!appNotifications}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-gray-500" />
                <Label htmlFor="app-achievements" className="text-sm">
                  Achievements & Milestones
                </Label>
              </div>
              <Switch
                id="app-achievements"
                checked={appAchievements}
                onCheckedChange={setAppAchievements}
                disabled={!appNotifications}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-gray-500" />
                <Label htmlFor="app-messages" className="text-sm">
                  Messages & Comments
                </Label>
              </div>
              <Switch
                id="app-messages"
                checked={appMessages}
                onCheckedChange={setAppMessages}
                disabled={!appNotifications}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveNotifications} className="ml-auto bg-blue-600 hover:bg-blue-700">
            <Save className="mr-2 h-4 w-4" />
            Save Notification Settings
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
