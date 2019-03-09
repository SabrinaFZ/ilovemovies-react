import React from 'react';

import Ratings from './Ratings';
import Favorite from './Favorite';

import './../styles/Movie.css';
import default_poster from './../movie_default.png';

class Movie extends React.Component {
    constructor(){
        super();

        this.selectCollection = this.selectCollection.bind(this);
    }
    selectCollection(selectedCollection){
        this.props.addFavorite(selectedCollection, this.props.movie);
    }
    render(){
        return (
            <section className="movie-section">
                {/* <Ratings /> */}
                <div className="movie-section_info">
                    <img className="movie-section_poster" src={this.props.movie.poster_path ? `https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}` : default_poster} alt={`${this.props.movie.title} Poster`} />
                    <p className="movie-section_title">{this.props.movie.title}</p>
                </div>
                <Favorite {...this.props} selectCollection={this.selectCollection}/>
            </section>
        )
    }
}


export default Movie;