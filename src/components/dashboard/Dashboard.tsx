import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../common/LanguageSwitcher'

const Dashboard = () => {
  const { t } = useTranslation()
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="mb-6 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold">Welcome to the Client Portal</h1>
          <p className="text-gray-600">Track your portfolio and access documents securely.</p>
        </div>
        <LanguageSwitcher />
      </header>

      <h1>{t('dashboard.title')}</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-semibold">Account Balance</h2>
          <p className="text-2xl text-blue-600 mt-2">$12,340.00</p>
        </div>

        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <ul className="mt-2 text-sm text-gray-700 list-disc pl-4">
            <li>Contribution - $500 (July 1)</li>
            <li>Withdrawal - $200 (June 28)</li>
          </ul>
        </div>

        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-semibold">Asset Allocation</h2>
          <p className="text-gray-600 mt-2">Equity: 60% | Bonds: 30% | Cash: 10%</p>
        </div>
      </section>
    </div>




  )
}

export default Dashboard