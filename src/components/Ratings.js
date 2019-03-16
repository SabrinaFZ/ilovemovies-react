import React from 'react';

import './../styles/Ratings.css';
import AppContext from '../context/AppContext';

const Ratings = (props) => {
    const { rating, selectedCollection, movie } = props;
    return (
        <AppContext.Consumer>
            {
                ({ addRating }) =>
                    <article className="movie-section_rating">
                        <i onClick={(e) => setRating(e, selectedCollection, addRating, movie)} id="happy" className={"rating_happy far fa-smile" + (rating === "happy" ? " active" : "")}></i>
                        <i onClick={(e) => setRating(e, selectedCollection, addRating, movie)} id="meh" className={"rating_meh far fa-meh" + (rating === "meh" ? " active" : "")}></i>
                        <i onClick={(e) => setRating(e, selectedCollection, addRating, movie)} id="sad" className={"rating_sad far fa-frown" + (rating === "sad" ? " active" : "")}></i>
                    </article>
            }
        </AppContext.Consumer>

    )
}

const setRating = (e, selectedCollection, addRating, movie) => {
  e.preventDefault();
  addRating(selectedCollection, e.target.id, movie);
};

export default Ratings;