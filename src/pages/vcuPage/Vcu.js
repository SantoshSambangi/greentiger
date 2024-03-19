import React, { useState } from "react";
// import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import "../vcuPage/vcu.css";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FlipCard from "../../components/flipCard/FlipCard";
import CustomModal from "../../components/modal/Modal";
import DateSelectionPicker from "../../components/dateRangePicker/DateSelectionPicker";
const Vcu = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const [modalData, setModalData] = useState(null);

  const [chartData, setChartData] = useState({
    labels: [],

    datasets: [
      {
        label: "Users Gained ",
        data: [],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "&quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const filterData = {
    State: ["Banglore", "Chennai", "Pune", "Mumbai", "Jaipur", "Bhubaneshwar"],
    City: ["Vehicle 1", "Vehicle 2", "Vehicle 3"],
    DeviceId: ["Customer 1", "Customer 2", "Customer 3"],
  };

  const handleOpenModal = (tab) => {
    setActiveTab(tab);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleModalSubmit = (data) => {
    console.log(data, "on handel modal submit");
    setModalData(data);
  };

  const navigate = useNavigate();

  const redirectToVcu = () => {
    // navigate("/vcu");
  };
  const redirectToBms = () => {
    // navigate("/bms");
  };
  const redirectToVehicle = () => {
    // navigate("/trial");
  };

  return (
    <div className="vcuContainer">
      {/* modal */}
      <CustomModal
        isOpen={modalOpen}
        handleClose={handleCloseModal}
        title={activeTab}
        data={filterData[activeTab]}
        onSubmit={handleModalSubmit}
        filterData={filterData} // Pass the filterData prop here
      />

      {/* vcu header */}

      <div className="vcuHeader">
        <div className="logo">
          <img
            className="logoImg"
            src="https://s3.ap-south-1.amazonaws.com/greentiger.in-content/brand_icons/logo.png"
            alt="logo"
          />
        </div>

        <div className="title">
          <h1>VCU Details</h1>
        </div>

        <div>
          <DateSelectionPicker />
        </div>
      </div>

      {/* Vcu filter */}

      <div className="filterContainer">
        {Object.keys(filterData).map((tab, index) => (
          <div
            key={index}
            className="filter"
            onClick={() => handleOpenModal(tab)}
          >
            <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>

            <span>
              <FilterAltIcon />
            </span>
          </div>
        ))}
      </div>

      {/* Cards Container */}

      <div className="bottomContainer">
        <div className="cardContainer">
          <FlipCard
            frontContent={
              <div>
                <div className="num">0.0 </div>
                <div> Avg Motor Temp (&deg;C)</div>
              </div>
            }
            backContent={<p>Back Content</p>}
          />

          <FlipCard
            frontContent={<h2>Front Content</h2>}
            backContent={<p>Back Content</p>}
          />

          <FlipCard
            frontContent={<h2>Front Content</h2>}
            backContent={<p>Back Content</p>}
          />
          <FlipCard
            frontContent={<h2>Front Content</h2>}
            backContent={<p>Back Content</p>}
          />
          <FlipCard
            frontContent={<h2>Front Content</h2>}
            backContent={<p>Back Content</p>}
          />
          <FlipCard
            frontContent={<h2>Front Content</h2>}
            backContent={<p>Back Content</p>}
          />
        </div>

        {/* Button container */}

        <div className="btnContainer">
          <button onClick={redirectToVehicle}>Vehicle Details</button>
          <button onClick={redirectToVcu}>VCU Details</button>
          <button onClick={redirectToBms}>BMS Details</button>
        </div>
      </div>
    </div>
  );
};

export default Vcu;
