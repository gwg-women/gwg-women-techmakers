import React, { Component } from 'react';
import { GoogleApiWrapper, } from 'google-maps-react';
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
         <div className="sidebar"><Listing places={this.props.places} /></div>
    )
  }

}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GKEY),
  libraries: ['places']
})(Container)
