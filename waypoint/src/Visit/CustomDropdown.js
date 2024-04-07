import React, { useState } from 'react';

const CustomDropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(["Bob", "Not Bob"]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="custom-dropdown">
      <select value={selectedOption} onChange={(e) => handleSelect(e.target.value)}>
        <option value="">Where to?</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropdown;
