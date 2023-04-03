import React from 'react'
import { Chart as ChartJS , BarElement,CategoryScale,LinearScale,Tooltip,Legend} from 'chart.js'
import { Bar } from 'react-chartjs-2'
ChartJS.register(
  BarElement,CategoryScale,LinearScale,Tooltip,Legend
)

function BarChart({data,options}) {
  
  return (
    <div className='chart'>
        <Bar className='BarChart' data={data} options={options} ></Bar>
    </div>
  )
}

export default BarChart
