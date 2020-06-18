import React from 'react';

import '@/styles/Ratings.css';

const Ratings = props => {
  const setRating = e => {
    e.preventDefault();
    props.addRating(props.selectedCollection, e.target.id, props.movie);
  };
  return (
    <div className="movie-section_rating">
      <i
        onClick={e => setRating(e)}
        id="happy"
        className={
          'rating_happy far fa-smile' +
          (props.rating === 'happy' ? ' active' : '')
        }
      ></i>
      <i
        onClick={e => setRating(e)}
        id="meh"
        className={
          'rating_meh far fa-meh' + (props.rating === 'meh' ? ' active' : '')
        }
      ></i>
      <i
        onClick={e => setRating(e)}
        id="sad"
        className={
          'rating_sad far fa-frown' + (props.rating === 'sad' ? ' active' : '')
        }
      ></i>
    </div>
  );
};

export default Ratings;
