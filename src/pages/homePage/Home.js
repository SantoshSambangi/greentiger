import React, { useState, useEffect } from "react";
import NavBar from "../../components/navBar/NavBar";
import "../homePage/home.css";
import MapMarker from "../../components/chartGraphs/MapMarker";
// import MyPieChart from "../vehiclePage/MyPieChart";
// import GoogleMapTracker from "../../components/chartGraphs/Map";

const Home = () => {
  
  // Initialize the PublicClientApplication

  const apiUrl = process.env.REACT_APP_API_URL;
  const [data, setData] = useState(null);
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    fetchData();
  }, []);

  const [latitude, setlatitude] = useState("")
  const [longitude, setlongitude] = useState("")
  useEffect(()=>{
      navigator.geolocation.getCurrentPosition((position) => {
        setlatitude(position.coords.latitude)
        setlongitude(position.coords.longitude)
      })
  },[])

  function fetchData() {
    fetch(`${apiUrl}/analytics/v1/get/${userId}`).then((results) => {
      results.json().then((resp) => {
        console.log(resp.DATA[0].Dev);
        if (process.env.NODE_ENV === "development") {
          setData(resp.DATA[0].Dev);
        } else {
          setData(resp.DATA[0].Prod);
        }
      });
    });
  }

  // console.log(data);

  return (
    <>
      <NavBar />
      <div className="homeContainer">
        <div className="gtTitle">
            <h1>Green Tiger Dashboard</h1>
        </div>

        {/* <GoogleMapTracker/> */}

        <MapMarker/>

        {/* <MyPieChart/> */}

        {/* <iframe className="bi-embedded" title="Report Section" 
        width="100vw" height="80vh" src ={data}  allowFullScreen="true"></iframe> */}
      </div>
    </>
  );
};

export default Home;
