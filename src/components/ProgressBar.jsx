import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import logo from './login and registration/logo.svg';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const updateProgress = (status) => {
    switch (status) {
      case 'orderReceived':
        setProgress(0);
        break;
      case 'orderReceivedByCollie':
        setProgress(25);
        break;
      case 'orderStarted':
        setProgress(50);
        break;
      case 'nearingDestination':
        setProgress(75);
        break;
      case 'orderCompleted':
        setProgress(100);
        break;
      default:
        setProgress(0);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 space-y-8">
      <div className="absolute inset-0 opacity-75 bg-cover bg-center" style={{ backgroundImage: 'url(https://raw.githubusercontent.com/mohammadjarabah681/codepen-assets/main/pens/ExpzvRa/images/bg-desktop.png)' }}></div>
      
      <div className="relative z-10 flex flex-row justify-center items-center w-full max-w-4xl px-4 space-x-8">
        {/* First Container */}
        <div className="bg-gray-800 p-8 flex flex-col items-center w-full max-w-xl space-y-4" style={{ borderRadius: '8px 90px 8px 8px' }}>
          <div className="flex flex-col items-center space-y-4">
            <img src={logo} alt="Cooliewale Logo" className="h-12 w-12"></img>
            <div className='flex flex-row gap-7 pt-10'>
              <button className="bg-gray-900 w-10 h-10 flex justify-center items-center rounded-lg hover:bg-gray-800 active:scale-90" aria-label="Location">
              </button>
              <button className="bg-gray-900 w-10 h-10 flex justify-center items-center rounded-lg hover:bg-gray-800 active:scale-90" aria-label="Location">
                <FaMapMarkerAlt className="text-white" />
              </button>
              <button className="bg-gray-900 w-10 h-10 flex justify-center items-center rounded-lg hover:bg-gray-800 active:scale-90" aria-label="Location">
              </button>
            </div>
          </div>
        </div>

        {/* Second Container */}
        <div className="relative bg-gray-800 p-8 rounded-lg flex flex-col items-center w-full max-w-xl space-y-4 z-0">
          <p className="text-gray-200 absolute left-0 top-0  translate-x-0 px-4 py-3">Order ID {} <span className="font-bold">{progress}%</span> completed</p>
          <div className="relative w-full">
            <div className="bg-gray-700 h-4 rounded-full flex items-center p-1">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 h-full rounded-full flex items-center justify-end p-1" style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}>
                <span className="bg-white h-3 w-3 rounded-full shadow"></span>
              </div>
            </div>
            <span className="absolute left-0 top-6 text-xs font-bold text-gray-200">Platform No 1</span>
            <span className="absolute right-0 top-6 text-xs font-bold text-gray-200">BANARAS GATE NO 1</span>
          </div>
          <div className="pickup-point absolute top-0 right-0 transform translate-x-28 -translate-y-28 bg-white p-4 rounded-lg flex items-center space-x-2 shadow-md z-10">
            <span className="text-gray-900 text-2xl font-bold"></span>
            <span className="text-gray-900 font-bold">Pickup Point: Platform NO 1</span>
            <div className="arrow-down"></div>
          </div>
          <div className="mt-8 flex space-x-4"> 
            <button onClick={() => updateProgress('orderReceived')} className="bg-gray-900 w-20 h-12 flex justify-center items-center rounded-lg hover:bg-gray-700 active:scale-90" aria-label="Order ID" title="Order">order is received</button>
            <button onClick={() => updateProgress('orderReceivedByCollie')} className="bg-gray-900 w-20 h-12 flex justify-center items-center rounded-lg hover:bg-gray-700 active:scale-90" aria-label="Location" title="GPS">
              accepted by collie
            </button>
            <button onClick={() => updateProgress('orderStarted')} className="bg-gray-900 w-20 h-12 flex justify-center items-center rounded-lg hover:bg-gray-700 active:scale-90" aria-label="SOS" title="SOS">Order Started</button>
            <button onClick={() => updateProgress('nearingDestination')} className="bg-gray-900 w-20 h-12 flex justify-center items-center rounded-lg hover:bg-gray-700 active:scale-90" aria-label="SOS" title="SOS">nearing destination</button>
            <button onClick={() => updateProgress('orderCompleted')} className="bg-gray-900 w-20 h-12 flex justify-center items-center rounded-lg hover:bg-gray-700 active:scale-90" aria-label="SOS" title="SOS">Order Completed</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProgressBar;
