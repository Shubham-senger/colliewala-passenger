import React from 'react';

const Cart = ({ items, onAddQuantity, onRemoveQuantity }) => {
  return (
    <div>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <img src={item.type.img} alt={item.type.name} className="w-12 h-12 mr-4" />
                <div>
                  <p>{item.type.name}</p>
                  <p>{item.weight} kg</p>
                </div>
              </div>
              <div className="flex items-center">
                <button onClick={() => onAddQuantity(index)} className="bg-blue-500 text-white px-2 py-1 rounded-lg mr-2">+</button>
                <span>{item.quantity}</span>
                <button onClick={() => onRemoveQuantity(index)} className="bg-red-500 text-white px-2 py-1 rounded-lg ml-2">-</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
