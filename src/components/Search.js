import React from 'react';

const Search = (props) => (
  <div className="search" role="search">
    <input
      type = "search"
      placeholder = "I'm looking for..."
      className = "search-box"
      onChange = {props.input}
      aria-label = "I'm looking for..."
    />
    <button onClick = {props.submit}>Submit</button>
  </div>
)

export default Search;