import React, { useState } from "react";
import "../bmsPage/bms.css";
import { useNavigate } from "react-router-dom";
import FilterBox from "../../components/filterBox/FilterBox";
import Card from "../../components/cards/Card";
import { FilterData } from "../../data/FilterData";
const Bms = () => {
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

  // console.log(date);

  return (
    <div className="bmsContainer">
      {/* vehicle header */}
      <div className="bmsHeader">
        <div className="bmsLogo">
          <img
            className="bmsImg"
            src="https://s3.ap-south-1.amazonaws.com/greentiger.in-content/brand_icons/logo.png"
            alt="logo"
          />
        </div>

        <div className="bmsRightBlock">
          <div className="bmsTitle">
            <h1>BMS Details</h1>
          </div>

          <div className="bmsVehicleNumbers">
            <h2>2</h2>
            <p>Vehicles</p>
          </div>

          <div className="bmsDateRange">
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

      <div className="bmsFilterContainer">
        {FilterData &&
          FilterData.map((item, index) => {
            return (
              <FilterBox
                title={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                label={item.options.map((item) => item.label)}
              />
            );
          })}
        {/* <FilterBox title={<h4>Locality</h4>} />
        <FilterBox title={<h4>Device Id</h4>} />
        <FilterBox title={<h4>Brand</h4>} />
        <FilterBox title={<h4>Modal</h4>} />
        <FilterBox title={<h4>Age</h4>} />
        <FilterBox title={<h4>Gender</h4>} />
        <FilterBox title={<h4>Profession</h4>} /> */}
      </div>

      {/* Cards Container */}

      <div className="bmsCardMainContainer">
        <div className="bmsCardContainer">
          <Card
            color="#0e1a77"
            frontContent={
              <div className="bmsFrontContent">
                <h1>0</h1>
                <p>Total Distance (KM)</p>
              </div>
            }
            backContent={<p>Back Content</p>}
          />
          <Card
            color="#0e1a77"
            frontContent={<h2>Front Content</h2>}
            backContent={<p>Back Content</p>}
          />
          <Card
            color="#0e1a77"
            frontContent={<h2>Front Content</h2>}
            backContent={<p>Back Content</p>}
          />
          <Card
            color="#0e1a77"
            frontContent={<h2>Front Content</h2>}
            backContent={<p>Back Content</p>}
          />
          <Card
            color="#0e1a77"
            frontContent={<h2>Front Content</h2>}
            backContent={<p>Back Content</p>}
          />
          <Card
            color="#0e1a77"
            frontContent={<h2>Front Content</h2>}
            backContent={<p>Back Content</p>}
          />
        </div>

        {/* Button container */}

        <div className="bmsBtnContainer">
          <button onClick={redirectToVehicle}>Vehicle Details</button>
          <button onClick={redirectToBms}>BMS Details</button>
          <button onClick={redirectToVcu}>VCU Details</button>
        </div>
      </div>
    </div>
  );
};
export default Bms;
