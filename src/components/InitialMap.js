import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  onGoogleMapLoad = map => {
    this.map = map;
  }

  render() {
    const containerStyle = {position: 'relative', width: '100%', height:'600px'}

    const {pos} = this.props;

    if(!this.props.loaded){
      return <div>loading...</div>
    }
    return (
      <Map
        ref={this.onGoogleMapLoad}
        google={this.props.google}
        zoom={15}
        containerStyle={containerStyle}
        center={pos}
      >

      <Marker
        name={'Current Location'}
        position={pos} />
      <Marker />

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GKEY),
  libraries: ['places']
})(MapContainer)