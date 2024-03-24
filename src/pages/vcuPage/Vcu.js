import React from 'react';
import "../vcuPage/vcu.css";
import { useLocation, useNavigate } from 'react-router-dom';

const Vcu = () => {

  const navigate = useNavigate();
  const location = useLocation();

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
    <div>

            {
              btnData.map((item, index) =>{
                return <button key={index} className={location.pathname === "/vcu" && item  === "Vcu Details" ? "vcuBtn" : "inActiveBtn"}
                onClick={()=> handleBtn(item)}
                >{item}</button>
              })
            }
    </div>
  )
}

export default Vcu;