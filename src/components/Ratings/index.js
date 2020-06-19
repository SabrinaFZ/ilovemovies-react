import React, { useContext } from 'react';
import AppContext from '@/context';
import './Ratings.scss';

const Ratings = props => {
  const { addRating } = useContext(AppContext);

  const setRating = e => {
    e.preventDefault();
    addRating(props.selectedCollection, e.target.id, props.movie);
  };

  return (
    <div className="rating">
      <i
        onClick={e => setRating(e)}
        id="happy"
        className={'far fa-smile' + (props.rating === 'happy' ? ' active' : '')}
      ></i>
      <i
        onClick={e => setRating(e)}
        id="meh"
        className={'far fa-meh' + (props.rating === 'meh' ? ' active' : '')}
      ></i>
      <i
        onClick={e => setRating(e)}
        id="sad"
        className={'far fa-frown' + (props.rating === 'sad' ? ' active' : '')}
      ></i>
    </div>
  );
};

export default Ratings;
