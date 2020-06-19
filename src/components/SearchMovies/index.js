import React, { useState, useContext } from 'react';
import './SearchMovies.scss';
import AppContext from '@/context';

const SearchMovies = () => {
  const [movieToSearch, setMovieToSearch] = useState('');
  const { setMovies } = useContext(AppContext);

  const searchMovie = async e => {
    e.preventDefault();
    let query = movieToSearch.replace(/ /g, '%20');
    let response = await fetch(
      // eslint-disable-next-line max-len
      `https://api.themoviedb.org/3/search/movie?api_key=e53ed30d9e273053803f465b52b55158&language=en-US&query=${query}&page=1&include_adult=false`
    );
    let responseJSON = await response.json();
    setMovies(responseJSON.results);
  };

  return (
    <form class="search-form" onSubmit={e => searchMovie(e)}>
      <input
        className="search-form_input"
        type="text"
        placeholder="search a movie"
        value={movieToSearch}
        onChange={e => setMovieToSearch(e.target.value)}
      />
      <button type="submit" disabled={!movieToSearch}>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchMovies;
