import React from 'react';

import './../styles/Ratings.css';

class Ratings extends React.Component {

    setRating(e){
        e.preventDefault();
        this.props.addRating(e.target.id);
    }

    render(){
        const {rating} = this.props;
        return (
            <article className="movie-section_rating">
                <i onClick={this.setRating.bind(this)} id="happy" className={"rating_happy far fa-smile" + (rating === "happy" ? " active" : "")}></i>
                <i onClick={this.setRating.bind(this)} id="meh" className={"rating_meh far fa-meh" + (rating === "meh" ? " active" : "")}></i>
                <i onClick={this.setRating.bind(this)} id="sad" className={"rating_sad far fa-frown" + (rating === "sad" ? " active" : "")}></i>
            </article>
        )
    }
}

export default Ratings;