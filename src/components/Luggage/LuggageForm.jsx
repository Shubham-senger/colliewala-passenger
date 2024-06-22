import React, { useState, useEffect } from 'react';
import LuggageItem from './LuggageItem';

const LuggageForm = ({ onAddToCart }) => {
  const [luggageList, setLuggageList] = useState([{ id: 0, type: '', weight: '' }]);
  const [reset, setReset] = useState(false);

  const updateLuggage = (index, type, weight) => {
    const updatedList = luggageList.map((item, i) =>
      i === index ? { ...item, type, weight } : item
    );
    setLuggageList(updatedList);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    luggageList.forEach(item => {
      if (item.type && item.weight) {
        onAddToCart(item.type.name, item.weight);
      }
    });
    setLuggageList([{ id: 0, type: '', weight: '' }]);
    setReset(true);
  };

  useEffect(() => {
    if (reset) {
      setReset(false);
    }
  }, [reset]);

  return (
    <form id="luggageForm" onSubmit={handleFormSubmit}>
      <div id="luggageContainer">
        {luggageList.map((item, index) => (
          <LuggageItem key={item.id} index={index} updateLuggage={updateLuggage} reset={reset} />
        ))}
      </div>
      <div className="buttons">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default LuggageForm;
