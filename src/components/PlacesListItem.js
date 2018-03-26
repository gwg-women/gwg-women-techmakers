import React from 'react';

const PlacesListItem = (props) => {

    return <li >
    			<div className="listings">
    				<img className="listings-icon" src={props.place.icon} alt= ""/>  { props.place.name }
    				<div className="listings-info">
    				    {props.place.formatted_address.split(',')[0]}
                    <div>{props.place.opening_hours === undefined ? '' : (props.place.opening_hours.open_now ? 'OPEN NOW':'CLOSED')}</div>

    				</div>
    			 </div>

    		</li>
};

export default PlacesListItem;