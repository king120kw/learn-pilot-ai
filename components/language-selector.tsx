"use client"

import { useState } from "react"
import { Globe, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslation } from "@/components/language-provider"
import { languages } from "@/lib/translations"

export function LanguageSelector() {
  const { currentLanguage, changeLanguage } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (langCode: string) => {
    changeLanguage(langCode)
    setIsOpen(false)
    // Force page reload to apply language changes throughout the app
    window.location.reload()
  }

  const currentLangConfig = languages[currentLanguage as keyof typeof languages]

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            {currentLangConfig?.flag} {currentLangConfig?.nativeName}
          </span>
          <span className="sm:hidden">
            {currentLangConfig?.flag}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {Object.entries(languages).map(([code, config]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLanguageChange(code)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{config.flag}</span>
              <div className="flex flex-col">
                <span className="font-medium">{config.name}</span>
                <span className="text-xs text-gray-500">{config.nativeName}</span>
              </div>
            </div>
            {currentLanguage === code && (
              <Check className="h-4 w-4 text-blue-600" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
