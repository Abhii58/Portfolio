import React from 'react';
import './InputField.css';

const InputField = ({ placeholder }) => {
  return (
    <div className="input-field">
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default InputField;
