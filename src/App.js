import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ChatContainer from './components/ChatContainer';
import TrackingPage from './components/TrackingPage';
import GoalsPage from './components/GoalsPage';
import CalculatorPage from './components/CalculatorPage';
import image from './components/iphone.png';
import image1 from './components/battery.PNG';
import image2 from './components/banner.png';
import image3 from './components/man.png';
import image4 from './components/data.PNG';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <img src={image} className="centered-image" alt="" />
              <img src={image1} className="centered-image image1" alt="" style= {{width: '3.5%'}}/>
              <img src={image2} className="centered-image image2" alt="" />
              <img src={image3} className="centered-image image3" alt="" />
              <img src={image4} className="centered-image image4" alt="" />
              <Link to="/tracking" className="overlay-text tracking-text clickable">TRACKING</Link>
              <Link to="/goals" className="overlay-text sample-text1 clickable">GOALS</Link>
              <Link to="/calculator" className="overlay-text sample-text2 clickable">CALCULATOR</Link>
            </>
          } />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/goals" element={<GoalsPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
