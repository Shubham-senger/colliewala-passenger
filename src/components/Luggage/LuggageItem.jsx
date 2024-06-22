import React, { useEffect, useState } from 'react';

const luggageTypes = [
  { name: "Trolley Bag", img: "/photo/trolley.jpg" },
  { name: "Backpack", img: "/photo/backpack.jpg" },
  { name: "Duffel Bag", img: "/photo/duffel_bag.png" },
  { name: "Suitcase", img: "/photo/suitcase.webp" }
];

const LuggageItem = ({ index, updateLuggage, reset }) => {
  const [selectedType, setSelectedType] = useState('');
  const [weight, setWeight] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (reset) {
      setSelectedType('');
      setWeight('');
      setImageSrc('');
    }
  }, [reset]);

  const handleTypeChange = (event) => {
    const type = event.target.value;
    setSelectedType(type);
    const selectedLuggage = luggageTypes.find(luggage => luggage.name === type);
    setImageSrc(selectedLuggage ? selectedLuggage.img : '');
    updateLuggage(index, selectedLuggage, weight);
  };

  const handleWeightChange = (event) => {
    const weight = event.target.value;
    setWeight(weight);
    const selectedLuggage = luggageTypes.find(luggage => luggage.name === selectedType);
    updateLuggage(index, selectedLuggage, weight);
  };

  return (
    <div className="card">
      <label>Luggage {index + 1}</label>
      <select value={selectedType} onChange={handleTypeChange}>
        <option value="">Select item</option>
        {luggageTypes.map(type => (
          <option key={type.name} value={type.name}>{type.name}</option>
        ))}
      </select>
      <label>Weight (kg)</label>
      <input type="number" value={weight} onChange={handleWeightChange} min="0" />
      {imageSrc && <img src={imageSrc} alt="Selected Luggage" />}
    </div>
  );
};

export default LuggageItem;
