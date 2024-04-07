import React, { useEffect } from 'react';

const CustomDropdown = ({ options, onSelect, text, selectedOptionProp }) => {
  useEffect(() => {
    // No need to maintain a separate state for selectedOption
  }, [selectedOptionProp]);

  const handleSelect = (option) => {
    onSelect(option);
  };

  return (
    <div className="desDiv">
      <select className="destinatioDropdown" value={selectedOption} onChange={(e) => handleSelect(e.target.value)}>
        <option value="">Where to?</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropdown;
