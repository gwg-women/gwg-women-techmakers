import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import PlacesListItem from './PlacesListItem.js'


class Sidebar extends Component {


  renderList(){
    let list = [];
    this.props.places.map((place) => {
      return <PlacesListItem place={place} />
    })
  }
   
   render() {
        return (
          <div>
            <h2>Here are some places near you:</h2>
            <ul>
              {this.renderList()}
            </ul>
          </div>
        )
    }
}

export default Sidebar;