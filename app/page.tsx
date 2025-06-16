"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneMockup } from "@/components/phone-mockup"
import { LanguageSelector } from "@/components/language-selector"
import { MessageSquare, BookOpen, Video, CheckCircle } from "lucide-react"
import { useTranslation } from "@/components/language-provider"

export default function LandingPage() {
  const { t, isRTL } = useTranslation()

  return (
    <div className={`flex min-h-screen flex-col ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="LearnPilot Logo" width={32} height={32} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
            <span className="text-xl font-bold text-blue-600">{t('learnPilot')}</span>
          </Link>

          <nav className="hidden space-x-8 md:flex">
            <Link href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              {t('features')}
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              {t('testimonials')}
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              {t('pricing')}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <Button variant="outline" size="sm" className="hidden md:inline-flex">
              {t('login')}
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              {t('signUp')}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-24 md:pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
            <div className={`flex flex-col justify-center ${isRTL ? 'text-right' : 'text-left'}`}>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                {t('learnSmarterWith')} <span className="text-blue-600">{t('aiAssistance')}</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                {t('heroDescription')}
              </p>
              <div className={`mt-10 flex flex-col space-y-4 sm:flex-row ${isRTL ? 'sm:space-x-reverse' : 'sm:space-x-4'} sm:space-y-0`}>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  {t('getStarted')}
                </Button>
                <Button variant="outline" size="lg">
                  {t('learnMore')}
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="transform transition-all duration-500 hover:scale-105">
                <PhoneMockup />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mx-auto max-w-3xl ${isRTL ? 'text-right' : 'text-center'}`}>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Powerful features to accelerate your learning
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our AI-powered tools are designed to help you learn more effectively and efficiently.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Feature 1 */}
            <div className={`group rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white ${isRTL ? 'float-right' : 'float-left'}`}>
                <MessageSquare className="h-6 w-6" />
              </div>
              <div className={isRTL ? 'mr-16' : 'ml-16'}>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{t('mockInterview')}</h3>
                <p className="text-gray-600">
                  {t('practiceInterview')}
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className={`group rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white ${isRTL ? 'float-right' : 'float-left'}`}>
                <BookOpen className="h-6 w-6" />
              </div>
              <div className={isRTL ? 'mr-16' : 'ml-16'}>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{t('studyBuddy')}</h3>
                <p className="text-gray-600">
                  {t('personalizedHelp')}
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className={`group rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white ${isRTL ? 'float-right' : 'float-left'}`}>
                <Video className="h-6 w-6" />
              </div>
              <div className={isRTL ? 'mr-16' : 'ml-16'}>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{t('videoMeeting')}</h3>
                <p className="text-gray-600">
                  {t('liveSessionsHost')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What our users are saying</h2>
            <p className="mt-4 text-lg text-gray-600">
              Thousands of students are improving their learning outcomes with LearnPilot.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="User Avatar"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Computer Science Student</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "LearnPilot's mock interviews helped me prepare for technical interviews. I landed my dream internship
                at a top tech company!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="User Avatar"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Michael Chen</h4>
                  <p className="text-sm text-gray-600">Medical Student</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "The Study Buddy feature is like having a personal tutor available 24/7. It's helped me master complex
                medical concepts quickly."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="User Avatar"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Emily Rodriguez</h4>
                  <p className="text-sm text-gray-600">Language Learner</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "The video chat feature lets me practice speaking with native speakers. My fluency has improved
                dramatically in just a few months."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
            <p className="mt-4 text-lg text-gray-600">Start for free and upgrade when you're ready.</p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {/* Free Trial Plan */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
              <h3 className="text-2xl font-bold text-gray-900">Free Trial</h3>
              <p className="mt-4 text-gray-600">Perfect for getting started and exploring the basics.</p>
              <div className="mt-6">
                <span className="text-5xl font-bold text-gray-900">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">Basic Mock Interview (5/month)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">Limited Study Buddy access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">10 minutes of video chat/day</span>
                </li>
              </ul>
              <Button className="mt-8 w-full bg-gray-900 hover:bg-gray-800">Start Free Trial</Button>
            </div>

            {/* Premium Plan */}
            <div className="relative rounded-2xl border-2 border-blue-600 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Premium</h3>
              <p className="mt-4 text-gray-600">Everything you need for serious learning.</p>
              <div className="mt-6">
                <span className="text-5xl font-bold text-gray-900">$29</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">Unlimited Mock Interviews</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">Full Study Buddy access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">Unlimited video chat</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">Advanced analytics and progress tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">Priority support</span>
                </li>
              </ul>
              <Button className="mt-8 w-full bg-blue-600 hover:bg-blue-700">Get Premium</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold">LearnPilot</h3>
              <p className="mt-4 text-sm text-gray-400">
                AI-powered educational platform helping students learn smarter and achieve more.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} LearnPilot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
