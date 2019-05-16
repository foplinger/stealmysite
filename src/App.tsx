import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import SiteHeader from './Components/SiteHeader';
import Profile from './Components/Profile';
import ParticleBackground from './Components/ParticleBackground';
import Particles from 'react-particles-js';
import rootReducer from './Reducer/rootReducer';
import GetConfigComponent from './Components/GetConfig';

const store = createStore(rootReducer);

class App extends React.Component {
  
  render() {
    return (
      <div className="particleContainer">
        <Provider store={store}>
          <ParticleBackground /> 
            <GetConfigComponent />
            <div className="App">
                <SiteHeader />
                <Profile />
            </div>
        </Provider>
        
    </div>
    );  
  }
  
}

export default App;
