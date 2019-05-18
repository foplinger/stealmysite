import React from 'react';
import { Provider, connect } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { createStore } from 'redux';
import './App.css';
import SiteHeader from './Components/SiteHeader';
import Profile from './Components/Profile';
import ParticleBackground from './Components/ParticleBackground';
import Particles from 'react-particles-js';
import rootReducer from './Reducer/rootReducer';
import GetConfigComponent from './Components/GetConfig';
import TabPane from './Components/TabPane';

const store = createStore(rootReducer, devToolsEnhancer({}));

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
                <TabPane />
            </div>
        </Provider>
        
    </div>
    );  
  }
  
}

export default App;
