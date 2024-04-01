import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({
    chartData,
    chartLabels,
    chartBackgroundColor,
    hoverOffset,
}) => {
    const data = {
        labels: chartLabels,
        datasets: [
            {
                data: chartData,
                backgroundColor: chartBackgroundColor,
                hoverOffset: hoverOffset,
            },
        ],
    };

    return <Pie data={data} />;
};

export default PieChart;