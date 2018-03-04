import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';



 export class MapContainer extends Component {

  searchNear(map, center){
    const {google} = this.props;
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: center,
      radius: 500,
      type:['food']
    }

    service.nearbySearch(request, (results, status, pagination) => {
      if (status == google.maps.places.PlacesServiceStatus.OK) {

        this.pagination = pagination;
        this.setState({
          places: results,
          hasNextPage: pagination.hasNextPage,
          center: center,
        })
      }
    })

}
   
  render() {
    const containerStyle = {position: 'relative', width: '100%', height:'600px'}
    return (
      <Map 
        google={this.props.google} 
        zoom={8} 
        containerStyle={containerStyle}
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
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GKEY),
  libraries: ['places']
})(MapContainer)

