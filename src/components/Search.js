import React, {Component} from 'react';


class Search extends Component {

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="I'm looking for...."
                    style={{
                        boxSizing: `border-box`,
                        border: `1px solid transparent`,
                        width: `100%`,
                        height: `60px`,
                        marginTop: `27px`,
                        padding: `0 12px`,
                        borderRadius: `3px`,
                        boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                        fontSize: `20px`,
                        outline: `none`,
                        textOverflow: `ellipses`,
                        }}
                    onChange = {this.props.input}
                />
                <button onClick = {this.props.submit}>Submit</button>
            </div>
        )
    }
}

export default Search