import React from 'react';
import { Link } from 'react-router-dom';

import Movie from './Movie';

import './../styles/ListMovies.css';

const ListMovies = props => {
  const { movies } = props;
  return (
    <div className="movies">
      {movies.map((movie, index) => {
        return (
          <Link
            style={{ textDecoration: 'none' }}
            key={movie.id}
            to={`/movie/${movie.id}`}
          >
            <Movie movie={movie} position={index} {...props} />
          </Link>
        );
      })}
    </div>
  );
};

export default ListMovies;
