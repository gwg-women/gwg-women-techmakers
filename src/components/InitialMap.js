/* global google */
import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import SearchBox from "react-google-maps/lib/components/places/SearchBox"
import _ from "lodash";
import { compose, withProps, lifecycle,  } from 'recompose'

import {getCity} from '../services/geolocation.js';
import {getWeather} from '../services/weather.js';



const InitialMap = compose(
    withProps({
      googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GKEY}&v=3.exp&libraries=places,geometry,drawing`,
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    lifecycle({
      componentWillMount() {
        const refs = {}

        const getMyLocation = () => {
          const currentLocation = (position) =>{
        
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }

            this.setState({
              currentPosition: pos
            })
            
            getCity(pos.lat, pos.lng).then((city) => {
              this.setState({currentCity: city})
            }).catch(function(err) {
              console.log('Error retrieving the current city: ', err);
            });
        
            getWeather(pos.lat, pos.lng).then((weather) => {
              this.setState({currentWeather: weather})
            }).catch(function(err){
              console.log('Error retrieving the current weather: ', err);
            })  
          }
        
          // Ask user for permission to use location services
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(currentLocation);
          } else {    
            alert('Sorry your browser doesn\'t support the Geolocation API');    
          }
        
        }
        
        getMyLocation();
  
        this.setState({
          bounds: null,
          center: {
            lat: 41.9, lng: -87.624
          },
          markers: [],
          onMapMounted: ref => {
            refs.map = ref;
          },
          onBoundsChanged: () => {
            this.setState({
              bounds: refs.map.getBounds(),
              center: refs.map.getCenter(),
            })
          },
          onSearchBoxMounted: ref => {
            refs.searchBox = ref;
          },
          onPlacesChanged: () => {
            const places = refs.searchBox.getPlaces();
            const bounds = new google.maps.LatLngBounds();
  
            places.forEach(place => {
              if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport)
              } else {
                bounds.extend(place.geometry.location)
              }
            });
            const nextMarkers = places.map(place => ({
              position: place.geometry.location,
            }));
            const nextCenter = _.get(nextMarkers, '0.position', this.state.center);
  
            this.setState({
              center: nextCenter,
              markers: nextMarkers,
            });
            // refs.map.fitBounds(bounds);
          },
        })
      },
    }),
    withScriptjs,
    withGoogleMap
  )(props => <div>
    <h3>Here is your location: {props.currentCity}</h3>
    <h3>Here is the weather: {props.currentWeather} °F</h3>
<GoogleMap
      ref={props.onMapMounted}
      defaultZoom={15}
      center={props.currentPosition ? props.currentPosition : props.center}
      onBoundsChanged={props.onBoundsChanged}
    >
      <SearchBox
        ref={props.onSearchBoxMounted}
        bounds={props.bounds}
        controlPosition={google.maps.ControlPosition.TOP_LEFT}
        onPlacesChanged={props.onPlacesChanged}
      >
        <input
          type="text"
          placeholder="Customized your placeholder"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            marginTop: `27px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
          }}
        />
      </SearchBox>
      {props.markers.map((marker, index) =>
        <Marker key={index} position={marker.position} />
      )}
    </GoogleMap>
    </div>
    
  );



export default class MapContainer extends Component {
    render() {
        return (
            <InitialMap />
        )
    }

}