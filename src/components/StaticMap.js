import React from 'react';

const StaticMap = (props) => (
  <img 
  	src={`https://maps.googleapis.com/maps/api/staticmap?center=${props.pos.lat},${props.pos.lng}&zoom=14&size=600x600&key=${process.env.REACT_APP_GKEY}`} 
  	alt="Placeholder static map while network is down" 
  />
)

export default StaticMap