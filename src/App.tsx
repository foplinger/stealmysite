import React from 'react';
import './App.css';
import SiteHeader from './Components/SiteHeader';
import Profile from './Components/Profile';
import ParticleBackground from './Components/ParticleBackground';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="particleContainer">
      <ParticleBackground />
      <div className="App">
        <SiteHeader />
        <Profile />
    </div>
</div>
  );
}

export default App;
