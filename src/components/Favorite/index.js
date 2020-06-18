import React, { useState } from 'react';

import ShowCollections from '@/components/ShowCollections';

import '@/styles/Favorite.css';

const Favorite = props => {
  const [hideCollections, setHideCollections] = useState(false);

  const showCollections = e => {
    if (e) {
      e.preventDefault();
    }

    if (!props.favorite) {
      setHideCollections(!hideCollections);
    }
  };
  return (
    <div className="movie-section_favorite">
      <button
        className="movie-section_button"
        onClick={e => {
          showCollections(e);
          if (props.favorite) {
            props.deleteAllMoviesFavorite(props.movie);
          }
        }}
      >
        {props.favorite ? (
          <i className="fas fa-star" />
        ) : (
          <i className="far fa-star"></i>
        )}
      </button>
      {hideCollections && !props.favorite && (
        <ShowCollections
          showCollections={showCollections}
          movie={props.movie}
        />
      )}
    </div>
  );
};

export default Favorite;
