import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {

  render() {
    return (
      <div className="theMap">
      <Map
        google={this.props.google}
        zoom={8}
        initialCenter={{
          lat: 40.854885,
          lng: -88.081807
        }}
      >
        <Marker
          name={'Dolores park'}
          position={{lat: 40.854885, lng: -88.081807}} />
        <Marker />

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

