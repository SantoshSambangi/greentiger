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

    // const data = useDataHook();

    const [date, setDate] = useState({
        startDate: "",
        endDate: "",
    });
    console.log(date)

    const btnData = ["Vehicle Details", "Bms Details", "Vcu Details"];

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

    console.log(filterBmsData)

    const handleClearFilters = (filterCategory) => {
        setFilterBmsData((prevData) => {
            const updatedData = { ...prevData };
            updatedData[filterCategory.toLowerCase()] = [];
            return updatedData;
        });
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
                        eraseAll={() => handleClearFilters(item.name)}
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
                                title={item.title}
                                subTitle={item.subTitle}
                                color="#00aa13"
                                // chartData={item.description} 
                                isPieChart={
                                    (index === 2 || index === 3 || index === 5) ? true : false                                 }
                                isLineChart={
                                    (index === 0 || index === 1) ? true : false 
                                }
                                isGoogleMap={
                                    (index === 4) ? true : false
                                }
                                pieChartData={Array.isArray(item.description) ? item.description : null} 
                                pieChartLabels={Array.isArray(item.labels) ? item.labels : null}
                                pieChartBackgroundColor={Array.isArray(item.colors) ? item.colors : null}
                                lineChartData={Array.isArray(item.description) ? item.description : null} 
                                lineChartLabels={Array.isArray(item.labels) ? item.labels : null}
                                lineChartColor={Array.isArray(item.colors) ? item.colors[0] : null}
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