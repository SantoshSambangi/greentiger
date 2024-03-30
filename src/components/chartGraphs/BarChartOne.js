import React from 'react';
import BarChart from './BarChart';

const BarChartOne = () => {
    const chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Sales',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [12, 19, 3, 5, 2, 3],
        }]
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div>
            <BarChart
                data={chartData}
                options={chartOptions}
            />
        </div>
    );
};

export default BarChartOne;
