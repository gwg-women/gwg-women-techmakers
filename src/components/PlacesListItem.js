import React from 'react';

const PlacesListItem = (props) => {

    return <li >
                <div className="listings">
                    <div className="listings-icon"><img src={props.place.icon} alt= ""/></div>
                    <div className="listing-description">
                        <div className="listing-name">{ props.place.name }</div>
                        <div className="listings-info">
                        {props.place.formatted_address.split(',')[0]}
                         <div>{props.place.opening_hours === undefined ? '' : (props.place.opening_hours.open_now ? 'OPEN NOW':'CLOSED')}</div>
                        </div>
                    </div>
                 </div>

            </li>
};

export default PlacesListItem;