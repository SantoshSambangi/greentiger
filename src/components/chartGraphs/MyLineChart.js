import React from 'react';
import  Chart  from "react-apexcharts";

const MyLineChart = () => {
  return (
    <div>        
        <Chart type='line'
          width={400}
          height={180}
          series={[
            {
            name:"Name",
            data:[25,35,68,15,80,]
            },
        ]}
          options={{
            title:{text: "products"},
            xaxis:{
                // title:{text: "products sale in this month"},
                categories:["jan","feb","march","april","may"]
            }
          }}>
          </Chart>
    </div>
  )
}

export default MyLineChart