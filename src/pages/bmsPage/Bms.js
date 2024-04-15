import React, { useState } from "react";
import "../bmsPage/bms.css";
import { useLocation, useNavigate } from "react-router-dom";
import FilterBox from "../../components/filterBox/FilterBox";
import Card from "../../components/cards/Card";
import { FilterData, bmsCardData } from "../../data/FilterData";

const Bms = () => {

  const navigate = useNavigate();

  const location = useLocation()
  // console.log(location)

  const [date, setDate] = useState({
    startDate: "",
    endDate: "",
  });

  // console.log("dateRange", date);

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


  // console.log("filterdata", filterBmsData);

  // console.log(date);

  // const colors = [
  //   "#ff0000",
  //   "#ffff00",
  //   "#00ff00",
  //   "#800080",
  //   "#ffa500",
  //   "#f5f5dc",
  // ];


  const handleCheckBoxClear = (item) => {
    // console.log(item)
    if(item){
      if (item.name === "state") {
        setFilterBmsData((prevData) => ({ ...prevData, state: "" }));
      }
      else if(item.name === "locality");{
        setFilterBmsData((prevData) => ({ ...prevData, locality: "" }));
      }}
    else{
      return null
    }
  };

  const btnData = [
    "Vehicle Details", "Bms Details", "Vcu Details"
  ]

  const handleBtn = (item) => {
    // console.log(item)
    if(item === "Vehicle Details"){
      navigate("/vehicledetails")
    }
    else if(item === "Bms Details"){
      navigate("/bms")
    }
    else if (item === "Vcu Details"){
      navigate("/vcu")
    }
  }

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

      <div className="bmsCardMainContainer">
        <div className="bmsCardContainer">
        {bmsCardData?.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                title={item.title}
                                subTitle={item.subTitle}
                                color="#0e1a77"
                                chartData={item?.description}
                                isPieChart={
                                  index === 2 ||
                                  index === 3 ||
                                  index === 5 &&
                                  Array.isArray(item.description)
                                }
                                isLineChart={
                                  index === 0 || index === 1 &&
                                  Array.isArray(item.description)
                                }
                                lineChartLabels={item.labels}
                                isBarChart={
                                  index === 0 &&
                                  Array.isArray(item.description)
                                }
                                lineColor={item.colors}
                                pieChartLabels={item.labels}
                                pieChartColors={item.colors}
                                barChartLabels={item.colors}
                                barChartTitles={item.labels}
                            />
                        );
                    })}
        </div>

        {/* Button container */}

        <div className="bmsBtnContainer">
            {
              btnData.map((item, index) =>{
                return <button key={index} className={location.pathname === "/bms" && item  === "Bms Details" ? "bmsBtn" : "inActiveBtn"}
                onClick={()=> handleBtn(item)}>{item}</button>
              })
            }
        </div>
      </div>
    </div>
  );
};
export default Bms;
