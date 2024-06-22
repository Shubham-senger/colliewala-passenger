import React from 'react';
import Navbar from '../components/navbar';
import Card from '../components/cards';

function Home() {
  return (
    <div className="flex h-screen bg-gray-900 relative">
      <div className="absolute inset-0 opacity-75 bg-cover bg-center" style={{ backgroundImage: 'url(https://raw.githubusercontent.com/mohammadjarabah681/codepen-assets/main/pens/ExpzvRa/images/bg-desktop.png)' }}></div>
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <Card />
      </div>
    </div>
  );
}

export default Home;
