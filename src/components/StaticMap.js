import React, { Component } from 'react';


class StaticMap extends Component { 
    
    render() {
        return (
            <div>
                <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.pos.lat},${this.props.pos.lng}&zoom=14&size=600x600&key=${process.env.REACT_APP_GKEY}`} alt="Placeholder static map while network is down" />
            </div>
        )
    }
}

export default StaticMap