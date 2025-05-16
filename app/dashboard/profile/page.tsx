"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileHeader } from "@/components/profile/profile-header"
import { LearningStats } from "@/components/profile/learning-stats"
import { ActivityHistory } from "@/components/profile/activity-history"
import { SkillTracker } from "@/components/profile/skill-tracker"
import { ProfilePreferences } from "@/components/profile/profile-preferences"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock user data - in a real app, this would come from an API or database
  const userData = {
    id: "user123",
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    role: "Student",
    joinDate: "January 2023",
    profileImage: "/placeholder.svg?height=200&width=200",
    bio: "Software engineering student passionate about web development and AI. Looking to improve my technical interview skills and expand my knowledge in React and Node.js.",
    location: "San Francisco, CA",
    education: "Computer Science, Stanford University",
    socialLinks: {
      github: "github.com/alexjohnson",
      linkedin: "linkedin.com/in/alexjohnson",
      twitter: "twitter.com/alexjohnson",
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">My Profile</h1>

      <ProfileHeader userData={userData} />

      <div className="mt-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="history">Activity History</TabsTrigger>
            <TabsTrigger value="skills">Skills & Progress</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <LearningStats />
          </TabsContent>

          <TabsContent value="history">
            <ActivityHistory />
          </TabsContent>

          <TabsContent value="skills">
            <SkillTracker />
          </TabsContent>

          <TabsContent value="preferences">
            <ProfilePreferences userData={userData} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
