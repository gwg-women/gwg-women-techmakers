import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import PlacesListItem from './PlacesListItem.js'

const Sidebar = (props) => {
  renderList(){
    let list = [];
    props.places.map((place) => {
      return <PlacesListItem place={place} />
    })
  }
   
  return (
    <div>
      <h2>Here are some places near you:</h2>
      <ul>
        {this.renderList}
      </ul>
    </div>
  )
}

export default Sidebar;