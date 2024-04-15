import React, { useState } from "react";
import "../cards/card.css";
import LineChart from "../chartGraphs/LineChart";
import PieChart from "../chartGraphs/PieChart";
import LocationMap from "../chartGraphs/LocationMap";

const Card = (props) => {
    const {
        color,
        isPieChart,
        isLineChart,
        title,
        subTitle,
        pieChartLabels,
        pieChartData,
        pieChartBackgroundColor,
        lineChartLabels,
        lineChartData,
        lineChartColor,
        isGoogleMap,
        latitude,
        longitude
    } = props;

    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const notFlipped = () => {
        setIsFlipped(false);
    };

    return (
        <div
            style={{ backgroundColor: color }}
            className={`flip-card ${isFlipped ? "flipped" : ""}`} onMouseLeave={notFlipped} onMouseEnter={handleFlip}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <h1>{title}</h1>
                    <p>{subTitle}</p>
                </div>
                <div className="flip-card-back">
                    
                    {isPieChart && (
                        <PieChart
                            pieChartData={pieChartData}
                            pieChartLabels={pieChartLabels}
                            pieChartBackgroundColor={pieChartBackgroundColor}
                            hoverOffset={4}
                        />
                    )}
                    {isLineChart && (
                        <LineChart
                            lineChartData={lineChartData}
                            lineChartLabels={lineChartLabels}
                            lineChartColor={lineChartColor}
                        />
                    )}
                    {isGoogleMap && (
                        <LocationMap
                         latitude={latitude}
                         longitude={longitude} />
                    )}

                    {!isPieChart && !isLineChart &&!isGoogleMap && <p>Loading...</p>}
                </div>
            </div>
        </div>
    );
};

export default Card;