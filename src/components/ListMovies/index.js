import React from 'react';
import { Link } from 'react-router-dom';

import Movie from '@/components/Movie';
import './ListMovies.scss';

const ListMovies = props => {
  return (
    <div className="list-movies">
      {props.movies.map((movie, index) => {
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
