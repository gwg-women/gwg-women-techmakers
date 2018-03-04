import React from 'react';
import PlacesListItem from './PlacesListItem.js'


const Sidebar = (props) => {
   const placeItems = props.places.map((place) => {
       return <PlacesListItem place={place} />
   });

    return (
        <div style={{width:`100%`, height:`600px`, border: `1px black solid`, padding: `3%`}}>
            <h2>Here are some places near you:</h2>
            <ul>
                {placeItems}
            </ul>
        </div>
    )
}

export default Sidebar;