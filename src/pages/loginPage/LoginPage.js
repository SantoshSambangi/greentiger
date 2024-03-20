// import React, { useState } from "react";
// import { signInWithEmailAndPassword, sig } from "firebase/auth";
// import "./login.css";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../../config/firebase";

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const onLogin = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         navigate("/home");
//         localStorage.setItem("user_id", user.uid);
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//       });
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form">
//         <img
//           src="https://s3.ap-south-1.amazonaws.com/greentiger.in-content/brand_icons/logo.png"
//           alt="logo"
//           style={{
//             width: "90%",
//             height: "20%",
//             padding: "10px",
//           }}
//         />

//         <div className="form-group">
//           <label>Email</label>
//           <input
//             id="email-address"
//             name="email"
//             type="email"
//             required
//             placeholder="Email address"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           {error ? <small>{error.msg}</small> : ""}
//         </div>

//         <div className="form-group">
//           <label>Password</label>
//           <input
//             id="password"
//             name="password"
//             type="password"
//             required
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}/>
//         </div>

//         <button type="submit" onClick={onLogin}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;


import React from 'react'

const LoginPage = () => {

  return (
    <div>LoginPage</div>

  )
}

export default LoginPage
