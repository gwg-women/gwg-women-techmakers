import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  constructor(props){
      super(props);
      this.state = {
          searchTerm: this.props.searchTerm,
          places: this.props.places
      }
    }

  onGoogleMapLoad = map => {
    this.map = map;
  }

  onMapReady = (mapProps, map) => {
    this.setState({map});
   // console.log('center : ' + map.center)
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
        //console.log(results);
        this.setState({
          places: results,
          //center: center,
        })
        this.props.onLoad(results);
      }
    })

  }
  render() {
    const {pos} = this.props
    const {places} = this.props
    //console.log("places : " + JSON.stringify(places))
    if(!this.props.loaded){
      return <div>loading...</div>
    }
    return (
      <div className = "theMap">
      <Map
        ref={this.onGoogleMapLoad}
        google={this.props.google}
        zoom={14}
        initialCenter={pos}
        center={pos}
        onReady={this.onMapReady}
      >

      <Marker
        name={'Current Location'}
        position={pos} />
      <Marker />
      {
        places && places.map(p => {
         var m=p.geometry.location
         // console.log("m: " + m);
        return (
          <Marker key={p.id} name={p.name}  position={m}/>
        )
      })}
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

