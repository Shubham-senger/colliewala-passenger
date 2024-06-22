import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const servingStations = ['Prayagraj Rambagh', 'Jhunsi', 'Banaras'];

function PNRStation() {
  const [selectedStation, setSelectedStation] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');
  const [pnr, setPnr] = useState('');
  const [journeyDetails, setJourneyDetails] = useState(null);
  const navigate = useNavigate();

  const handlePnrSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`PNR_API_URL/${pnr}`);
      const data = await response.json();
      setJourneyDetails(data);

      const liveTrainResponse = await fetch(`LIVE_TRAIN_API_URL/${data.train_number}`);
      const liveTrainData = await liveTrainResponse.json();

      if (servingStations.includes(data.destination_station)) {
        // Proceed to quote details
        navigate('/quote', { state: { journeyDetails: data, liveTrainData } });
      } else {
        setError('We are not servicing this station yet');
      }
    } catch (error) {
      console.error('Error fetching PNR status:', error);
      setError('Error fetching PNR status. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 p-4">
      <div className="absolute inset-0 opacity-75 bg-cover bg-center" style={{ backgroundImage: 'url(https://raw.githubusercontent.com/mohammadjarabah681/codepen-assets/main/pens/ExpzvRa/images/bg-desktop.png)' }}></div>

      <h1 className="text-4xl font-bold text-white mb-6">Enter PNR Details</h1>
      <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-md w-full text-white transform transition-transform hover:scale-105 hover:shadow-2xl">
        <form onSubmit={handlePnrSubmit} className="space-y-4">
          <div>
            <label htmlFor="pnr" className="block text-sm font-medium">Enter PNR:</label>
            <input
              type="text"
              id="pnr"
              className="w-full p-2 border rounded bg-white bg-opacity-50 text-gray-800"
              value={pnr}
              onChange={(e) => setPnr(e.target.value)}
              placeholder="Enter PNR"
              required
            />
          </div>
          <div>
            <label htmlFor="station" className="block text-sm font-medium">Select Station:</label>
            <input
              type="text"
              id="station"
              className="w-full p-2 border rounded bg-white bg-opacity-50 text-gray-800"
              value={selectedStation}
              onChange={(e) => setSelectedStation(e.target.value)}
              placeholder="Please select a station"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Time:</label>
            <input
              type="text"
              className="w-full p-2 border rounded bg-white bg-opacity-50 text-gray-800"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Enter time"
            />
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition-all transform hover:scale-105">
            Check PNR Status
          </button>
        </form>
      </div>
    </div>
  );
}

export default PNRStation;
