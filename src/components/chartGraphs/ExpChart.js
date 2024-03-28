import React from 'react';
import {Chart} from "chart.js/auto";
import { Bar } from 'react-chartjs-2';
// import { Chart, LinearScale, CategoryScale, BarElement, legend, Title, Tooltip, Legend } from 'chart.js';
// Chart.register(
//     LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip
// )

const labels = ["jan", "feb", "mar", "apr", "may"];

const options = {
    plugins:{
        legend:{
            position:'top'
        },
        title:{
            display: true,
            text: "Expensive Tracker"
        }
    }
}

const data = {
    labels,
    datasets : [
        {
            label : "2020 expensives",
            data:[10,20,30,40,50,60,70],
            backgroundColor :"pink",
        },
        {
            label : "2021 expensives",
            data:[40,30,50,60,80,90,100],
            backgroundColor :"green",
        }
    ],
}

const ExpChart = () => {

  return (
    <div>
        <Bar options={options} data={data}/>
    </div>
  )
}

export default ExpChart;