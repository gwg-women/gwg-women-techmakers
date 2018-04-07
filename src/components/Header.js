import React, { Component } from 'react';
import db from '../db'
import {getCity} from '../services/geolocation.js';
import {getWeather} from '../services/weather.js';
import {GoogleApiWrapper} from 'google-maps-react';

class HeaderContainer extends Component {
  state = {
    currentWeather: 0
  };

  componentDidMount() {
    this.getMyLocation();
    
    const that = this
    if (!navigator.online){
      db.weather.get(1, function(obj){
        console.log(obj.temp)
        return obj.temp
        }).then(function(temp) {
          console.log(temp)
          that.setState({currentWeather: temp})
      })
    }
  }

  componentWillUpdate(prevProps, prevState) {
    if (prevState.currentCity !== this.state.currentCity) {
      this.props.setCurrentCity(this.state.currentCity);
    }
  }

  getCityWeather(latitude, longitude) {
    const {setCurrentCity} = this.props;

    getCity(latitude, longitude).then((city) => {
      this.setState({currentCity: city});
      setCurrentCity(city);

    }).catch(function(err) {
      console.log('Error retrieving the current city: ', err);
    });

    getWeather(latitude, longitude).then((weather) => {
      db.table('weather').add({temp: weather}).then(() => {
        this.setState({currentWeather: weather})
      })
    }).catch(function(err){
      console.log('Error retrieving the current weather: ', err);
    })
  }

  getMyLocation = () => {
    const {
      handleLocationChange,
      setUserPosition
    } = this.props;
    const pos = {
        lat: parseFloat(localStorage.getItem('lat')),
        lng: parseFloat(localStorage.getItem('lng'))
      }

    handleLocationChange(pos);
    setUserPosition(pos);
    // ***Get Location from Cache
    if (pos.lat && pos.lng) {
       this.getCityWeather(pos.lat, pos.lng);
    }


    const errorLocation = (err) => {
      console.log("error retrieving current position, " + err);
    }

    // ***Get Location from getCurrentPosition
    const currentLocation = (position) => {
      const {
        handleLocationChange,
        setUserPosition
      } = this.props

      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      setUserPosition(pos)
      handleLocationChange(pos)

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

  render () {
    
    const {currentCity, currentWeather, idbTemp} = this.state;
    const message = (this.state.currentCity && this.state.currentWeather)
    ? `Welcome to Mappa. You're in ${currentCity}. It is currently ${currentWeather}°F`
    : 
    `Welcome to Mappa. It is currently ${currentWeather}°F`;
  
    return(
      <h1>
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