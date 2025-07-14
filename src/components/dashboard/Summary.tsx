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

// Register Chart.js componentsi


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

  // Fetch chart data from JSON file
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("/chart.json")
        const data = await response.json()
        console.log(data.labels)
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
    <div className='border border-black-200 flex-gap-6'> <h2>{t('summary.Investment')} </h2>
      <div className='flex flex-wrap gap-6  mt-5'>
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

    </div >
  )
}

export default Summary