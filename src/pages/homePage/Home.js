import React, { useState, useEffect } from "react";
import NavBar from "../../components/navBar/NavBar";
import "../homePage/home.css";

const Home = () => {
  // Initialize the PublicClientApplication

  const apiUrl = process.env.REACT_APP_API_URL;
  const [data, setData] = useState(null);
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    fetchData();
  }, []);

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

  console.log(data);

  return (
    <>
      <NavBar />
      <div className="homeContainer">
        <div className="gtTitle">
            <h1>Green Tiger Dashboard</h1>
        </div>
        
        {/* <iframe className="bi-embedded" title="Report Section" 
        width="100vw" height="80vh" src ={data}  allowFullScreen="true"></iframe> */}
      </div>
    </>
  );
};

export default Home;
