import React, { Component } from 'react';
import { GoogleApiWrapper, } from 'google-maps-react';
import PlacesListItem from './PlacesListItem.js'

const Listing = ({props}) => {
    return (
    <ul>
      {props.places && props.places.map(p => {
        return (
          <PlacesListItem key={p.id} place={p} onMouseOver={() => props.onMouseOver(p.id)} onMouseLeave={() => props.onMouseOver("")}/>
        )
      })}
    </ul>
  )
}

class Container extends Component {

  constructor(props){
    super(props);
    this.state = {
      places: this.props.places
    }
  }

  render(){
    if (!this.props.pos) {
      return <div>Loading...</div>
    }

    return (
         <Listing props={this.props}/>
    )
  }

}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GKEY),
  libraries: ['places']
})(Container)
