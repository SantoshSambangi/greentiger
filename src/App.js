import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/loginPage/LoginPage";
import Home from "./pages/homePage/Home";
import Vcu from "./pages/vcuPage/Vcu";
import Bms from "./pages/bmsPage/Bms";
// import Trail from "./pages/trailPage/Trail";
import { DataProvider } from "./providers/AppDataProvider";
import VehicleDetails from "./pages/vehiclePage/VehicleDetails";
import PageNotFound404 from "./pages/pageNotFound/PageNotFound404";
import RemoteLock from "./pages/remotePage/RemoteLock";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/vehicledetails" element={<VehicleDetails />} />
          <Route path="/bms" element={<Bms />} />
          <Route path="/vcu" element={<Vcu />} />
          <Route path="/remotelock" element={<RemoteLock />} />
          {/* <Route path="/trail" element={<Trail />} /> */}
          <Route path="*" element={<PageNotFound404 />} />
        </Routes>
      </DataProvider>
    </div>
  );
}
export default App;
