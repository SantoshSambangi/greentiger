// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart } from "chart.js/auto";

// const BarChart = () => {
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May'],
//     datasets: [
//       {
//         label: 'Sample Data',
//         backgroundColor: 'rgba(75,192,192,1)',
//         borderColor: 'rgba(0,0,0,1)',
//         borderWidth: 2,
//         data: [65, 59, 80, 81, 56],
//       },
//     ],
//   };

//   // Sample options for the chart
//   const options = {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//   };

//   return (
//     <div>
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default BarChart;

import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto"

const BarChart = (props) => {
    const { barChartData, barChartLabels, barChartColor } = props;
    const data = {
        labels: barChartLabels,
        datasets: [
            {
                label: "Bar Chart",
                data: barChartData,
                backgroundColor: barChartColor || "rgb(75, 192, 192)",
                borderWidth: 1,
            },
        ],
    };

    return <Bar data={data} />;
};

export default BarChart;
