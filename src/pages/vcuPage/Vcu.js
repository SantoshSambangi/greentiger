import React, { useState } from "react";
import "../vcuPage/vcu.css";
import { useLocation, useNavigate } from "react-router-dom";
import FilterBox from "../../components/filterBox/FilterBox";
import { FilterData, vcuCardData } from "../../data/FilterData";
import Card from "../../components/cards/Card";

const Vcu = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  const [date, setDate] = useState({
    startDate: "",
    endDate: "",
  });

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
    } 
    else {
      return null;
    }
  };

  return (
    <div className="vcuContainer">
      <div className="vcuHeader">
        <div className="vcuLogo">
          <img
            className="vcuImg"
            src="https://s3.ap-south-1.amazonaws.com/greentiger.in-content/brand_icons/logo.png"
            alt="logo"
          />
        </div>
        <div className="vcuRightBlock">
          <div className="vcuTitle">
            <h1>VCU Details</h1>
          </div>

          <div className="vcuVehicleNumbers">
            <h2>2</h2>
            <p>Vehicles</p>
          </div>

          <div className="vcuDateRange">
            <input
              type="date"
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

      <div className="vcuFilterContainer">
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

      <div className="vcuCardMainContainer">
        <div className="vcuCardContainer">
          {vcuCardData?.map((item, index) => {
            return (
              <Card
              key={index}
              title={item.title}
              subTitle={item.subTitle}
              backContent={item?.description}
              color="red"
              isBarChart={
                  index === 3 &&
                  Array.isArray(item.description)
              }
              isLineChart={
                  index === 0 || index ===1 || index ===2 &&
                  Array.isArray(item.description)
              }
              // isPieChart={
              //     index === 1 ||
              //     index === 2 ||
              //     index === 5 &&
              //         (Array.isArray(item.description))
              // }
              />
            );
          })}
        </div>
        <div className="vcuBtnContainer">
          {btnData.map((item, index) => {
            return (
              <button
                key={index}
                className={
                  location.pathname === "/vcu" && item === "Vcu Details"
                    ? "vcuBtn"
                    : "inActiveBtn"
                }
                onClick={() => handleBtn(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Vcu;
