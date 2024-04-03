import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const GoogleMapTracker = ({ latitude, longitude }) => {

  const apiKey = "AIzaSyC5up3l9sQYetSMfhA2E6b00Z8zBExbD6o";
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={latitude && longitude ? { lat: latitude, lng: longitude } : center}
        zoom={10}
      >
        {latitude && longitude && <MarkerF position={{ lat: latitude, lng: longitude }} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapTracker;
