"use client"

import type * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

interface ThemeProviderProps extends React.PropsWithChildren {
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

export function ThemeProvider({
  attribute,
  defaultTheme,
  enableSystem,
  disableTransitionOnChange,
  children,
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
    >
      {children}
    </NextThemesProvider>
  )
}

export function useTheme() {
  return { theme: "light", setTheme: (theme: string) => {} }
}
