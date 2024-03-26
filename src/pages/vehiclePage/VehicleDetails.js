import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../vehiclePage/vehicle.css";
import FilterBox from "../../components/filterBox/FilterBox";
import Card from "../../components/cards/Card";
import { FilterData, vehicleCardData } from "../../data/FilterData";
import { useContextCustomHook } from "../../providers/AppDataProvider";

const VehicleDetails = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const data = useContextCustomHook();
  console.log("Data", data);


  const [date, setDate] = useState({
    startDate: "",
    endDate: "",
  });

  // console.log(date);

  const btnData = ["Vehicle Details", "Bms Details", "Vcu Details"];

  const handleBtn = (item) => {
    // console.log(item)
    if (item === "Vehicle Details") {
      navigate("/vehicledetails");
    } else if (item === "Bms Details") {
      navigate("/bms");
    } else if (item === "Vcu Details") {
      navigate("/vcu");
    }
  };

  const [filterBmsData, setFilterBmsData] = useState({
    state: "",
    locality: "",
    deviceId: "",
    brand: "",
    modal: "",
    age: "",
    gender: "",
    profession: "",
  });

  const handleCheckBoxClear = (item) => {
    // console.log(item)
    if (item) {
      if (item.name === "state") {
        setFilterBmsData((prevData) => ({ ...prevData, state: "" }));
      } 
      else if (item.name === "locality")
      {
        setFilterBmsData((prevData) => ({ ...prevData, locality: "" }));
      }
      else {
        return null;
      } 
    }
  };

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
        {FilterData.map((item, index) => (
          <FilterBox
            key={index}
            title={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            options={item.options}
            filterBmsData={filterBmsData}
            setFilterBmsData={setFilterBmsData}
            eraseAll={() => handleCheckBoxClear(item)}
          />
        ))}
      </div>

      {/* Cards Container */}

      <div className="cardMainContainer">
        <div className="cardContainer">
          {vehicleCardData?.map((item, index) => {
            return (
              <Card
                key={index}
                frontContent={item.title}
                backContent={item?.description}
                color="00aa13"
              />
            );
          })}
        </div>

        {/* Button container */}

        <div className="btnContainer">
          {btnData.map((item, index) => {
            return (
              <button
                key={index}
                className={
                  location.pathname === "/vehicledetails" &&
                  item === "Vehicle Details"
                    ? "vehicleBtn"
                    : "inActiveBtn"
                }
                onClick={() => handleBtn(item)}>
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;