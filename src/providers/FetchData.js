// import React, { useState, useEffect } from 'react';
// import Chart from 'chart.js/auto';
// import axios from 'axios';

// const BarChart = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('YOUR_BACKEND_ENDPOINT');
//       setData(response.data); // Assuming your backend returns an array of data
//       createChart(response.data); // Call the function to create the chart
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const createChart = (data) => {
//     const ctx = document.getElementById('myChart');
//     new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: data.map(item => item.label), // Assuming your data has labels
//         datasets: [{
//           label: 'Data',
//           data: data.map(item => item.value), // Assuming your data has values
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderColor: 'rgba(75, 192, 192, 1)',
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });
//   };

//   return (
//     <div>
//       <canvas id="myChart" width="400" height="400"></canvas>
//     </div>
//   );
// };

// export default BarChart;


import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const BarChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('YOUR_BACKEND_ENDPOINT');
      const data = response.data;
      const labels = data.map(item => item.label); // Assuming your data has labels
      const values = data.map(item => item.value); // Assuming your data has values
      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Data',
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;

