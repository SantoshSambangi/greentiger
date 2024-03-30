import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../vehiclePage/vehicle.css";
import FilterBox from "../../components/filterBox/FilterBox";
import Card from "../../components/cards/Card";
import { FilterData, vehicleCardData } from "../../data/FilterData";
import { useDataHook } from "../../providers/AppDataProvider";

const VehicleDetails = () => {
    const navigate = useNavigate();

    const location = useLocation();

    // const contextData = useContextCustomHook();
    // console.log("Data", contextData);

    const data = useDataHook();
    console.log(data);

    const [date, setDate] = useState({
        startDate: "",
        endDate: "",
    });

    console.log(date);

    const btnData = ["Vehicle Details", "Bms Details", "Vcu Details"];

    // const handleBtn = (item) => {
    //   // console.log(item)
    //   if (item === "Vehicle Details") {
    //     navigate("/vehicledetails");
    //   } else if (item === "Bms Details") {
    //     navigate("/bms");
    //   } else if (item === "Vcu Details") {
    //     navigate("/vcu");
    //   }
    // };

    const handleBtn = (item) => {
        const routes = {
            "Vehicle Details": "/vehicledetails",
            "Bms Details": "/bms",
            "Vcu Details": "/vcu",
        };
        const route = routes[item];
        if (route) {
            navigate(route);
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
        if (!item) return;
        const fieldToUpdate = item.name;

        if (fieldToUpdate === "state" || fieldToUpdate === "locality") {
            setFilterBmsData((prevData) => ({
                ...prevData,
                [fieldToUpdate]: "",
            }));
        }
    };

    const getNextDay = (dateString) => {
        const date = new Date(dateString);
        date.setDate(date.getDate() + 1);
        return date.toISOString().split("T")[0];
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
                            value={date.startDate || ""}
                            onChange={(e) => {
                                const selectedStartDate = e.target.value;
                                const nextDay = new Date(selectedStartDate);
                                nextDay.setDate(nextDay.getDate() + 1);
                                const formattedNextDay = nextDay
                                    .toISOString()
                                    .split("T")[0];
                                setDate({
                                    startDate: selectedStartDate,
                                    endDate: formattedNextDay,
                                });
                            }}
                            placeholder="Start Date"
                        />

                        <input
                            type="date"
                            value={date.endDate || ""}
                            min={
                                date.startDate ? getNextDay(date.startDate) : ""
                            }
                            onChange={(e) => {
                                const selectedEndDate = e.target.value;
                                const updatedEndDate =
                                    selectedEndDate !== date.startDate
                                        ? selectedEndDate
                                        : "";
                                setDate({ ...date, endDate: updatedEndDate });
                            }}
                            placeholder="End Date"
                        />
                    </div>
                </div>
            </div>

            {/* vehicle filter */}

            <div className="filterContainer">
                {FilterData.map((item, index) => (
                    <FilterBox
                        key={index}
                        title={
                            item.name.charAt(0).toUpperCase() +
                            item.name.slice(1)
                        }
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
                                // subTitleTwo={title.subTitleTwo}
                                subTitle={item[0]?.title?.map((name) => name)}
                                backContent={item?.description}
                                color="00aa13"
                                isPieChart={
                                    index === 2 &&
                                    Array.isArray(item.description)
                                }
                                isLineChart={
                                    index === 1 &&
                                    Array.isArray(item.description)
                                }
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