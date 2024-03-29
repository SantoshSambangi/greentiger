import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = ({ AIzaSyC5up3l9sQYetSMfhA2E6b00Z8zBExbD6o }) => {
  const mapStyles = {
    height: "31vh",
    width: "30vw"
  };

  const defaultCenter = {
    lat: 20.712776,
    lng: -24.005974
  };

  return (
    <div>
    <LoadScript googleMapsApiKey={AIzaSyC5up3l9sQYetSMfhA2E6b00Z8zBExbD6o}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
    </div>
  );
};

export default MapContainer;
