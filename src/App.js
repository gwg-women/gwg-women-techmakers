import React, { Component } from 'react';
import MapContainer from './components/InitialMap';
import HeaderContainer from './components/Header'
import Sidebar from './components/Sidebar';
import Search from './components/Search'
import 'milligram';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      places: ["place1", "place2"],
      searchTerm: '' 
    }; 

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit() {
    console.log("submitted word")
    console.log(this.state.searchTerm)
  }

  
  
  render() {
    return (
      <div>
        <HeaderContainer />
        <div className="App container">
          <div className="row">
            <Search submit={this.handleSubmit} input={this.handleChange} />
          </div>  
          <div className="row">
            <div className="column column-75">
                <MapContainer searchTerm={this.state.searchTerm} />
            </div>
            <div className="column column-25">
              <Sidebar places={this.state.places}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
