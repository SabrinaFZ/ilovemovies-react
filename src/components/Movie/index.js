import React, { useState, useContext } from 'react';
import Ratings from '@/components/Ratings';
import Favorite from '@/components/Favorite';
import ShowCollections from '@/components/ShowCollections';
import '@/styles/Movie.css';
import default_poster from '@/assets/movie_default.png';
import AppContext from '@/context';

const Movie = props => {
  const [hideCollections, setHideCollections] = useState(false);
  const { collections, deleteFavorite } = useContext(AppContext);

  const showCollections = e => {
    if (e) {
      e.preventDefault();
    }

    if (!checkIsFavorite()) {
      setHideCollections(!hideCollections);
    }
  };

  const checkIsFavorite = () => {
    let found;
    if (collections && collections.length > 0)
      collections.some(collection => {
        let isFound = false;
        found = collection.movies.find(movie => {
          return movie.id === props.movie.id;
        });

        if (found) {
          isFound = true;
        }
        return isFound;
      });

    return found;
  };

  return (
    <section className="movie-section">
      {props.path === '/my-collections' && (
        <Ratings
          movie={props.movie}
          rating={props.movie.rating}
          selectedCollection={props.selectedCollection}
        />
      )}
      <div className="movie-section_info">
        <img
          className="movie-section_poster"
          src={
            props.movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`
              : default_poster
          }
          alt={`${props.movie.title} Poster`}
        />
        <p className="movie-section_title">{props.movie.title}</p>
      </div>
      {props.path !== '/my-collections' ? (
        <Favorite
          movie={props.movie}
          favorite={checkIsFavorite() ? true : false}
          showCollections={showCollections}
        />
      ) : (
        <span className="movie-section_delete">
          <i
            className="fas fa-trash-alt"
            onClick={e => {
              e.preventDefault();
              deleteFavorite(props.selectedCollection, props.position);
            }}
          ></i>
        </span>
      )}
      {hideCollections && !props.favorite && (
        <ShowCollections
          showCollections={showCollections}
          movie={props.movie}
        />
      )}
    </section>
  );
};

export default Movie;
