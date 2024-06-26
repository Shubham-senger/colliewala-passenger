import React, { useState } from 'react';
import LuggageForm from '../components/Luggage/LuggageForm';
import Cart from '../components/Luggage/Cart';
import './Luggage.css';
import { FaShoppingCart } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const luggageTypes = [
  { name: "Trolley Bag", img: "/photo/trolley.jpg" },
  { name: "Backpack", img: "/photo/backpack.jpg" },
  { name: "Duffel Bag", img: "/photo/duffel_bag.png" },
  { name: "Suitcase", img: "/photo/suitcase.webp" }
];

const Luggage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (typeName, weight) => {
    const selectedLuggage = luggageTypes.find(luggage => luggage.name === typeName);
    const existingItemIndex = cartItems.findIndex(item => item.type.name === typeName && item.weight === parseInt(weight, 10));

    if (existingItemIndex >= 0) {
      const updatedItems = cartItems.map((item, i) =>
        i === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { type: selectedLuggage, weight: parseInt(weight, 10), quantity: 1 }]);
    }
  };

  const handleAddQuantity = (index) => {
    const updatedItems = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
  };

  const handleRemoveQuantity = (index) => {
    const updatedItems = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0);
    setCartItems(updatedItems);
  };

  return (
    <div className="container mx-auto p-4 ">
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-2xl font-bold">Luggage Selector</h1>
        
      </div>
      
      <div className="flex justify-center">
        <LuggageForm onAddToCart={handleAddToCart} />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Cart Items</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-600">&times;</button>
            </div>
            <Cart items={cartItems} onAddQuantity={handleAddQuantity} onRemoveQuantity={handleRemoveQuantity} />
          </div>
        </div>
      )}
      <div className="absolute top-0 right-0 p-10">
          <button onClick={() => setIsModalOpen(true)} className="relative">
            <FaShoppingCart className="text-2xl" />
            {cartItems.length > 0 && (
              <span className=" bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
    </div>
  );
};

export default Luggage;
