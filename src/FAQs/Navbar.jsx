import React from 'react';
import './Navbar.css';

const Navbar = ({ setCardToShow }) => {
  const handleButtonClick = (cardIndex) => {
    setCardToShow(cardIndex);
  };

  return (
    <div className="navbar">
      <button onClick={() => handleButtonClick(0)}>About Us</button>
      <button onClick={() => handleButtonClick(1)}>Circular Economy</button>
      <button onClick={() => handleButtonClick(2)}>EPR</button>
      <button onClick={() => handleButtonClick(3)}>E-Waste</button>
      <button onClick={() => handleButtonClick(4)}>Consumers</button>
    </div>
  );
};

export default Navbar;  