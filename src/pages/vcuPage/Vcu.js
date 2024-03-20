import React, { useState } from "react";
// import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import "../vcuPage/vcu.css";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FlipCard from "../../components/flipCard/FlipCard";
import CustomModal from "../../components/modal/Modal";
import DateSelectionPicker from "../../components/dateRangePicker/DateSelectionPicker";
// import BarChart from "../../components/chartGraphs/BarChart";
import { VscSearch } from "react-icons/vsc";
import FilterBox from "../../components/filterBox/FilterBox";
import Card from "../../components/cards/Card";
// import BarChart from "../../components/chartGraphs/BarChart";
import ExpChart from "../../components/chartGraphs/ExpChart";
import BarChart from "../../components/chartGraphs/BarChart";
import PieChart from "../../components/chartGraphs/PieChart";
import LineChart from "../../components/chartGraphs/LineChart";
// import Card from "../../components/cards/Card";

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

  const [date,setDate] = useState({
    startDate : "",
    endDate: "",
  })
    console.log(date)

  // const getDateRange = (e) => {
  //     setDate({
  //         startDate : e.target.value,
  //         endDate : e.target.value
  //     })
  // }

  //   console.log(date.startDate, date.endDate)

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

        <div className="vcuRightBlock">
          <div className="title">
            <h1>Vehicle Details</h1>
          </div>

          {/* <div>
          <DateSelectionPicker />
        </div> */}

          <div className="vehicleNumbers">
            <h1>2</h1>
            <p>Vehicles</p>
          </div>

          <div className="dateRange">
            <input type="date" value={date.startDate} onChange={(e)=> setDate({...date,startDate: e.target.value}) }/>
            <input type="date" value={date.endDate} onChange={(e)=> setDate({...date,endDate: e.target.value}) } />
          </div>
        </div>
      </div>

      {/* Vcu filter */}

      <div className="filterContainer">
        <FilterBox  title={<h4>State</h4>} />
        <FilterBox title={<h4>Locality</h4>} />
        <FilterBox title={<h4>Device Id</h4>} />
        <FilterBox title={<h4>Brand</h4>} />
        <FilterBox title={<h4>Modal</h4>} />
        <FilterBox title={<h4>Age</h4>} />
        <FilterBox title={<h4>Gender</h4>} />
        <FilterBox title={<h4>Profession</h4>} />
      </div>

           

      {/* Cards Container */}

      <div className="bottomContainer">
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
            backContent={<BarChart/>}
          />
          <Card
            frontContent={<h2>Front Content</h2>}
            backContent={<PieChart />}
          />
          <Card
            frontContent={<h2>Front Content</h2>}
            backContent={<LineChart/>}
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
          <button onClick={redirectToVcu}>VCU Details</button>
          <button onClick={redirectToBms}>BMS Details</button>
        </div>
      </div>
    </div>
  );
};

export default Vcu;
