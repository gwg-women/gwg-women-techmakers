import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Listing from "./Listing";

const Container = (props) => {
  const {pos} = props;
    
  if (!pos) {
    return <div>Loading...</div>
  }

  return (
    <Listing data={props}/>
  )
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GKEY),
  libraries: ['places']
})(Container)
