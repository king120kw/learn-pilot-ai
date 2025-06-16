"use client"

import { createContext, useContext, useEffect, useState } from 'react'
import { translations, languages, isRTL, type Translation } from '@/lib/translations'

interface LanguageContextType {
  currentLanguage: string
  t: (key: keyof Translation) => string
  changeLanguage: (language: string) => void
  availableLanguages: typeof languages
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState('en')

  useEffect(() => {
    // Get language from localStorage or browser
    const savedLanguage = localStorage.getItem('learnpilot-language')
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage)
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0]
      if (translations[browserLang]) {
        setCurrentLanguage(browserLang)
      }
    }
  }, [])

  useEffect(() => {
    // Apply RTL/LTR direction to document
    document.documentElement.dir = isRTL(currentLanguage) ? 'rtl' : 'ltr'
    document.documentElement.lang = currentLanguage
    
    // Apply font family for better language support
    if (isRTL(currentLanguage)) {
      document.body.style.fontFamily = 'Tahoma, Arial, sans-serif'
    } else if (currentLanguage === 'zh') {
      document.body.style.fontFamily = '"Noto Sans SC", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif'
    } else if (currentLanguage === 'ja') {
      document.body.style.fontFamily = '"Noto Sans JP", "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif'
    } else {
      document.body.style.fontFamily = 'Inter, ui-sans-serif, system-ui, sans-serif'
    }
  }, [currentLanguage])

  const t = (key: keyof Translation): string => {
    const translation = translations[currentLanguage]
    if (translation && translation[key]) {
      return translation[key]
    }
    
    // Fallback to English
    return translations['en'][key] || key
  }

  const changeLanguage = (language: string) => {
    if (translations[language]) {
      setCurrentLanguage(language)
      localStorage.setItem('learnpilot-language', language)
    }
  }

  const value: LanguageContextType = {
    currentLanguage,
    t,
    changeLanguage,
    availableLanguages: languages,
    isRTL: isRTL(currentLanguage)
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider')
  }
  return context
}
