import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";
defaults.maintainAspectRatio = false;
defaults.responsive = true;
// import {Chart} from "chart.js/auto";

const LineChart = (props) => {
    const { lineChartData, lineChartLabels, lineChartColor } = props;
    const data = {
        labels: lineChartLabels,
        datasets: [
            {
                label: "Line-Chart",
                data: lineChartData,
                fill: true,
                borderColor: lineChartColor || "blue",
                tension: 0.4,
            },
        ],
    };

    return <Line data={data} />;
};

export default LineChart;