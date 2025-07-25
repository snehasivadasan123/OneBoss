

import AssetsValue from '@/features/portfolio/AssetValue'
import QuickAccountSwitch from '@/features/portfolio/QuickAccountSwitch'
import InvestmentAccordion from '@/features/portfolio/InvestmentAccordion'
import { activityNotifications, investmentData } from '@/components/dummyData/InvestmentData'
import ActivityNotifications from '@/features/portfolio/ActivityNotification'
const PortfolioPage = () => {
  return (
    <div>
      <main className="p-6 space-y-6">
        <AssetsValue value={4195392.0} />
        <QuickAccountSwitch />
        <div className="space-y-4">
          <InvestmentAccordion data={investmentData} />
        </div>
        <ActivityNotifications data={activityNotifications} />
      </main>
    </div>
  )
}

export default PortfolioPage