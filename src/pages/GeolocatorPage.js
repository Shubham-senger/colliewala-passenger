// src/App.js
import React from 'react';
import { GeolocationComponent } from '../components/Booking/GeolocatorPage';

function App() {
  return (
    <div className="App ">
      <header className="App-header">
        <h1>Geolocation and Distance Information</h1>
      </header>
      <main>
        <GeolocationComponent />
      </main>
    </div>
  );
}

export default App;
