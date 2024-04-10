import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const GoogleMapWithMarker = ({ apiUrl }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setLatitude(data.latitude);
        setLongitude(data.longitude);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: latitude, lng: longitude }}
        zoom={10}
      >
        <MarkerF position={{ lat: latitude, lng: longitude }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapWithMarker;


