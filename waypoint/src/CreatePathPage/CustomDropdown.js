import React, { useState } from 'react';

const CustomDropdown = ({ options, onSelect, text }) => {
  const [selectedOption, setSelectedOption] = useState(["Bob", "Not Bob"]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div style={{width:`100%`}}>
      <select className="customDropdown" value={selectedOption} onChange={(e) => handleSelect(e.target.value)}>
        <option value="">{text}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropdown;
