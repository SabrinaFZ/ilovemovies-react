import React from 'react';

import './../styles/SearchMovies.css';
import AppContext from '../context/AppContext';

class SearchMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieToSearch: ''
    };
    this.setMovieToSearch = this.setMovieToSearch.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
  }

  setMovieToSearch(e) {
    this.setState({
      movieToSearch: e.target.value
    });
  }

  async searchMovie(e, setMovies) {
    e.preventDefault();
    let query = this.state.movieToSearch.replace(/ /g, '%20');
    let response = await fetch(
      // eslint-disable-next-line max-len
      `https://api.themoviedb.org/3/search/movie?api_key=e53ed30d9e273053803f465b52b55158&language=en-US&query=${query}&page=1&include_adult=false`
    );
    let responseJSON = await response.json();

    setMovies(responseJSON.results);
  }

  render() {
    const { movieToSearch } = this.state;
    return (
      <AppContext.Consumer>
        {({ setMovies }) => (
          <form id="search-form" onSubmit={e => this.searchMovie(e, setMovies)}>
            <input
              className="search-form_input"
              type="text"
              placeholder="search a movie"
              value={movieToSearch}
              onChange={this.setMovieToSearch}
            />
            <button type="submit" disabled={!movieToSearch}>
              <i className="fas fa-search"></i>
            </button>
          </form>
        )}
      </AppContext.Consumer>
    );
  }
}

export default SearchMovies;
