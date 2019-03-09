import React from 'react';

import Ratings from './Ratings';
import Favorite from './Favorite';

import './../styles/Movie.css';

class Movie extends React.Component {
    render(){
        return (
            <section className="movie-section">
                <Ratings />
                <div className="movie-section_info">
                    <img className="movie-section_poster" src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`} alt={`${this.props.movie.title} Poster`} />
                    <p className="movie-section_title">{this.props.movie.title}</p>
                </div>
                <Favorite />
            </section>
        )
    }
}

export default Movie;