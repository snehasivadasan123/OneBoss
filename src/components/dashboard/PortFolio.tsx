import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Dashboard = () => {
  const { t } = useTranslation();

  // Sample investment data matching the screenshot
  const [investments] = useState([
    {
      code: 'CIG-013',
      nameKey: 'investment.signatureGlobalResourceFel',
      supplierAccount: '573155',
      units: 5.8160,
      price: 26.6675,
      marketValue: 155.10,
      bookValue: 223.56
    },
    {
      code: 'CIG-290',
      nameKey: 'investment.harbourCorporateClassFel',
      supplierAccount: '573160',
      units: 25.4820,
      price: 27.3925,
      marketValue: 698.02,
      bookValue: 597.91
    },
    {
      code: 'CIG-344',
      nameKey: 'investment.signatureGlobalResourceDsc',
      supplierAccount: '573165',
      units: 50.0990,
      price: 26.6675,
      marketValue: 1336.02,
      bookValue: 1926.66
    },
    {
      code: 'CIG-790',
      nameKey: 'investment.harbourCorporateClassDsc',
      supplierAccount: '573166',
      units: 104.0340,
      price: 27.3925,
      marketValue: 2849.75,
      bookValue: 2440.98
    },
    {
      code: 'CIG-2304',
      nameKey: 'investment.signatureHighIncomeFel',
      supplierAccount: '573156',
      units: 13.4130,
      price: 27.7592,
      marketValue: 372.33,
      bookValue: 248.75
    }
  ]);

  const totalAssets = 27189.09;
  const totalValue = 23035.58;
  const accountNumber = "2436237132";

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Header with Total Assets */}
      <div className="bg-white shadow-sm border-b-2 border-gray-200 mb-4">
        <div className="flex justify-between items-center py-3 px-4">
          <h1 className="text-lg font-semibold text-gray-800">{t('investment.totalAssets')}</h1>
          <div className="text-blue-600 font-bold text-lg">
            {totalAssets.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </div>
        </div>

      </div>

      {/* Investment Plan Section */}
      <div className="bg-white shadow-sm rounded-sm">
        {/* Account Header */}
        <div className="bg-gray-100 border-b border-gray-300 px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-700">
                📊 {accountNumber} {t('investment.openClientName')} {t('investment.openInvestmentPlan')}
              </span>
            </div>
            <div className="text-sm font-semibold text-gray-800">
              Total Value ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
          </div>
          <div className="text-xs text-gray-600 mt-1">
            Beneficiary: Estate
          </div>
        </div>

        {/* Investment Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-700 uppercase tracking-wider">
                  {t('investment.supplierAccount')}
                </th>
                <th className="text-right py-3 px-4 text-xs font-medium text-gray-700 uppercase tracking-wider">
                  {t('investment.units')}
                </th>
                <th className="text-right py-3 px-4 text-xs font-medium text-gray-700 uppercase tracking-wider">
                  {t('investment.price')}
                </th>
                <th className="text-center py-3 px-4 text-xs font-medium text-gray-700 uppercase tracking-wider">

                </th>
                <th className="text-right py-3 px-4 text-xs font-medium text-gray-700 uppercase tracking-wider">
                  {t('investment.marketValue')}
                </th>
                <th className="text-right py-3 px-4 text-xs font-medium text-gray-700 uppercase tracking-wider">
                  {t('investment.bookValue')}
                </th>
                <th className="text-center py-3 px-4 text-xs font-medium text-gray-700 uppercase tracking-wider">

                </th>
              </tr>

            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {investments.map((investment, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer">
                        {investment.code}
                      </span>
                      <span className="text-xs text-gray-600 mt-1">
                        <span className="text-xs text-gray-600 mt-1">
                          {t(investment.nameKey)}
                        </span>

                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="text-sm text-gray-900">{investment.supplierAccount}</div>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="text-sm text-gray-900">
                      {investment.units.toFixed(4)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="text-sm text-gray-900">
                      ${investment.price.toFixed(4)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="text-sm text-gray-400">
                      ..................
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="text-sm text-gray-900">
                      ${investment.marketValue.toFixed(2)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="text-sm text-gray-900">
                      ${investment.bookValue.toFixed(2)}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded">
                      {t('investment.transactions')}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;