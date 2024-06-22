import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScriptNext, MarkerF } from '@react-google-maps/api';
import { Link, useNavigate } from 'react-router-dom';

const servingStations = [
  { name: 'Prayagraj Rambagh', lat: 25.4358, lon: 81.8463 },
  { name: 'Jhunsi', lat: 25.4520, lon: 81.8510 },
  { name: 'Banaras', lat: 25.3176, lon: 82.9739 },
];

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
}

function GeolocatorModal({ onClose, onStationSelect }) {
  const [location, setLocation] = useState(null);
  const [nearestStation, setNearestStation] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {
          setError('Unable to retrieve your location');
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (location) {
      let closestStation = null;
      let minDistance = Infinity;

      servingStations.forEach((station) => {
        const distance = calculateDistance(location.lat, location.lon, station.lat, station.lon);

        if (distance < minDistance) {
          closestStation = station;
          minDistance = distance;
        }
      });

      if (minDistance <= 10) {
        setNearestStation({ ...closestStation, time: 'within 15 mins' });
      } else if (minDistance <= 50) {
        setNearestStation({ ...closestStation, time: 'within 40 mins' });
      } else if (minDistance <= 100) {
        setNearestStation({ ...closestStation, time: 'within 1 hour' });
      } else {
        setNearestStation(null);
        setError('We are not servicing this area yet');
      }
    }
  }, [location]);

  const handleAccept = () => {
    if (nearestStation) {
      navigate('/book', { state: { station: nearestStation.name, time: nearestStation.time } });
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6">Select Nearest Station</h1>
        {loading && <p>Loading your location...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {nearestStation && (
          <div>
            <p className="mb-4">
              The nearest station is <strong>{nearestStation.name}</strong> ({nearestStation.time})
            </p>
            <button
              onClick={handleAccept}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Accept Station
            </button>
          </div>
        )}
        {!loading && !nearestStation && !error && <p>Calculating nearest station...</p>}
        <div className="mt-4">
          <LoadScriptNext
            googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" // Replace with your actual API key
            libraries={['places']}
          >
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '400px' }}
              center={location ? { lat: location.lat, lng: location.lon } : { lat: 0, lng: 0 }}
              zoom={10}
            >
              {location && (
                <MarkerF position={{ lat: location.lat, lng: location.lon }} />
              )}
            </GoogleMap>
          </LoadScriptNext>
        </div>
        <div className="mt-4">
          <Link to="/book">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Write Manually
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GeolocatorModal;
