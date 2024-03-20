import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../navBar/navBar.css";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import UserDisplayName from "../displayName/UserDisplayName";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        window.alert("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const redirect = () => {
    // navigate("/trial");
  };

  return (
    <>
      <nav className="navBar">
        <div className="navLogo">
          <img
            className="logoImage"
            src="https://s3.ap-south-1.amazonaws.com/greentiger.in-content/brand_icons/logo.png"
            alt="logo"
          />
        </div>

        <div className="navContant">
          <ul className="navItems">
            <li>
              <Link to="/vehicledetails">Vehicle Details</Link>
            </li>
            <li>
              <Link to="/bms">BMS Details</Link>
            </li>
            <li>
              <Link to="/vcu">VCU Details</Link>
            </li>
          </ul>
        </div>

        <div className="user">
          <div>
            <span className="username">
              <UserDisplayName />
            </span>
          </div>
          <span className="logOut" onClick={handleLogout}>
            Logout
          </span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
