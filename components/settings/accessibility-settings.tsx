"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Save, Moon, Contrast, Type, Maximize, MousePointer } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function AccessibilitySettings() {
  const { theme, setTheme } = useTheme()
  const [darkMode, setDarkMode] = useState(theme === "dark")
  const [highContrast, setHighContrast] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [textSize, setTextSize] = useState(100)
  const [cursorSize, setCursorSize] = useState("default")
  const [focusHighlight, setFocusHighlight] = useState(false)
  const [autoplayVideos, setAutoplayVideos] = useState(true)

  // Update theme when darkMode changes
  useEffect(() => {
    setTheme(darkMode ? "dark" : "light")
  }, [darkMode, setTheme])

  // Apply text size to document root
  useEffect(() => {
    document.documentElement.style.fontSize = `${textSize}%`
    return () => {
      document.documentElement.style.fontSize = "100%"
    }
  }, [textSize])

  const handleSaveAccessibilitySettings = () => {
    // In a real app, this would save to a database
    alert("Accessibility settings saved successfully!")
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Accessibility Settings</CardTitle>
          <CardDescription>Customize your experience to improve accessibility</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Display Settings */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Display Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Moon className="h-4 w-4 text-gray-500" />
                  <Label htmlFor="dark-mode" className="text-sm">
                    Dark Mode
                  </Label>
                </div>
                <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Contrast className="h-4 w-4 text-gray-500" />
                  <Label htmlFor="high-contrast" className="text-sm">
                    High Contrast
                  </Label>
                </div>
                <Switch id="high-contrast" checked={highContrast} onCheckedChange={setHighContrast} />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Type className="h-4 w-4 text-gray-500" />
                  <Label htmlFor="text-size" className="text-sm">
                    Text Size
                  </Label>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs">A</span>
                  <Slider
                    id="text-size"
                    min={75}
                    max={150}
                    step={5}
                    value={[textSize]}
                    onValueChange={(value) => setTextSize(value[0])}
                    className="flex-1"
                  />
                  <span className="text-lg font-bold">A</span>
                </div>
                <p className="text-xs text-gray-500">Current size: {textSize}%</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Motion & Animation */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Motion & Animation</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="reduced-motion" className="text-sm">
                    Reduced Motion
                  </Label>
                  <p className="text-xs text-gray-500">Minimize animations throughout the application</p>
                </div>
                <Switch id="reduced-motion" checked={reducedMotion} onCheckedChange={setReducedMotion} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="autoplay-videos" className="text-sm">
                    Autoplay Videos
                  </Label>
                  <p className="text-xs text-gray-500">Automatically play videos when they appear on screen</p>
                </div>
                <Switch id="autoplay-videos" checked={autoplayVideos} onCheckedChange={setAutoplayVideos} />
              </div>
            </div>
          </div>

          <Separator />

          {/* Navigation & Input */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Navigation & Input</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MousePointer className="h-4 w-4 text-gray-500" />
                  <Label htmlFor="cursor-size" className="text-sm">
                    Cursor Size
                  </Label>
                </div>
                <RadioGroup
                  id="cursor-size"
                  value={cursorSize}
                  onValueChange={setCursorSize}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="default-cursor" />
                    <Label htmlFor="default-cursor" className="font-normal">
                      Default
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="large" id="large-cursor" />
                    <Label htmlFor="large-cursor" className="font-normal">
                      Large
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="x-large" id="x-large-cursor" />
                    <Label htmlFor="x-large-cursor" className="font-normal">
                      Extra Large
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Maximize className="h-4 w-4 text-gray-500" />
                  <Label htmlFor="focus-highlight" className="text-sm">
                    Enhanced Focus Highlighting
                  </Label>
                </div>
                <Switch id="focus-highlight" checked={focusHighlight} onCheckedChange={setFocusHighlight} />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveAccessibilitySettings} className="ml-auto bg-blue-600 hover:bg-blue-700">
            <Save className="mr-2 h-4 w-4" />
            Save Accessibility Settings
          </Button>
        </CardFooter>
      </Card>

      {/* Theme Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Theme Preview</CardTitle>
          <CardDescription>See how your selected theme looks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className={`rounded-lg border p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
            <h3 className="mb-4 text-lg font-medium">Sample Content</h3>
            <p className="mb-4">
              This is how text and elements will appear with your current settings. Adjust the settings above to
              customize your experience.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="default" className={darkMode ? "bg-blue-600" : ""}>
                Primary Button
              </Button>
              <Button variant="outline">Secondary Button</Button>
              <Button variant="destructive">Danger Button</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
