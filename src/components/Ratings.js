import React from 'react';

import './../styles/Ratings.css';

class Ratings extends React.Component {
    render(){
        return (
            <article className="movie-section_rating">
                <span className="rating_happy"><i className="far fa-smile"></i></span>
                <span className="rating_meh"><i className="far fa-meh"></i></span>
                <span className="rating_sad"><i className="far fa-frown"></i></span>
            </article>
        )
    }
}

export default Ratings;