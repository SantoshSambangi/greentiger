import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
//google map api key : AIzaSyC5up3l9sQYetSMfhA2E6b00Z8zBExbD6o
//google map api key : AIzaSyC5up3l9sQYetSMfhA2E6b00Z8zBExbD6o

// class GoogleMapsConstants {
//   static const String mapsApiKey = "AIzaSyAYX9RFzH6W0FQCNSx9mhw0o6y5qFDFDro";
 
//   static const String baseUrl = "maps.googleapis.com";
 
//   static const String routeDirections = "/maps/api/directions/json";
// }