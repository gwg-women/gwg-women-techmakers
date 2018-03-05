import React, { Component } from 'react';
import {getCity} from '../services/geolocation.js';
import {getWeather} from '../services/weather.js';

export default class CurrentLocation extends Component {
  state = {
  }

  getMyLocation = () => {
    const {positionCallback} = this.props;
    const currentLocation = (position) =>{
  
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }

      positionCallback(pos);
      this.setState({
        currentPosition: pos
      })
      
      getCity(pos.lat, pos.lng).then((city) => {
        this.setState({currentCity: city})
      }).catch(function(err) {
        console.log('Error retrieving the current city: ', err);
      });
  
      getWeather(pos.lat, pos.lng).then((weather) => {
        this.setState({currentWeather: weather})
      }).catch(function(err){
        console.log('Error retrieving the current weather: ', err);
      })  
    }
  
    // Ask user for permission to use location services
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(currentLocation);
    } else {    
      alert('Sorry your browser doesn\'t support the Geolocation API');    
    }
  
  }

  componentWillMount() {
    this.getMyLocation();
  }

  render () {
    return <div>
      <h4>Here is your location: {this.state.currentCity} </h4>
      <h4>The current temperature (°F) is: {this.state.currentWeather}</h4>
    </div>
  }
}