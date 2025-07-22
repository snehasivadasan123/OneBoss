import React, { useEffect, useState } from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { useTranslation } from 'react-i18next'
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

interface ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
  }>;
}

const Summary = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null)
  const { t } = useTranslation()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/chart.json');
        const data = response.data;
        setChartData({
          labels: data.labels,
          datasets: [
            {
              label: 'investments',
              data: data.data,
              backgroundColor: [
                'rgba(105, 35, 80, 0.6)',
                'rgba(6, 29, 45, 0.6)',
                'rgba(13, 6, 57, 0.6)',
                'rgba(199, 151, 40, 0.6)',
                'rgba(104, 8, 8, 0.6)'
              ],
              borderColor: [
                'rgba(18, 37, 30, 1)',
                'rgba(6, 29, 45, 1)',
                'rgba(34, 84, 63, 1)',
                'rgba(71, 107, 107, 1)',
                'rgba(114, 137, 141, 1)'
              ]
            }
          ]
        })
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div
      className="p-6 rounded-lg shadow-sm"
      style={{ background: "var(--card)", color: "var(--foreground)" }}
    >
      <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>{t('summary.Investment')}</h2>
      <div className='flex flex-wrap gap-6 mt-5'>
        <div style={{ width: '300px', height: '400px' }}>
          {
            chartData ?
              (<Pie key={JSON.stringify(chartData)} data={chartData} />) :
              (<div>Loading...</div>)
          }
        </div >
        <div style={{ width: '300px', height: '300px' }}>
          {
            chartData ? (<Bar key={JSON.stringify(chartData)} data={chartData} options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    stepSize: 50,
                  },
                },
              },
            }} />) : (<div>Loading...</div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Summary