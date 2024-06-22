import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const servingStations = ['Prayagraj Rambagh', 'Jhunsi', 'Banaras'];

function BookPage() {
  const [selectedStation, setSelectedStation] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');
  const [trainNumber, setTrainNumber] = useState('');
  const [date, setDate] = useState('');
  const [mode, setMode] = useState('');

  const handleStationSelect = (e) => {
    const station = e.target.value;
    setSelectedStation(station);
    if (!servingStations.includes(station)) {
      setError(`WE ARE NOT yet servicing ${station}, we may serve you in future`);
    } else {
      setError('');
    }
  };

  const handleModeSelect = (mode) => {
    setMode(mode);
    setError('');
  };

  const handleSubmit = () => {
    if (mode === 'train') {
      fetchTrainDetails(trainNumber, date).then((data) => {
        if (servingStations.includes(data.destination_station)) {
          // Navigate to step 6 with details
        } else {
          setError('We are not servicing this station yet');
        }
      });
    } else if (mode === 'manual') {
      if (servingStations.includes(selectedStation)) {
        // Navigate to step 6 with details
      } else {
        setError('We are not servicing this station yet');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-auto bg-gray-900 p-4">
      <div className="absolute inset-0 opacity-75 bg-cover bg-center" style={{ backgroundImage: 'url(https://raw.githubusercontent.com/mohammadjarabah681/codepen-assets/main/pens/ExpzvRa/images/bg-desktop.png)' }}></div>

      <h1 className="text-4xl font-bold text-white mb-6">Book Your Collie</h1>
      <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-md w-full text-white">
        <h2 className="text-2xl font-semibold mb-4">Select an option:</h2>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <Link to="/geolocator" className="block p-4 bg-white bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg text-center text-lg font-semibold text-gray-900 hover:bg-opacity-40 transition-all">
            Auto from GPS
          </Link>
          <Link to="/pnrstation" className="block p-4 bg-white bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg text-center text-lg font-semibold text-gray-900 hover:bg-opacity-40 transition-all">
            Enter PNR
          </Link>
          <div onClick={() => handleModeSelect('train')} className="cursor-pointer p-4 bg-white bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg text-center text-lg font-semibold text-gray-900 hover:bg-opacity-40 transition-all">
            Enter Train number with Date
          </div>
          <div onClick={() => handleModeSelect('manual')} className="cursor-pointer p-4 bg-white bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg text-center text-lg font-semibold text-gray-900 hover:bg-opacity-40 transition-all">
            Manually enter
          </div>
        </div>

        {mode === 'train' && (
          <>
            <div className="mt-4">
              <label htmlFor="trainNumber" className="block text-sm font-medium">Train Number:</label>
              <input
                type="text"
                id="trainNumber"
                className="w-full p-2 border rounded bg-white bg-opacity-50 text-gray-800"
                value={trainNumber}
                onChange={(e) => setTrainNumber(e.target.value)}
                placeholder="Enter train number"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="date" className="block text-sm font-medium">Date:</label>
              <input
                type="date"
                id="date"
                className="w-full p-2 border rounded bg-white bg-opacity-50 text-gray-800"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Enter date"
              />
            </div>
          </>
        )}

        {mode === 'manual' && (
          <>
            <div className="mt-4">
              <label htmlFor="station" className="block text-sm font-medium">Select Station:</label>
              <input
                type="text"
                id="station"
                className="w-full p-2 border rounded bg-white bg-opacity-50 text-gray-800"
                value={selectedStation}
                onChange={handleStationSelect}
                placeholder="Please select a station"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 font-semibold">Time:</label>
              <input
                type="text"
                className="w-full p-2 border rounded bg-white bg-opacity-50 text-gray-800"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="Enter time"
              />
            </div>
          </>
        )}

        {error && <p className="text-red-500 mt-4">{error}</p>}

        <button onClick={handleSubmit} className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-all transform hover:scale-105">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default BookPage;

// Function to simulate fetching train details
async function fetchTrainDetails(trainNumber, date) {
  // Replace with actual API call logic
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ destination_station: 'Banaras' }); // Example response
    }, 1000);
  });
}
