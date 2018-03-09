import React, { Component } from 'react';
import { Map, GoogleApiWrapper, } from 'google-maps-react';
import PlacesListItem from './PlacesListItem.js'

const Listing = ({places}) => {
  return (
    <ul>
      {places && places.map(p => {
        return (
          <PlacesListItem key={p.id} place={p} />
        )
      })}
    </ul>
  )
}

class Container extends Component {

  constructor(props){
    super(props);
    this.state = {
      places: [],
    }
  }

  onMapReady = (mapProps, map) => {
    console.log('center : ' + map.center)
    //this.searchNearby(map, map.center)
    this.searchText(map,map.center,this.props.searchTerm)
  }

 /* searchNearby = (map, center) =>{
    const {google} = this.props;
    const service = new google.maps.places.PlacesService(map);
    // Specify location, radius and place types for your Places API search.
    const request = {
       location: center,
       radius: '500',
       type: ['food']
     }

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.setState({
          places: results,
          center: center,
        })
      }
    })
  }
  */

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
        this.setState({
          places: results,
          center: center,
        })
      }
    })

  }

  render(){
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
      <Map google={this.props.google}
          className={'map'}
          onReady={this.onMapReady}
          visible={false}>

          <Listing places={this.state.places} />

      </Map>
    )
  }

}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GKEY),
  libraries: ['places']
})(Container)
