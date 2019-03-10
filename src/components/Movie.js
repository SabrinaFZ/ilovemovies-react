import React from 'react';

import Ratings from './Ratings';
import Favorite from './Favorite';

import './../styles/Movie.css';
import default_poster from './../movie_default.png';

class Movie extends React.Component {
    constructor(){
        super();

        this.selectCollection = this.selectCollection.bind(this);
        this.deleteFavorite = this.deleteFavorite.bind(this);
    }

    selectCollection(selectedCollection){
        this.props.addFavorite(selectedCollection, this.props.movie);
    }

    checkIsFavorite() {
        let found;
        this.props.collections.forEach((collection) => {
            found = collection.movies.find(movie => {
                return movie.id === this.props.movie.id;
            })
        })
        return found;
    }

    deleteFavorite(e){
        e.preventDefault();
        
        this.props.deleteFavorite();
    }

    render(){
        let favorite = this.checkIsFavorite() ? true : false;
        return (
            <section className="movie-section">
                { this.props.path === '/my-collections' && <Ratings />}
                <div className="movie-section_info">
                    <img className="movie-section_poster" src={this.props.movie.poster_path ? `https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}` : default_poster} alt={`${this.props.movie.title} Poster`} />
                    <p className="movie-section_title">{this.props.movie.title}</p>
                </div>
                {
                    this.props.path !== '/my-collections' ? (
                        <Favorite {...this.props} selectCollection={this.selectCollection} favorite={favorite}/>
                    ) : (
                            <span className="movie-section_delete"><i className="fas fa-trash-alt" onClick={(e) => this.deleteFavorite(e)}></i></span>
                    )
                }
            </section>
        )
    }
}


export default Movie;