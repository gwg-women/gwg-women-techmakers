import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GoogleApiWrapper } from 'google-maps-react';
const RADIUS_BOUND = 1000;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestFailed: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { google } = this.props;
    const node = ReactDOM.findDOMNode(this.googleInput);

    var circle = new google.maps.Circle({
      center: this.props.pos,
      radius: RADIUS_BOUND
    });
    var autocomplete = new google.maps.places.Autocomplete(node);
    autocomplete.setBounds(circle.getBounds());
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        return;
      }

      this.props.input({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      });
    });
  }

  handleSubmit() {
    this.props.submit(this.googleInput.value);
  }

  render() {
    return (
      <div className="search" role="search">
        <input
          type="search"
          ref={(googleInput) => { this.googleInput = googleInput }}
          placeholder="I'm looking for..."
          className="search-box"
          onChange={this.handleChange}
          aria-label="I'm looking for..."
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GKEY),
  libraries: ['places']
})(Search)