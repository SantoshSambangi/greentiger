import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../vehiclePage/vehicle.css";
// import FlipCard from "../../components/flipCard/FlipCard";
import { VscSearch } from "react-icons/vsc";
import FilterBox from "../../components/filterBox/FilterBox";
import Card from "../../components/cards/Card";
import ExpChart from "../../components/chartGraphs/ExpChart";
import BarChart from "../../components/chartGraphs/BarChart";
import PieChart from "../../components/chartGraphs/PieChart";
import LineChart from "../../components/chartGraphs/LineChart";

const VehicleDetails = () => {
  

  const navigate = useNavigate();

  const redirectToVcu = () => {
    navigate("/vcu");
  };
  const redirectToBms = () => {
    navigate("/bms");
  };
  const redirectToVehicle = () => {
    navigate("/vehicledetails");
  };

  const [date, setDate] = useState({
    startDate: "",
    endDate: "",
  });

  console.log(date);

  return (
    <div className="vcuContainer">
      
      {/* vehicle header */}

      <div className="vcuHeader">
        <div className="logo">
          <img
            className="logoImg"
            src="https://s3.ap-south-1.amazonaws.com/greentiger.in-content/brand_icons/logo.png"
            alt="logo"
          />
        </div>

        <div className="vcuRightBlock">
          <div className="title">
            <h1>Vehicle Details</h1>
          </div>

          <div className="vehicleNumbers">
            <h2>2</h2>
            <p>Vehicles</p>
          </div>

          <div className="dateRange">
            <input
              type="date"
              placeholder="Select a date"
              value={date.startDate}
              onChange={(e) => setDate({ ...date, startDate: e.target.value })}
            />
            <input
              type="date"
              value={date.endDate}
              onChange={(e) => setDate({ ...date, endDate: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* vehicle filter */}

      <div className="filterContainer">
        <FilterBox title={<h4>State</h4>} />
        <FilterBox title={<h4>Locality</h4>} />
        <FilterBox title={<h4>Device Id</h4>} />
        <FilterBox title={<h4>Brand</h4>} />
        <FilterBox title={<h4>Modal</h4>} />
        <FilterBox title={<h4>Age</h4>} />
        <FilterBox title={<h4>Gender</h4>} />
        <FilterBox title={<h4>Profession</h4>} />
      </div>

      {/* Cards Container */}

      <div className="cardMainContainer">
        <div className="cardContainer">
          <Card
            frontContent={
              <div className="frontContent">
                <h1>0</h1>
                <p>Total Distance (KM)</p>
              </div>
            }
            backContent={<ExpChart />}
          />
          <Card
            frontContent={<h2>Front Content</h2>}
            backContent={<BarChart />}
          />
          <Card
            frontContent={<h2>Front Content</h2>}
            backContent={<PieChart />}
          />
          <Card
            frontContent={<h2>Front Content</h2>}
            backContent={<LineChart />}
          />
          <Card
            frontContent={<h2>Front Content</h2>}
            backContent={<p>Back Content</p>}
          />
          <Card
            frontContent={<h2>Front Content</h2>}
            backContent={<p>Back Content</p>}
          />
        </div>

        {/* Button container */}

        <div className="btnContainer">
          <button onClick={redirectToVehicle}>Vehicle Details</button>
          <button onClick={redirectToBms}>BMS Details</button>
          <button onClick={redirectToVcu}>VCU Details</button>
        </div>
        
      </div>
    </div>
  );
};

export default VehicleDetails;
