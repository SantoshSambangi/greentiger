import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";

const BarChart = ({ data, labels, title }) => {
    const chartRef = useRef(null);
    let myChart = null;

    useEffect(() => {
        if (myChart) {
            myChart.destroy();
        }

        const ctx = chartRef.current.getContext("2d");

        myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: title,
                        data: data,
                        backgroundColor: "rgba(54, 162, 235, 0.6)",
                        borderColor: "rgba(54, 162, 235, 1)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });

        return () => {
            myChart.destroy();
        };
    }, [data, labels, title]);

    return <canvas ref={chartRef} />;
};

export default BarChart;