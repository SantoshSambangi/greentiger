// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart } from "chart.js/auto";
// // import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// const BarChart = () => {
//   const data = {
//     labels: ["January", "February", "March", "April", "May"],

//     datasets: [
//       {
//         label: "Sales",
//         backgroundColor: "rgba(75,192,192,0.2)",
//         borderColor: "rgba(75,192,192,1)",
//         borderWidth: 1,
//         hoverBackgroundColor: "rgba(75,192,192,0.4)",
//         hoverBorderColor: "rgba(75,192,192,1)",
//         data: [65, 59, 80, 81, 56],
//       },
//       {},
//     ],
//   };

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
import { Chart } from "chart.js/auto";

const BarChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
