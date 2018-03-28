import React, { Component } from 'react';


class StaticMap extends Component {
    
    render() {
        return (
            <div>
                <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.pos.lat},${this.props.pos.lng}&zoom=14&size=400x400&key=${process.env.REACT_APP_STATICMAP}`} />
            </div>
        )
    }
}

export default StaticMap