import React, { Component } from 'react';
import {getCity} from '../services/geolocation.js';
import {getWeather} from '../services/weather.js';
import {GoogleApiWrapper} from 'google-maps-react';


class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCity: ''
  };


  }
  


  getCityWeather(latitude, longitude) {

    getCity(latitude, longitude).then((city) => {
      this.setState({currentCity: city})

    }).catch(function(err) {
      console.log('Error retrieving the current city: ', err);
    });

    getWeather(latitude, longitude).then((weather) => {
      this.setState({currentWeather: weather})
    }).catch(function(err){
      console.log('Error retrieving the current weather: ', err);
    })
  }


  getMyLocation = () => {
    const {handleLocationChange} = this.props;
    const pos = {
        lat: parseFloat(localStorage.getItem('lat')),
        lng: parseFloat(localStorage.getItem('lng'))
      }

    handleLocationChange(pos);

    // ***Get Location from Cache
    if (pos.lat && pos.lng) {
     // console.log('get location from cache');
       this.getCityWeather(pos.lat, pos.lng);
    }


    const errorLocation = (err) => {
      console.log("error retrieving current position, " + err);
    }

    // ***Get Location from getCurrentPosition
    const currentLocation = (position) => {
     // console.log('get location from getcurrent position');
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      handleLocationChange(pos);

      localStorage.setItem('lat', pos.lat);
      localStorage.setItem('lng', pos.lng);
      this.getCityWeather(pos.lat, pos.lng);
    }

    // Ask user for permission to use location services
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(currentLocation, errorLocation);
    } else {
      alert('Sorry your browser doesn\'t support the Geolocation API');
    }
  }


  componentDidMount() {
    this.getMyLocation();
    this.liftState();
  }

  //  The main issue is that it doesn't read this.state.currentCity. 
  // if you give let city = 'any value you want' wiki will read it no problem.
  // we just now need to figure out how to give this.state.currentCity the same
  // as this site. It must be a scope issue.
  liftState = () => {
    let city = this.state.currentCity;
    this.props.callMethod(city);
  }

  render () {
    const message = (this.state.currentCity && this.state.currentWeather) ?
    `Welcome to Mappa. You're in ${this.state.currentCity}. It is currently ${this.state.currentWeather}°F` :
    `Welcome to Mappa.`;
    return(
      <h1 className="header">
        {message}
      </h1>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GKEY),
  libraries: ['places'],
  version: '3'
})(HeaderContainer) 