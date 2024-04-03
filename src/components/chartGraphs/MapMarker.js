import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '300px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const MapMarker = () => {
    const apiKey = "AIzaSyC5up3l9sQYetSMfhA2E6b00Z8zBExbD6o";
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: apiKey
    })

const [map, setMap] = useState(null);
const [markers, setMarkers] = useState([]);

const onLoad = React.useCallback(function callback(map) {
  // This is just an example of getting and using the map instance!!! don't just blindly copy!
  const bounds = new window.google.maps.LatLngBounds(center);
  map.fitBounds(bounds);
  setMap(map);
}, [])

const onUnmount = React.useCallback(function callback(map) {
  setMap(null);
}, [])

const addMarker = (event) => {
  setMarkers([...markers, {
    lat: event.latLng.lat(),
    lng: event.latLng.lng(),
    time: new Date()
  }]);
};

return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={2}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={addMarker}
    >
      {markers.map(marker => (
        <MarkerF key={`${marker.lat}-${marker.lng}`} position={{ lat: marker.lat, lng: marker.lng }} />
      ))}
    </GoogleMap>
) : <></>;
}
export default MapMarker;

//lat: 12.322800, lng: 76.519783
// apiKet = AIzaSyC5up3l9sQYetSMfhA2E6b00Z8zBExbD6o

//gtApiKey = "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"
