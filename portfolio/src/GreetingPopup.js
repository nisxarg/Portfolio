import React from 'react';
import './App.css';
import greetingImage from './greetingImage.png'; // Import your greeting image

const GreetingPopup = ({ onClose }) => {
  return (
    <div className="greeting-popup">
      <img src={greetingImage} alt="Greeting Image" className="greeting-image" />
      <button onClick={onClose} className="close-button">Close</button>
    </div>
  );
};

export default GreetingPopup;
