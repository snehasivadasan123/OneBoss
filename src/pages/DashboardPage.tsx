


import RecentTradingActivity from "@/features/dashboard/Recent-trading-activity"
import Summary from "@/features/dashboard/Summary"
import UpcomingEvent from "@/features/dashboard/UpcomingEvent"

const DashboardPage = () => {

  return (
    <div className="bg-gray-50 min-h-screen p-4">

      {/* Main content area: Summary (left) and Recent Trading Activity + Upcoming Events (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Column: Summary */}
        <Summary />
        {/* Right Column: Recent Trading Activity and Upcoming Events */}
        <div className="flex flex-col gap-4">
          <RecentTradingActivity />
          <UpcomingEvent />

        </div>
      </div>
    </div>
  )
}

export default DashboardPage
