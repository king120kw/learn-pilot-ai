"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/sidebar"

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4">
        <Link href="/dashboard" className="flex items-center">
          <Image src="/logo.png" alt="LearnPilot Logo" width={28} height={28} className="mr-2" />
          <span className="text-lg font-bold text-blue-600">LearnPilot</span>
        </Link>

        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      {/* Mobile sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800/50">
          <div className="absolute right-0 h-full w-64 bg-white shadow-lg">
            <div className="flex h-16 items-center justify-between border-b border-gray-200 px-6">
              <Link href="/dashboard" className="flex items-center">
                <Image src="/logo.png" alt="LearnPilot Logo" width={28} height={28} className="mr-2" />
                <span className="text-lg font-bold text-blue-600">LearnPilot</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="h-[calc(100%-4rem)] overflow-y-auto">
              <Sidebar />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
