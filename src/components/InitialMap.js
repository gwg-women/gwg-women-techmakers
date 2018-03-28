import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import StaticMap from './StaticMap'


class MapContainer extends Component {
  constructor(props){
      super(props);
      this.state = {
          searchTerm: this.props.searchTerm,
          places: this.props.places,
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {}
      }

    // binding this to event-handler functions
     this.onMarkerClick = this.onMarkerClick.bind(this)
    this.onMarkerOver = this.onMarkerOver.bind(this)
    this.onMarkerOut = this.onMarkerOut.bind(this)
    this.onMapClicked = this.onMapClicked.bind(this);
   // this.onMapReady=this.onMapReady.bind(this)

    }

    // change marker image to green on mouse over
    onMarkerOver= (props, marker, e) => {
        const {google} = this.props
          marker.setIcon ({
                  url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
                  anchor:  google.maps.Point(10, 10),
                  scaledSize: google.maps.Size(10, 17)
                })
    }

    // change the marker image to red when mouse out
    onMarkerOut= (props, marker, e) => {
       const {google} = this.props
       marker.setIcon ({
                  url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                  anchor:  google.maps.Point(10, 10),
                  scaledSize: google.maps.Size(10, 17)
                })
    }

    // show Infowindow when a marker is clicked and make it the active marker
    onMarkerClick= (props, marker, e) => {
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    }


   onMapClicked= (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
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
    //const detailsService = new google.maps.places.PlaceService(map)
    const request ={
      location: center,
       radius: '500',
       query: query
    }

    service.textSearch(request,(results, status)=>{
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        //console.log(results);
       /* get PlaceDetails for each place, getting bad request and overlimit errors
        results.map(place => {
          let placeRequest = {
            placeId: place.id
          }

          service.getDetails(placeRequest, (placeDetailsResult,status)=>{
             if (status === google.maps.places.PlacesServiceStatus.OK) {
               place.details = placeDetailsResult
               console.log(JSON.stringify(placeDetailsResult))
             }
             console.log(status)
          })
        })
       */
        this.setState({
          places: results,
          //center: center,
        })

        //console.log("results= " + JSON.stringify(results))
        this.props.onLoad(results);
      }
    })

  }


  render() {
    //const google_api = process.env.REACT_APP_GKEY;
    const {pos} = this.props
    const {places} = this.props
    const {google} = this.props
    // const markerImageUrl = "../src/img/circleMarker.png"
    //console.log("places : " + JSON.stringify(places))
    if(!this.props.loaded){
        return  <StaticMap pos={pos} />
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
        onClick={this.onMapClicked}
      >
      <Marker
        name={'Current Location'}
        title={'You are here'}
        position={pos}
        key={'001'}
        address = {''}
        openNow = {''}
        rating = {5}
        priceLevel = {''}
        reference = {""}
        icon = {{
                  url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
                  anchor:  google.maps.Point(10, 10),
                  scaledSize: google.maps.Size(10, 17)
                }}
         >
       </Marker>

        {
          places && places.map(p => {
          //console.log("p.Rating: " + p.rating);
          let isOpenNow = "";
          let priceLevel = "";
          let rating = "";

          const priceLevelDesc = { 0 : "Free",
                                    1 : "Inexpensive",
                                    2 : "Moderate",
                                    3 : "Expensive",
                                    4 : "Very Expensive"
                                  }

          if( p.opening_hour !== undefined ){
            isOpenNow = p.opening_hours.open_now ?'OPEN NOW':'CLOSED'
           }

          if( p.rating !== undefined ){
            rating = p.rating
          }

          if( p.price_level !== undefined ){
            priceLevel = priceLevelDesc[p.price_level]
          }


          return (
            <Marker
              key={p.id}
              name={p.name}
              address = {p.formatted_address.replace(/,.*/g, "")}
              openNow = {isOpenNow}
              rating = {rating}
              priceLevel = {priceLevel}
              reference = {""+p.place_id}
              position={p.geometry.location}
              //props.place.photos === undefined ?<img src={props.place.icon} alt= ""/> : <img src={props.place.photos[0].getUrl({'maxWidth': 135, 'maxHeight': 135})} alt="no image" />
              photo={p.photos === undefined ? `http://via.placeholder.com/100x100` : p.photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100})}
               icon = {{
                  url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                  anchor:  google.maps.Point(10, 10),
                  scaledSize: google.maps.Size(10, 17)
                }}
              onClick = {this.onMarkerClick}
              onMouseover={this.onMarkerOver}
              onMouseout = {this.onMarkerOut}/>
          )
          })}

          <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              >
                <div id="info" style={{ backgroundColor: `yellow`, opacity: 0.75,  }}>
                  <div >
                     <img src={this.state.selectedPlace.photo} alt="" />
                  </div>
                  <div >
                     <div style={{ fontSize: `16px`, fontWeight: `bold`, fontColor: `#08233B` }}>{this.state.selectedPlace.name}</div>
                     <div>Ratings : <span style={{ fontWeight: `bold`}}> {this.state.selectedPlace.rating?this.state.selectedPlace.rating:""} </span>  Price Level : <span style={{ fontWeight: `bold`}} > {this.state.selectedPlace.priceLevel}  </span> </div>
                     <div> {this.state.selectedPlace.address}</div>
                     <div>{this.state.selectedPlace.openNow} </div>

                  </div>
                </div>
          </InfoWindow>
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
