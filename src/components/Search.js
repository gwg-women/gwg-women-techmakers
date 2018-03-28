import React, {Component} from 'react';


class Search extends Component {

    render() {
        return (
            <div className="search" role="search">
                <input
                    type = "search"
                    placeholder = "I'm looking for..."
                    className = "search-box"
                    onChange = {this.props.input}
                    aria-label = "I'm looking for..."
                />
                <button onClick = {this.props.submit}>Submit</button>
            </div>
        )
    }
}

export default Search