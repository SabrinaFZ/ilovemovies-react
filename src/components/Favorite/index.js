import React, { useContext } from 'react';
import AppContext from '@/context';
import './Favorite.scss';

const Favorite = props => {
  const { deleteAllMoviesFavorite } = useContext(AppContext);

  return (
    <div className="favorite">
      <button
        className="favorite_button"
        onClick={e => {
          props.showCollections(e);
          if (props.favorite) {
            deleteAllMoviesFavorite(props.movie);
          }
        }}
      >
        {props.favorite ? (
          <i className="fas fa-star" />
        ) : (
          <i className="far fa-star"></i>
        )}
      </button>
    </div>
  );
};

export default Favorite;
