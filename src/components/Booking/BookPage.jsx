import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import './BookPage.css'; // Create and import your custom CSS file

const servingStations = ['Prayagraj Rambagh', 'Jhunsi', 'Banaras'];

function BookPage() {
  const [selectedStation, setSelectedStation] = useState('');
  const [time, setTime] = useState(new Date());
  const [error, setError] = useState('');
  const [trainNumber, setTrainNumber] = useState('');
  const [date, setDate] = useState(new Date());
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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 p-4 relative overflow-auto">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://raw.githubusercontent.com/mohammadjarabah681/codepen-assets/main/pens/ExpzvRa/images/bg-desktop.png)' }}></div>

      <motion.h1
        className="text-4xl font-bold text-white mb-6 z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Book Your Collie
      </motion.h1>
      <div className='overflow-auto w-96'>
        <motion.div
          className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-md w-full text-white z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Select an option:</h2>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <Link to="/geolocator">
              <motion.div
                className="block p-4 bg-white bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg text-center text-lg font-semibold text-gray-900 hover:bg-opacity-40 transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Auto from GPS
              </motion.div>
            </Link>
            <Link to="/pnrstation">
              <motion.div
                className="block p-4 bg-white bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg text-center text-lg font-semibold text-gray-900 hover:bg-opacity-40 transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enter PNR
              </motion.div>
            </Link>
            <motion.div
              onClick={() => handleModeSelect('train')}
              className="cursor-pointer p-4 bg-white bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg text-center text-lg font-semibold text-gray-900 hover:bg-opacity-40 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enter Train number with Date
            </motion.div>
            <motion.div
              onClick={() => handleModeSelect('manual')}
              className="cursor-pointer p-4 bg-white bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg text-center text-lg font-semibold text-gray-900 hover:bg-opacity-40 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Manually enter
            </motion.div>
          </div>

          {mode === 'train' && (
            <>
              <div className="mt-4">
                <label htmlFor="trainNumber" className="block text-sm font-medium">Train Number:</label>
                <input
                  type="text"
                  id="trainNumber"
                  className="w-full p-2 border rounded bg-white bg-opacity-50 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={trainNumber}
                  onChange={(e) => setTrainNumber(e.target.value)}
                  placeholder="Enter train number"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="date" className="block text-sm font-medium">Date:</label>
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="w-full p-2 border rounded bg-white bg-opacity-50 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full p-2 border rounded bg-white bg-opacity-50 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedStation}
                  onChange={handleStationSelect}
                  placeholder="Please select a station"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="time" className="block text-sm font-medium">Time:</label>
                <div className="w-full p-2 rounded-lg bg-white bg-opacity-50 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <TimePicker
                    onChange={setTime}
                    value={time}
                    className="w-full rounded-lg"
                    disableClock={false}
                    clockClassName="bg-white bg-opacity-50 text-gray-800"
                    hourPlaceholder="HH"
                    minutePlaceholder="MM"
                  />
                </div>
              </div>
            </>
          )}

          {error && <p className="text-red-500 mt-4">{error}</p>}

          <motion.button
            onClick={handleSubmit}
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-all transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </motion.div>
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
