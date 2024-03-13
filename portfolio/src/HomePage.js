// HomePage.js

import React from 'react';
import gif from './gif.gif';

const HomePage = () => (
  <div className="main-content">
    {/* Box around text content */}
    <div className="content-box">
      <h1>Hello, I'm Nisarg Jadav</h1>
      <p>
        A passionate technologist with a flair for innovation. From developing futuristic communication systems for soldiers to crafting robots, I thrive on bringing cutting-edge ideas to life. Explore my journey through technology, robotics, and creative endeavors as I strive to make a meaningful impact in the world of innovation.
      </p>
    </div>
    
    {/* GIF */}
    <img src={gif} alt="Your GIF" className="gif" />
  </div>
);

export default HomePage;
