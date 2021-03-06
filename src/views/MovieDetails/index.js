import React, { useState, useEffect } from 'react';
import default_poster from '@/assets/movie_default.png';
import './MovieDetails.scss';
import api from '@/services';

const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState({});

  const getDetails = async () => {
    const movieDetails = await api.getMovieDetails(match.params.id);
    const cast = await api.getCredits(match.params.id);
    setMovie({
      ...movieDetails,
      ...cast
    });
  };

  useEffect(() => {
    getDetails();
  }, [match]);

  return (
    <main className="movie-detail">
      <div>
        <img
          className="movie-detail_poster"
          src={
            movie.poster_path
              ? `${process.env.REACT_APP_BASE_IMAGE_URL}/${movie.poster_path}`
              : default_poster
          }
          alt={`${movie.title} Poster`}
        />
      </div>

      <div className="movie-detail_info">
        <ul>
          <li className="movie-detail_title">
            <p>{movie.title}</p>
          </li>
          <li className="movie-detail_overview">
            <p>{movie.overview}</p>
          </li>
          <li className="movie-detail_cast">
            <h3>Cast:</h3>
            {movie.cast &&
              movie.cast.slice(0, 3).map((character, index) => {
                return (
                  <span key={character.id}>
                    {character.name}
                    {index !== 2 ? ',' : ''}{' '}
                  </span>
                );
              })}
          </li>
          <li className="movie-detail_director">
            <h3>Director: </h3> <p> {movie.crew && movie.crew[0].name}</p>
          </li>
          <li className="movie-detail_release_date">
            <h3>Release Date: </h3>
            <p>{movie.release_date}</p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default MovieDetails;
