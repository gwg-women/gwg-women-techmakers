import React, { Component } from 'react'
import MapContainer from './components/InitialMap'
import HeaderContainer from './components/Header'
import Search from './components/Search'
import Container from './components/Places'
import Wiki from './components/Description'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      places: [],
      searchTerm: 'food',
      pos: {},
      query: '',
      mouseOverPlace: '',
      userPos: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
    this.setCurrentCity = this.setCurrentCity.bind(this);
    this.setUserPosition = this.setUserPosition.bind(this);
    this.onPlaceSelected = this.onPlaceSelected.bind(this);
  }

 /* componentDidMount(){
    console.log("getPlaces")
     getPlaces(this.state.mapCenter.lat,this.state.mapCenter.lng,this.state.searchTerm).then((places) => {
        this.setState({ places })
    })
  }
*/

  handleSubmit(searchTerm) {
    this.setState({searchTerm})
  }

  handleChange(pos) {
    this.setState({pos});
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
    city = city !== undefined? `${city}` : city;
    this.setState({city});
  }

  setUserPosition(userPos){
    if(userPos.lat){
      this.setState({userPos})
    }
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
    return (
      <div className="fullContainer">
        <header className="header">
          <HeaderContainer
            handleLocationChange={this.handleLocationChange}
            setCurrentCity = {this.setCurrentCity}
            setUserPosition = {this.setUserPosition}
          />
        </header>
        <main className="mapContainer">
          <div className="searchContainer">
            <Search submit={this.handleSubmit} input={this.handleChange} pos={pos} />
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
