import React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends React.Component {
  state = {
    searchTerm: ''
  };

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <div className="search">
        <header>
          <h2>Search</h2>
          <input onChange={this.handleChange} value={searchTerm} type="text" placeholder="Search..." />
        </header>
        <div>
          {preload.shows
            .filter(
              show =>
                show.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
                show.description.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
