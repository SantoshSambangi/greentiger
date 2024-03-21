import React, { useState } from "react";
import { signInWithEmailAndPassword, sig } from "firebase/auth";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
        localStorage.setItem("user_id", user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <img
          src="https://s3.ap-south-1.amazonaws.com/greentiger.in-content/brand_icons/logo.png"
          alt="logo"
          style={{
            width: "90%",
            height: "20%",
            padding: "10px",
          }}
        />

        <div className="form-group">
          <label>Email</label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <button type="submit" onClick={onLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

// import React, { useState } from "react";
// import { signInWithEmailAndPassword, sig } from "firebase/auth";
// import "./login.css";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../../config/firebase";

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   const isValidEmail = (email) => {
//     // Regular expression for basic email validation
//     const emailRegex = /^\S+@\S+\.\S+$/;
//     return emailRegex.test(email);
//   };

//   const isValidPassword = (password) => {
//     // Regular expressions for password validation
//     const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
//     const numberRegex = /[0-9]/;
//     const upperCaseRegex = /[A-Z]/;
//     const lowerCaseRegex = /[a-z]/;
//     return (
//       password.length >= 8 &&
//       symbolRegex.test(password) &&
//       numberRegex.test(password) &&
//       upperCaseRegex.test(password) &&
//       lowerCaseRegex.test(password)
//     );
//   };

//   const validateForm = () => {
//     let newErrors = {};
//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!isValidEmail(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }
//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (!isValidPassword(formData.password)) {
//       newErrors.password =
//         "Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowercase letter";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const onLogin = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, formData.email, formData.password)
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
//     <div className="loginContainer">
//       <form className="loginForm">
//         <img
//           src="https://s3.ap-south-1.amazonaws.com/greentiger.in-content/brand_icons/logo.png"
//           alt="logo"
//           style={{
//             width: "90%",
//             height: "20%",
//             padding: "10px",
//           }}
//         />

//         <div className="formGroup">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             placeholder="Enter your email"
//             required
//             onChange={handleChange}
//           />
//           {errors.email && (
//             <div className="error">{errors.email}</div>
//           )}
//         </div>

//         <div className="formGroup">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             placeholder="Enter your password"
//             id="password"
//             required
//             onChange={handleChange}
//           />
//           {errors.password && <div className="error">{errors.password}</div>}
//         </div>

//         <button type="submit" onClick={onLogin}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };
// export default LoginPage;
