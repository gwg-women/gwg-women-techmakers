import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  onGoogleMapLoad = map => {
    this.map = map;
  }  
  onMapReady = (mapProps, map) => {
    this.setState({map});
    console.log('center : ' + map.center)
    //this.searchNearby(map, map.center)
    this.searchText(map,map.center,this.props.searchTerm)
  }
  searchText = (map, center, query) => {
    const {google} = this.props
    const service = new google.maps.places.PlacesService(map)
    const request ={
      location: center,
       radius: '500',
       query: query
    }

    service.textSearch(request,(results, status)=>{
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
        this.setState({
          places: results,
          center: center,
        })
        this.props.onLoad(results);
      }
    })

  }
  render() {
    const {pos} = this.props;

    if(!this.props.loaded){
      return <div>loading...</div>
    }
    return (
      <div className = "theMap">
      <Map
        ref={this.onGoogleMapLoad}
        google={this.props.google}
        zoom={15}
      initialCenter={pos}
        center={pos}
        onReady={this.onMapReady}
      >


      <Marker
        name={'Current Location'}        
        position={pos} />
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GKEY),
  libraries: ['places'],
  version: 3.31
})(MapContainer)