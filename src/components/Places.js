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
     // pos:{}
    }
  }

  render(){
    if (!this.props.pos) {
      return <div>Loading...</div>
    }

    return (
         <Listing places={this.props.places} />
    )
  }

}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GKEY),
  libraries: ['places']
})(Container)
