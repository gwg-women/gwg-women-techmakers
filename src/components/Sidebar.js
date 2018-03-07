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
          <Map google={this.props.google}
          className={'map'}
          onReady={this.onMapReady}
          visible={false}>
            <div style={{width:`100%`, height:`600px`, border: `1px black solid`, padding: `3%`}}>
                <h2>Here are some places near you:</h2>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
            </Map>
        )
    }
}

export default Sidebar;