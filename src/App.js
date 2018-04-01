import React, { Component } from 'react'
import MapContainer from './components/InitialMap'
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
      query: '',
      mouseOverPlace: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
    this.setCurrentCity = this.setCurrentCity.bind(this);
    this.onPlaceSelected = this.onPlaceSelected.bind(this);
  }

 /* componentDidMount(){
    console.log("getPlaces")
     getPlaces(this.state.mapCenter.lat,this.state.mapCenter.lng,this.state.searchTerm).then((places) => {
        this.setState({ places })
    })
  }
*/

  handleSubmit() {
    //console.log('submitted word: ', this.state.query)
    this.setState({searchTerm: this.state.query })
  }

  handleChange(event) {
    this.setState({query: event.target.value})
  }

  handleLocationChange(pos){
    this.setState({
      pos
    })
  }

  handleLoad(places){
    this.setState({places})
  }

  // call method to read currentCity from header
  setCurrentCity(city){
    city = city !== undefined ? `${city[0]},  ${city[1]}` : city;
    this.setState({city});
  }

  onPlaceSelected(id) {
    if (this.state.mouseOverPlace !== id) {
        this.setState({mouseOverPlace: id});
    }
  }

  render() {
    const {
      pos, 
      searchTerm, 
      mouseOverPlace,
      city
    } = this.state;
    //  <Sidebar places={this.state.places}/>
    return (
      <div className="fullContainer">
        <HeaderContainer 
          handleLocationChange={this.handleLocationChange} 
          setCurrentCity = {this.setCurrentCity} 
        />
        <main className="mapContainer">
          <div className="searchContainer">
            <Search submit={this.handleSubmit} input={this.handleChange} />
          </div>

          <div className="map">
            <MapContainer 
              pos={pos} 
              searchTerm={searchTerm} {...this.state}
              onLoad={this.handleLoad} 
              mouseOverPlace={mouseOverPlace}
            />
          </div>
        
          <div className="mapDescription">
            <p>{city}  Coordinates: {pos.lat}, {pos.lng}</p>
            {city && 
                <Wiki currentCity={city} />
            }
          </div>

          <div className="mapPlaces">
            <Container {...this.state} onMouseOver={id => this.onPlaceSelected(id)} />
          </div>
        </main>

        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
