// import React from 'react'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// function MyGoogleMap() {

//   // const apiKey = "AIzaSyC5up3l9sQYetSMfhA2E6b00Z8zBExbD6o";
//   const apiKey = "AIzaSyAYX9RFzH6W0FQCNSx9mhw0o6y5qFDFDro";
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: apiKey
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={3}
//         onLoad={onLoad}
//         onUnmount={onUnmount}>
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//   ) : <></>
// }

// export default React.memo(MyGoogleMap)

import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '300px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent() {

  const apiKey = "AIzaSyAYX9RFzH6W0FQCNSx9mhw0o6y5qFDFDro";
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
          <Marker key={`${marker.lat}-${marker.lng}`} position={{ lat: marker.lat, lng: marker.lng }} />
        ))}
      </GoogleMap>
  ) : <></>;
}

export default React.memo(MyComponent);
