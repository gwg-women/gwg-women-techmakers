import React, {Component} from 'react';


class Search extends Component {

    render() {
        return (
            <div className="search">
                <input
                    type="text"
                    placeholder="I'm looking for...."
                    className="search-box"
                    onChange = {this.props.input}
                />
                <button onClick = {this.props.submit}>Submit</button>
            </div>
        )
    }
}

export default Search