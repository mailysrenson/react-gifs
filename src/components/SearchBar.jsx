import React from 'react';

class SearchBar extends React.Component {
  handleChange = (e) => {
    this.props.search(e.target.value)
  }

  render() {
    return(
      <input type="text" className="form-search form-control" onChange={this.handleChange}/>
    )
  }
}

export default SearchBar;