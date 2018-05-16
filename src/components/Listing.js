import React from 'react';
import PlacesListItem from './PlacesListItem.js';

const Listing = (props) => (
  <ul>
    {props.data.places && props.data.places.map(p => (
      	<PlacesListItem 
          key={p.id} 
          place={p} 
          onMouseOver={() => props.data.onMouseOver(p.id)} 
          onMouseLeave={() => props.data.onMouseOver("")}
         />
      ))
  	}
  </ul>
)

export default Listing;