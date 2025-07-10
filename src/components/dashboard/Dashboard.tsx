import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../common/LanguageSwitcher';

const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <div className=" bg-gray-100 ">
      <header className="mb-6 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold">{t('dashboard.title')}</h1>
          <p className="text-gray-600">{t('dashboard.subtitle')}</p>
        </div>
        <LanguageSwitcher />
      </header>

      <h1>{t('dashboard.title')}</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-semibold">{t('dashboard.accountBalance')}</h2>
          <p className="text-2xl text-blue-600 mt-2">$12,340.00</p>
        </div>

        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-semibold">{t('dashboard.recentTransactions')}</h2>
          <ul className="mt-2 text-sm text-gray-700 list-disc pl-4">
            <li>{t('dashboard.contribution')}</li>
            <li>{t('dashboard.withdrawal')}</li>
          </ul>
        </div>

        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-semibold">{t('dashboard.assetAllocation')}</h2>
          <p className="text-gray-600 mt-2">{t('dashboard.allocationDetails')}</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;