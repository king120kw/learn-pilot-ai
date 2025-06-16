"use client"

import { useTranslation } from "@/components/language-provider"
import { getGreeting } from "@/lib/translations"

export function UserGreeting() {
  const { t, isRTL } = useTranslation()
  // In a real app, you would fetch the user's name from your auth system
  const userName = "Alex"

  const greeting = getGreeting(t)

  return (
    <div className={`mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        {greeting}, <span className="text-blue-600">{userName}</span>!
      </h1>
      <p className="mt-2 text-gray-600">{t('overviewDescription')}</p>
    </div>
  )
}
