// Assuming you're using Firebase for authentication and have initialized it properly
import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../../config/firebase";
const UserDisplayName = () => {

  // const [user, setUser] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {

      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const email = user.email;
        // ...
        setUserEmail(email);
      } else {
        // User is signed out
        console.log("user is logged out");
      }
    });
  }, []);

  return (
    <>
      <div>
        <p style={{color:"red"}}>Welcome,{userEmail ? userEmail : "User"} </p>
      </div>
    </>
  );
};

export default UserDisplayName;
