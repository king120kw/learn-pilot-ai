import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-blue-600">LearnPilot</span>
        </Link>

        <nav className="hidden space-x-8 md:flex">
          <Link href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Features
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Pricing
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            Log in
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  )
}
