import React from 'react';
import  Chart  from "react-apexcharts";

const MyPieChart = () => {

  return (
    <div>
        <Chart 
                type="pie"
                width={300}
                height={200}

                series={[70,30,50,60,80]}                

                options={{
                        title:{ text:"PieChart"
                        } , 
                       noData:{text:"Empty Data"},                        
                      colors:["#f90000","red","black","#f0f","f3d3d3"],
                      labels:["sun", "mon","tue","wed","thu"]                    

                 }}>
        </Chart>
    </div>
  )
}

export default MyPieChart;