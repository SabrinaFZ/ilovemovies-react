import React from 'react';
import {Link} from 'react-router-dom';

import Movie from './Movie';

import './../styles/ListMovies.css';
class ListMovies extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: JSON.parse(localStorage.getItem('collections')) || [] 
        };

        this.addMovieToFavorite = this.addMovieToFavorite.bind(this);
        this.addRating = this.addRating.bind(this);
    }

    componentDidUpdate() {
        localStorage.setItem('collections', JSON.stringify(this.state.collections));
    }

    addMovieToFavorite(selectedCollection, movie) {
        let newMovie = Object.assign({}, movie, {rating: 'none'})
        this.setState(previousState => {
            let newCollections = previousState.collections.map(collection => {
                if (collection.id === selectedCollection.id) {
                    return Object.assign({}, collection, { movies: [...collection.movies, newMovie] })
                }
                return collection;
            });
            return {
                collections: [...newCollections]
            }
        });
    }

    addRating(rating, movie){
        this.props.addRating(rating, movie);
    }

    deleteMovieFromFavorite(moviePosition){
        this.props.deleteFavorite(moviePosition);
    }

    render(){
        const { movies, path } = this.props;
        return (
            <div className="movies">
                {
                    movies.map((movie, index) => {
                        return (
                            <Link style={{ textDecoration: 'none' }} key={movie.id} to={`/movie/${movie.id}`}>
                                <Movie 
                                    movie={movie}
                                    addFavorite={this.addMovieToFavorite}
                                    addRating={this.addRating}
                                    path={path}
                                    collections={this.state.collections}
                                    deleteFavorite={() => this.deleteMovieFromFavorite(index)} />
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
    
}

export default ListMovies;