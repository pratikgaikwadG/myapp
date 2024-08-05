import React, { useState } from 'react';
import myImage from '../assets/prat.jpeg'; // Ensure this path is correct

const Home = () => {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(true);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button className="btn btn-primary" onClick={handleClick}>
        Show Image
      </button>
      {showImage && <img src={myImage} alt="Displayed on click" className="full-size-image mt-3 " />}
    </div>
  );
};

export default Home;
