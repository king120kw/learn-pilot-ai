import Image from "next/image"

export function PhoneMockup() {
  return (
    <div className="relative mx-auto h-[600px] w-[300px] rounded-[40px] bg-black p-2 shadow-xl">
      {/* Phone Frame */}
      <div className="absolute left-1/2 top-0 z-10 h-6 w-40 -translate-x-1/2 rounded-b-3xl bg-black"></div>
      <div className="absolute right-0 top-28 h-14 w-1 rounded-l-lg bg-gray-800"></div>
      <div className="absolute right-0 top-48 h-24 w-1 rounded-l-lg bg-gray-800"></div>
      <div className="absolute left-0 top-36 h-16 w-1 rounded-r-lg bg-gray-800"></div>

      {/* Phone Screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-white">
        {/* App Interface */}
        <div className="h-full w-full bg-white p-4">
          {/* Status Bar */}
          <div className="flex justify-between px-2 py-2 text-xs text-gray-700">
            <span>9:41</span>
            <div className="flex space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.5 19H8V18H8.5C9.05 18 9.5 17.55 9.5 17V7C9.5 6.45 9.05 6 8.5 6H8V5H8.5C9.6 5 10.5 5.9 10.5 7V17C10.5 18.1 9.6 19 8.5 19Z" />
                <path d="M15.5 19H15V18H15.5C16.05 18 16.5 17.55 16.5 17V7C16.5 6.45 16.05 6 15.5 6H15V5H15.5C16.6 5 17.5 5.9 17.5 7V17C17.5 18.1 16.6 19 15.5 19Z" />
                <path d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6H8V11.5C8 13.71 9.79 15.5 12 15.5ZM12 14.5C10.34 14.5 9 13.16 9 11.5V7H15V11.5C15 13.16 13.66 14.5 12 14.5Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 5H7V7H17V5Z" />
                <path d="M7 19H17V17H7V19Z" />
                <path d="M17 3C18.1 3 19 3.9 19 5V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V5C5 3.9 5.9 3 7 3H17ZM17 1H7C4.79 1 3 2.79 3 5V19C3 21.21 4.79 23 7 23H17C19.21 23 21 21.21 21 19V5C21 2.79 19.21 1 17 1Z" />
              </svg>
            </div>
          </div>

          {/* App Content */}
          <div className="mt-8 flex flex-col items-center px-4">
            {/* App Logo */}
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 p-3 shadow-md">
              <Image src="/logo.png" alt="App Logo" width={40} height={40} className="h-full w-full" />
            </div>

            <h1 className="mb-2 text-center text-2xl font-bold text-gray-900">LearnPilot</h1>

            {/* Hero Section */}
            <div className="mt-8 text-center">
              <h2 className="text-xl font-bold leading-tight text-gray-900">
                Learn smarter with <span className="text-blue-600">AI assistance</span>
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                Master any subject faster with personalized AI learning tools
              </p>
            </div>

            {/* App Screenshot/Illustration */}
            <div className="my-8 h-48 w-full rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-4 shadow-sm">
              <div className="flex h-full flex-col justify-between rounded-lg border border-blue-200 bg-white p-3">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100"></div>
                  <div className="flex-1">
                    <div className="h-2 w-24 rounded bg-gray-200"></div>
                    <div className="mt-1 h-2 w-16 rounded bg-gray-100"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-2 w-full rounded bg-gray-100"></div>
                  <div className="h-2 w-5/6 rounded bg-gray-100"></div>
                  <div className="h-2 w-4/6 rounded bg-gray-100"></div>
                </div>

                <div className="flex justify-end">
                  <div className="h-6 w-20 rounded-full bg-blue-100"></div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex w-full flex-col space-y-3">
              <button className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700">
                Get Started
              </button>
              <button className="rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
