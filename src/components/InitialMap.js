import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  onGoogleMapLoad = map => {
    this.map = map;
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