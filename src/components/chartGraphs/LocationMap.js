// import React, { useEffect, useState } from "react";
// import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
// // const { NEXT_PUBLIC_MAPS_API_KEY } = process.env;

// const LocationMap = () => {

//   const containerStyle = {
//     width: "100%",
//     height: "100%",
//   };

//    let ApiKey = 'AIzaSyAYX9RFzH6W0FQCNSx9mhw0o6y5qFDFDro';

//     let Apiurl = "https://jsonplaceholder.typicode.com/users";

//   // const [value, setValue] = useState({latitude:12.897510 , longitude:77.613457});
//   // const exactLocation = {
//   //   lat: value.latitude,
//   //   lng: value.longitude,
//   // };

//   const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });

//   useEffect(() => {
//       fetch(Apiurl)
//           .then(response => response.json())
//           .then(users => {
//               const { address: { geo: { lat, lng } } } = users[6]; // Assuming you're extracting from the first user
  
//               // Convert lat and lng to numbers using parseFloat
//               const latitude = parseFloat(lat);
//               const longitude = parseFloat(lng);
  
//               // Check if latitude and longitude are valid numbers
//               if (!isNaN(latitude) && !isNaN(longitude)) {
//                   setCoordinates({ latitude, longitude });
//               } else {
//                   console.error('Invalid latitude or longitude:', lat, lng);
//               }
//           })
//           .catch(error => {
//               console.error('Error fetching coordinates:', error);
//           });
//   }, []);
  
//   // console.log(coordinates);
  
//   const exactLocation = {
//       lat: coordinates.latitude,
//       lng: coordinates.longitude,
//   };
  
//   return (
//     <LoadScript
//       googleMapsApiKey={ApiKey}>
//       <GoogleMap mapContainerStyle={containerStyle} center={exactLocation}  zoom={3}>
//         <MarkerF position={exactLocation} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default LocationMap;

//<LocationMap latitude={12.97675} longitude={77.57528} />
//googleMapsApiKey="AIzaSyAYX9RFzH6W0FQCNSx9mhw0o6y5qFDFDro" //sarvesh provided
// center={center} this was on GoogleMap Tag

import React from 'react';
import { GoogleMap, MarkerF, LoadScript } from '@react-google-maps/api';

const MapComponent = (props) => {

  const {latitude , longitude} = props;

  let ApiKey = process.env.REACT_APP_GOOGLEMAP_API;

  console.log(ApiKey)

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <LoadScript
      googleMapsApiKey={ApiKey}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}>
          <MarkerF position={center} />
        </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;