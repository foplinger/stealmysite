import React, { Component } from 'react';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  },
  color: {
      value: "#ff703d"
  }
}

const ParticleBackground = () => (
    <Particles
        className='particles'
        params={{
        "particles": {
            "number": {
                "value": 100
            },
            "opacity": {
                "value": .8,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
            },
            "size": {
                "value": 2
            },
            "color": {
                "value": "#ff622b"
            },
            "line_linked":{
                "enable":true,
                "distance":150,
                "color":"#ff622b",
                "opacity":0.4,
                "width":1
            },
            "move": {
              "enable": true,
              "speed": 5,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
            }
        }
    }}/>);

export default ParticleBackground;