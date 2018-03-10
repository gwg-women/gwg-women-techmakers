import React, { Component } from 'react';
import MapContainer from './components/InitialMap';
import HeaderContainer from './components/Header'
//import Sidebar from './components/Sidebar';
import Search from './components/Search'
// import getPlaces from './services/googlePlaces';
import Container from './components/Places'
import 'milligram';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      places: ["place1", "place2"],
      searchTerm: 'food',
      mapCenter: {lat: 40.854885,
                  lng: -88.081807}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({searchTerm: event.target.value})
  }

  handleLocationChange = (pos) => {
    this.setState({
      pos
    })
  }

  handleSubmit() {
    console.log("submitted word")
    console.log(this.state.searchTerm)
  }

 /* componentDidMount(){
    console.log("getPlaces")
     getPlaces(this.state.mapCenter.lat,this.state.mapCenter.lng,this.state.searchTerm).then((places) => {
        this.setState({ places })
    })
  }
*/

  render() {
    //  <Sidebar places={this.state.places}/>
    return (
      <div>
        <HeaderContainer handleLocationChange={this.handleLocationChange}/>
        <div className="App container">
          <div className="row">
            <Search submit={this.handleSubmit} input={this.handleChange} />
          </div>  
          <div className="row">
            <div className="column column-75">
                <MapContainer pos={this.state.pos} searchTerm={this.state.searchTerm} />
            </div>
            <div className="column column-25">
              <Container {...this.state} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
