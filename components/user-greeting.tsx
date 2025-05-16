export function UserGreeting() {
  // In a real app, you would fetch the user's name from your auth system
  const userName = "Alex"
  const currentHour = new Date().getHours()

  let greeting = "Good morning"
  if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon"
  } else if (currentHour >= 18) {
    greeting = "Good evening"
  }

  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        {greeting}, <span className="text-blue-600">{userName}</span>!
      </h1>
      <p className="mt-2 text-gray-600">Here's an overview of your learning progress and upcoming activities.</p>
    </div>
  )
}
