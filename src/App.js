import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/loginPage/LoginPage";
import Home from "./pages/homePage/Home";
import Vcu from "./pages/vcuPage/Vcu";
import Bms from "./pages/bmsPage/Bms";
import Trail from "./pages/trailPage/Trail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/vcu" element={<Vcu/>} />
        <Route path="/bms" element={<Bms/>}/>
        <Route path="/trail" element={<Trail/>} />
      </Routes>
    </div>
  );
}
export default App;
