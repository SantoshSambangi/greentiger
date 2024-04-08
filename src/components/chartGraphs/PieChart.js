import React from "react";
import { Pie } from "react-chartjs-2";
import {Chart} from "chart.js/auto";

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