//TrackingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import image from './iphone1.png'; // Import the background image
import image1 from './grocery.PNG';
import image2 from './filler.PNG';
import image3 from './battery.PNG';
import '../App.css';

const TrackingPage = () => {
  return (
    <div className="page-container" style={{ position: 'relative' }}>
      <img src={image} className="background-image" alt="" style={{ width: '272%', marginTop: '-280px', position: 'absolute', zIndex: 2, left: -140 }} />
      <img src={image1} className="background-image" alt="" style={{ width: '180%', marginTop: '-252px', position: 'absolute', zIndex: 1, right: -70 }} />
      <img src={image2} className="background-image" alt="" style={{ width: '180%', marginTop: '233px', position: 'absolute', zIndex: 1, right: -70 }} />
      <img src={image3} className="background-image" alt="" style={{ width: '30%', marginTop: '-255px', position: 'absolute', zIndex: 1, right: -50 }} />
      <div className="content-container">
        <h1>Goals Page</h1>
        {/* Your tracking page content goes here */}
        <Link to="/">Back</Link>
      </div>
    </div>
  );
}

export default TrackingPage;
