"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-16 z-50 w-full bg-white p-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" size="sm" className="w-full">
                Log in
              </Button>
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                Sign up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
