// src/GeolocationComponent.js
import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';

const BASE_URL = 'https://reversegeocoder.vercel.app/distance?';

export function GeolocationComponent() {
  const [position, setPosition] = useState({
    latitude: null,
    longitude: null,
    accuracy: null,
    speed: null,
  });
  const [error, setError] = useState(null);
  const [distanceData, setDistanceData] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      const timeoutId = setTimeout(() => {
        setError('Geolocation timed out.');
      }, 10000); // Set a 10-second timeout

      navigator.geolocation.getCurrentPosition(
        (position) => {
          clearTimeout(timeoutId);
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
            speed: position.coords.speed,
          });
        },
        (error) => {
          clearTimeout(timeoutId);
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser or device.');
    }
  }, []);

  useEffect(() => {
    if (position.latitude !== null && position.longitude !== null) {
      fetch(`${BASE_URL}lat=${position.latitude}&lon=${position.longitude}`)
        .then((response) => response.json())
        .then((data) => {
          setDistanceData(data);
        })
        .catch((error) => {
          console.error('Error fetching distance:', error);
        });
    }
  }, [position]);

  return (
    <div className="relative min-h-screen ">
      <div className="container mx-auto pt-8 relative z-10 flex flex-col items-center">
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
          {/* Geolocation Details Card */}
          <Card className="backdrop-blur-md shadow-lg bg-opacity-0 border-2 border-gray-300">
            <div className="mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Geolocation Details
              </h5>
            </div>
            <div>
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {error ? (
                  <li className="py-3 sm:py-4">
                    <p className="text-sm text-red-500">{error}</p>
                  </li>
                ) : position.latitude && position.longitude ? (
                  <>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                            Latitude: {position.latitude}
                          </p>
                          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                            Longitude: {position.longitude}
                          </p>
                          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                            Accuracy: ±{position.accuracy} meters
                          </p>
                          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                            Speed: {position.speed} m/s
                          </p>
                        </div>
                      </div>
                    </li>
                  </>
                ) : (
                  <li className="py-3 sm:py-4">
                    <p>Loading geolocation...</p>
                  </li>
                )}
              </ul>
            </div>
          </Card>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3">
          {/* Distance Information Card */}
          <Card className="backdrop-blur-md shadow-lg bg-opacity-0 border-2 border-gray-300">
            <div className="mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Distance Information
              </h5>
            </div>
            <div>
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {distanceData ? (
                  <>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                            Origin: {distanceData.origin_addresses[0]}
                          </p>
                          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                            Destination: {distanceData.destination_addresses[0]}
                          </p>
                          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                            Distance: {distanceData.rows[0].elements[0].distance.text}
                          </p>
                          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                            Duration: {distanceData.rows[0].elements[0].duration.text}
                          </p>
                          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                            Status: {distanceData.status}
                          </p>
                        </div>
                      </div>
                    </li>
                  </>
                ) : (
                  <li className="py-3 sm:py-4">
                    <p>Loading distance information...</p>
                  </li>
                )}
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
