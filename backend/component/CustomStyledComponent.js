import React from 'react';
import './CustomStyledComponent.css'; // Custom styles

const CustomStyledComponent = () => {
  return (
    <div className="custom-container">
      <h1 className="text-center">Welcome to My App</h1>
      <button className="btn btn-success custom-button">Click Me</button>
    </div>
  );
};

export default CustomStyledComponent;
