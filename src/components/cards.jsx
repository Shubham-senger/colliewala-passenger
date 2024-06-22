import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="flex justify-center items-center h-full p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="card bg-gradient-to-r from-blue-400 to-blue-600 backdrop-blur-lg rounded-2xl shadow-xl p-8 text-center text-white transform transition-transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Book Your Collie</h2>
          <img
            src="https://via.placeholder.com/150"
            alt="Collie"
            className="rounded-2xl mb-4 mx-auto"
          />
          <p className="mb-4">Book a collie for your assistance</p>
          <Link to="/book">
            <button className="button bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-all transform hover:scale-105">
              Book Now
            </button>
          </Link>
        </div>
        <div className="card bg-gradient-to-r from-blue-400 to-blue-600 backdrop-blur-lg rounded-2xl shadow-xl p-8 text-center text-white transform transition-transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Order Status</h2>
          <img
            src="https://via.placeholder.com/150"
            alt="Order Status"
            className="rounded-2xl mb-4 mx-auto"
          />
          <p className="mb-4">Check the status of your order</p>
          <Link to="/timeline">
            <button className="button bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-all transform hover:scale-105">
              Check Status
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
