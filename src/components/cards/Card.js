import React, { useState } from 'react';
import "../cards/card.css";
import LineChart from '../chartGraphs/LineChart';
import PieChart from '../chartGraphs/PieChart';

const Card = (props) => {

  const {frontContent, backContent, color, isPieChart, isLineChart, subTitle,subTitleTwo} = props;
    
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const notFlipped = () => {
    setIsFlipped(false)
  }

  // className={classNames(btnStyles, styles.btnStyles)}

  return (
    <div style={{ backgroundColor: color }} className={`flip-card ${isFlipped ? "flipped" : ""}`} onMouseLeave={notFlipped} onMouseEnter={handleFlip} >
      <div className="flip-card-inner">
        <div className="flip-card-front">
            {frontContent}
            <h2>{subTitle}</h2>
            {subTitleTwo &&<p>{subTitleTwo}</p>}
        </div>
        <div className="flip-card-back">
            {isPieChart && (
                        <PieChart
                            chartData={backContent}
                            chartLabels={[
                                "Label 1",
                                "Label 2",
                                "Label 3",
                                "Label 4",
                                "Label 5",
                            ]}
                            chartBackgroundColor={[
                                "#FF6384",
                                "#36A2EB",
                                "#FFCE56",
                                "#4BC0C0",
                                "#9966FF",
                            ]}
                            hoverOffset={4}
                        />
                    )}
                    {isLineChart && (
                        <LineChart
                            chartData={backContent}
                            chartLabels={[
                                "Label 1",
                                "Label 2",
                                "Label 3",
                                "Label 4",
                                "Label 5",
                                "Label 6",
                            ]}
                            lineColor="blue"
                        />
                    )}
                    {!isPieChart && !isLineChart && backContent}
        </div>
      </div>
    </div>
  );
};

export default Card;