import React, { Component } from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar';
import TankInformation from './components/TankInformation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <TankInformation 
          time="20 minutes"
          percentage="100"
        />
      </div>
    );
  }
}

export default App;
