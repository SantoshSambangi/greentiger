import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ chartData, chartLabels, lineColor }) => {
    const data = {
        labels: chartLabels,
        datasets: [
            {
                label: "Line Chart",
                data: chartData,
                fill: false,
                borderColor: lineColor || "rgb(75, 192, 192)",
                tension: 0.1,
            },
        ],
    };

    return <Line data={data} />;
};

export default LineChart;