"use client"

import { TrendingUp, Zap, Award } from "lucide-react"
import { useTranslation } from "@/components/language-provider"

export function StatsCards() {
  const { t, isRTL } = useTranslation()

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {/* Progress Card */}
      <div className={`rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className={`${isRTL ? 'ml-4' : 'mr-4'} flex h-12 w-12 items-center justify-center rounded-full bg-blue-100`}>
            <TrendingUp className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">{t('overallProgress')}</p>
            <div className="mt-1 flex items-baseline">
              <h3 className="text-2xl font-bold text-gray-900">68%</h3>
              <span className={`${isRTL ? 'mr-2' : 'ml-2'} text-sm font-medium text-green-600`}>+5% {t('thisWeek')}</span>
            </div>
          </div>
        </div>
        <div className="mt-4 h-2 w-full rounded-full bg-gray-100">
          <div className="h-2 rounded-full bg-blue-600" style={{ width: "68%" }}></div>
        </div>
      </div>

      {/* Streak Card */}
      <div className={`rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className={`${isRTL ? 'ml-4' : 'mr-4'} flex h-12 w-12 items-center justify-center rounded-full bg-orange-100`}>
            <Zap className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">{t('currentStreak')}</p>
            <div className="mt-1 flex items-baseline">
              <h3 className="text-2xl font-bold text-gray-900">12 {t('days')}</h3>
              <span className={`${isRTL ? 'mr-2' : 'ml-2'} text-sm font-medium text-orange-600`}>{t('keepItUp')}</span>
            </div>
          </div>
        </div>
        <div className={`mt-4 flex ${isRTL ? 'space-x-reverse' : 'space-x-1'}`}>
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className={`h-2 flex-1 rounded-full ${i < 5 ? "bg-orange-500" : "bg-gray-200"}`}></div>
          ))}
        </div>
      </div>

      {/* Achievements Card */}
      <div className={`rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className={`${isRTL ? 'ml-4' : 'mr-4'} flex h-12 w-12 items-center justify-center rounded-full bg-purple-100`}>
            <Award className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">{t('achievements')}</p>
            <div className="mt-1 flex items-baseline">
              <h3 className="text-2xl font-bold text-gray-900">8 {t('earned')}</h3>
              <span className={`${isRTL ? 'mr-2' : 'ml-2'} text-sm font-medium text-purple-600`}>3 {t('inProgress')}</span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex -space-x-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-200 text-xs font-medium text-purple-700 ring-2 ring-white"
            >
              {i + 1}
            </div>
          ))}
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xs font-medium text-gray-700 ring-2 ring-white">
            +4
          </div>
        </div>
      </div>
    </div>
  )
}
