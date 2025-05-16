"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Save, Globe, Clock } from "lucide-react"

export function LanguageSettings() {
  const [appLanguage, setAppLanguage] = useState("en")
  const [contentLanguage, setContentLanguage] = useState("en")
  const [timezone, setTimezone] = useState("America/Los_Angeles")
  const [dateFormat, setDateFormat] = useState("mdy")
  const [timeFormat, setTimeFormat] = useState("12h")

  const handleSaveLanguageSettings = () => {
    // In a real app, this would save to a database
    alert("Language and regional settings saved successfully!")
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-blue-600" />
            <CardTitle>Language & Regional Settings</CardTitle>
          </div>
          <CardDescription>Customize language preferences and regional formats</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* App Language */}
          <div className="space-y-2">
            <Label htmlFor="app-language">Application Language</Label>
            <Select value={appLanguage} onValueChange={setAppLanguage}>
              <SelectTrigger id="app-language">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español (Spanish)</SelectItem>
                <SelectItem value="fr">Français (French)</SelectItem>
                <SelectItem value="de">Deutsch (German)</SelectItem>
                <SelectItem value="zh">中文 (Chinese)</SelectItem>
                <SelectItem value="ja">日本語 (Japanese)</SelectItem>
                <SelectItem value="ko">한국어 (Korean)</SelectItem>
                <SelectItem value="ar">العربية (Arabic)</SelectItem>
                <SelectItem value="hi">हिन्दी (Hindi)</SelectItem>
                <SelectItem value="pt">Português (Portuguese)</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500">This will change the language of the user interface.</p>
          </div>

          {/* Content Language */}
          <div className="space-y-2">
            <Label htmlFor="content-language">Content Language</Label>
            <Select value={contentLanguage} onValueChange={setContentLanguage}>
              <SelectTrigger id="content-language">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español (Spanish)</SelectItem>
                <SelectItem value="fr">Français (French)</SelectItem>
                <SelectItem value="de">Deutsch (German)</SelectItem>
                <SelectItem value="zh">中文 (Chinese)</SelectItem>
                <SelectItem value="ja">日本語 (Japanese)</SelectItem>
                <SelectItem value="ko">한국어 (Korean)</SelectItem>
                <SelectItem value="ar">العربية (Arabic)</SelectItem>
                <SelectItem value="hi">हिन्दी (Hindi)</SelectItem>
                <SelectItem value="pt">Português (Portuguese)</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500">
              This will prioritize content in your preferred language when available.
            </p>
          </div>

          <Separator />

          {/* Timezone */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <Label htmlFor="timezone">Timezone</Label>
            </div>
            <Select value={timezone} onValueChange={setTimezone}>
              <SelectTrigger id="timezone">
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                <SelectItem value="Europe/London">Greenwich Mean Time (GMT)</SelectItem>
                <SelectItem value="Europe/Paris">Central European Time (CET)</SelectItem>
                <SelectItem value="Asia/Tokyo">Japan Standard Time (JST)</SelectItem>
                <SelectItem value="Australia/Sydney">Australian Eastern Time (AET)</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500">
              This will affect how times are displayed throughout the application.
            </p>
          </div>

          {/* Date Format */}
          <div className="space-y-2">
            <Label htmlFor="date-format">Date Format</Label>
            <RadioGroup
              id="date-format"
              value={dateFormat}
              onValueChange={setDateFormat}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mdy" id="mdy" />
                <Label htmlFor="mdy" className="font-normal">
                  MM/DD/YYYY (05/15/2025)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dmy" id="dmy" />
                <Label htmlFor="dmy" className="font-normal">
                  DD/MM/YYYY (15/05/2025)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ymd" id="ymd" />
                <Label htmlFor="ymd" className="font-normal">
                  YYYY-MM-DD (2025-05-15)
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Time Format */}
          <div className="space-y-2">
            <Label htmlFor="time-format">Time Format</Label>
            <RadioGroup
              id="time-format"
              value={timeFormat}
              onValueChange={setTimeFormat}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="12h" id="12h" />
                <Label htmlFor="12h" className="font-normal">
                  12-hour (2:30 PM)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="24h" id="24h" />
                <Label htmlFor="24h" className="font-normal">
                  24-hour (14:30)
                </Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveLanguageSettings} className="ml-auto bg-blue-600 hover:bg-blue-700">
            <Save className="mr-2 h-4 w-4" />
            Save Language Settings
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
