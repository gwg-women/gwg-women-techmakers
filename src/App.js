import React, { Component } from 'react';
import './App.css';
import MapContainer from './components/InitialMap.js'



class App extends Component {
  render() {
    return (
      <div className="App">  
        <h1> Mappa</h1>
        <MapContainer />
      </div>
    );
  }
}

export default App;
