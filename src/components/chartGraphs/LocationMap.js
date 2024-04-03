import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const LocationMap = ({ latitude, longitude }) => {
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAYX9RFzH6W0FQCNSx9mhw0o6y5qFDFDro"
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <MarkerF position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default LocationMap;

//<LocationMap latitude={12.97675} longitude={77.57528} />
//googleMapsApiKey="AIzaSyAYX9RFzH6W0FQCNSx9mhw0o6y5qFDFDro" //sarvesh provided