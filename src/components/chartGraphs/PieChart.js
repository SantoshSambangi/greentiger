import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";
// import {Chart, } from "chart.js/auto";
// import { Chart, LinearScale, CategoryScale, BarElement, legend, Title, Tooltip, Legend } from 'chart.js';
// Chart.register(
//     LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip
// )

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const PieChart = (props) => {
    
   const {pieChartData,pieChartLabels,pieChartBackgroundColor,hoverOffset,} = props;

    const data = {
        labels: pieChartLabels,
        datasets: [
            {
                data: pieChartData,
                backgroundColor: pieChartBackgroundColor,
                hoverOffset: hoverOffset,
            },
        ],
    };

    return <Pie data={data} />;
};

export default PieChart;