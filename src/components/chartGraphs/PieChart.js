import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100, 40, 120],
        backgroundColor: [
          'red',
          'blue',
          'yellow',
          'green',
          'purple',
        ],
        hoverOffset: 4,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
