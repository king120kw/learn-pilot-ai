"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, Bell, Lock, Shield, Eye, Save } from "lucide-react"

interface ProfilePreferencesProps {
  userData: {
    name: string
    email: string
    role: string
    joinDate: string
    profileImage: string
    bio: string
    location: string
    education: string
    socialLinks: {
      github: string
      linkedin: string
      twitter: string
    }
  }
}

export function ProfilePreferences({ userData }: ProfilePreferencesProps) {
  const [name, setName] = useState(userData.name)
  const [email, setEmail] = useState(userData.email)
  const [bio, setBio] = useState(userData.bio)
  const [location, setLocation] = useState(userData.location)
  const [education, setEducation] = useState(userData.education)
  const [github, setGithub] = useState(userData.socialLinks.github)
  const [linkedin, setLinkedin] = useState(userData.socialLinks.linkedin)
  const [twitter, setTwitter] = useState(userData.socialLinks.twitter)

  // Notification preferences
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [sessionReminders, setSessionReminders] = useState(true)
  const [studyReminders, setStudyReminders] = useState(true)
  const [marketingEmails, setMarketingEmails] = useState(false)
  const [weeklyDigest, setWeeklyDigest] = useState(true)

  // Privacy settings
  const [profileVisibility, setProfileVisibility] = useState("public")
  const [showProgress, setShowProgress] = useState(true)
  const [showActivity, setShowActivity] = useState(true)
  const [allowDataCollection, setAllowDataCollection] = useState(true)

  const handleSaveProfile = () => {
    // In a real app, this would save to a database
    alert("Profile updated successfully!")
  }

  const handleSaveNotifications = () => {
    // In a real app, this would save to a database
    alert("Notification preferences updated successfully!")
  }

  const handleSavePrivacy = () => {
    // In a real app, this would save to a database
    alert("Privacy settings updated successfully!")
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-3">
          <TabsTrigger value="account">Account Settings</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy & Security</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Update your account details and public profile</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="City, Country"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="education">Education</Label>
                    <Input
                      id="education"
                      placeholder="Degree, Institution"
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-medium">Social Links</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="github">GitHub</Label>
                      <Input
                        id="github"
                        placeholder="github.com/username"
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input
                        id="linkedin"
                        placeholder="linkedin.com/in/username"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="twitter">Twitter</Label>
                      <Input
                        id="twitter"
                        placeholder="twitter.com/username"
                        value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-medium">Account Preferences</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                        <SelectItem value="zh">Chinese</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="pst">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                        <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                        <SelectItem value="cst">Central Time (CST)</SelectItem>
                        <SelectItem value="est">Eastern Time (EST)</SelectItem>
                        <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                        <SelectItem value="cet">Central European Time (CET)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSaveProfile} className="bg-blue-600 hover:bg-blue-700">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Control how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-sm text-gray-500">Receive notifications via email</p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-notifications">Push Notifications</Label>
                    <p className="text-sm text-gray-500">Receive notifications on your device</p>
                  </div>
                  <Switch id="push-notifications" checked={pushNotifications} onCheckedChange={setPushNotifications} />
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-medium">Notification Types</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="session-reminders">Session Reminders</Label>
                      <p className="text-sm text-gray-500">Reminders for upcoming interviews and tutoring sessions</p>
                    </div>
                    <Switch id="session-reminders" checked={sessionReminders} onCheckedChange={setSessionReminders} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="study-reminders">Study Reminders</Label>
                      <p className="text-sm text-gray-500">Reminders to maintain your study streak</p>
                    </div>
                    <Switch id="study-reminders" checked={studyReminders} onCheckedChange={setStudyReminders} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="marketing-emails">Marketing Emails</Label>
                      <p className="text-sm text-gray-500">Promotional emails and special offers</p>
                    </div>
                    <Switch id="marketing-emails" checked={marketingEmails} onCheckedChange={setMarketingEmails} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="weekly-digest">Weekly Digest</Label>
                      <p className="text-sm text-gray-500">Weekly summary of your learning progress</p>
                    </div>
                    <Switch id="weekly-digest" checked={weeklyDigest} onCheckedChange={setWeeklyDigest} />
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                <div className="flex items-start">
                  <AlertCircle className="mr-3 mt-0.5 h-5 w-5 text-amber-600" />
                  <div>
                    <h4 className="font-medium text-amber-800">Important Notifications</h4>
                    <p className="text-sm text-amber-700">
                      Some notifications, such as security alerts and account updates, cannot be disabled.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSaveNotifications} className="bg-blue-600 hover:bg-blue-700">
                  <Bell className="mr-2 h-4 w-4" />
                  Save Notification Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle>Privacy & Security</CardTitle>
              <CardDescription>Manage your privacy settings and account security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-4 text-lg font-medium">Privacy Settings</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="profile-visibility">Profile Visibility</Label>
                    <Select value={profileVisibility} onValueChange={setProfileVisibility}>
                      <SelectTrigger id="profile-visibility">
                        <SelectValue placeholder="Select visibility" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public - Anyone can view your profile</SelectItem>
                        <SelectItem value="connections">Connections Only - Only your connections can view</SelectItem>
                        <SelectItem value="private">Private - Only you can view your profile</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="show-progress">Show Learning Progress</Label>
                      <p className="text-sm text-gray-500">Allow others to see your learning progress</p>
                    </div>
                    <Switch id="show-progress" checked={showProgress} onCheckedChange={setShowProgress} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="show-activity">Show Activity History</Label>
                      <p className="text-sm text-gray-500">Allow others to see your recent learning activities</p>
                    </div>
                    <Switch id="show-activity" checked={showActivity} onCheckedChange={setShowActivity} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="data-collection">Data Collection</Label>
                      <p className="text-sm text-gray-500">
                        Allow us to collect usage data to improve your learning experience
                      </p>
                    </div>
                    <Switch
                      id="data-collection"
                      checked={allowDataCollection}
                      onCheckedChange={setAllowDataCollection}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-medium">Security Settings</h3>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Password</h4>
                        <p className="text-sm text-gray-500">Last changed 3 months ago</p>
                      </div>
                      <Button variant="outline" className="flex items-center gap-1">
                        <Lock className="h-4 w-4" />
                        Change Password
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
                        <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                      </div>
                      <Button variant="outline" className="flex items-center gap-1">
                        <Shield className="h-4 w-4" />
                        Enable 2FA
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Active Sessions</h4>
                        <p className="text-sm text-gray-500">Manage devices where you're currently logged in</p>
                      </div>
                      <Button variant="outline" className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        View Sessions
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Account Data</h4>
                        <p className="text-sm text-gray-500">Download or delete your account data</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Download Data
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSavePrivacy} className="bg-blue-600 hover:bg-blue-700">
                  <Shield className="mr-2 h-4 w-4" />
                  Save Privacy Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
