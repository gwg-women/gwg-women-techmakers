import React, { Component } from 'react';
import MapContainer from './components/InitialMap';
import HeaderContainer from './components/Header'
//import Sidebar from './components/Sidebar';
import Search from './components/Search'
// import getPlaces from './services/googlePlaces';
import Container from './components/Places'
import Wiki from './components/Description'
import Footer from './components/Footer'
import 'milligram';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      places: [],
      searchTerm: 'food',
      pos: {},
      query: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({query: event.target.value})
  }

  handleLocationChange = (pos) => {
    this.setState({
      pos
    })
  }

  handleSubmit() {
    console.log('submitted word: ', this.state.query)
    this.setState({searchTerm: this.state.query })
  }


  handleLoad = (places) => {
    this.setState({
      places
    })
  }

  updateCurrentCity = (currentCity) => {
    this.setState({ currentCity });
  }

  setCurrentCity = (city) => {
    city = city !== undefined ? city[0] : city;
    this.setState({ city });
  }


 /* componentDidMount(){
    console.log("getPlaces")
     getPlaces(this.state.mapCenter.lat,this.state.mapCenter.lng,this.state.searchTerm).then((places) => {
        this.setState({ places })
    })
  }
*/

/* The original css style names "App container", "row", "column column-75", "column column-25" */
  render() {
    //  <Sidebar places={this.state.places}/>
    //
    return (

      <div className="fullContainer">
        <HeaderContainer handleLocationChange={this.handleLocationChange} updateCurrentCity = {this.updateCurrentCity} setCurrentCity = {this.setCurrentCity}/>

        <main className="mapContainer">
          <div className="searchContainer">
            <Search submit={this.handleSubmit} input={this.handleChange} />
          </div>

          <div className="map">
            <MapContainer pos={this.state.pos} searchTerm={this.state.searchTerm} {...this.state} onLoad={this.handleLoad} />
          </div>

          <div className="mapDescription">
            {this.state.city}  Coordinates: {this.state.pos.lat}, {this.state.pos.lng}

            {this.state.city && <Wiki currentCity={this.state.city}/>}

          </div>

         <div className="mapPlaces">
              <Container {...this.state} />
          </div>
        </main>

        <footer className="footer"><Footer /></footer>

      </div>
    );
  }
}

export default App;
