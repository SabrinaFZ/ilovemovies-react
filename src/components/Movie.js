import React from 'react';

import Ratings from './Ratings';
import Favorite from './Favorite';

import './../styles/Movie.css';
import default_poster from './../movie_default.png';
import AppContext from '../context/AppContext';

const Movie = (props) => {
    return (
        <AppContext.Consumer>
            {
                ({ collections, deleteFavorite }) => (
                    <section className="movie-section">
                        {props.path === '/my-collections' && <Ratings movie={props.movie} rating={props.movie.rating} selectedCollection={props.selectedCollection} />}
                        <div className="movie-section_info">
                            <img className="movie-section_poster" src={props.movie.poster_path ? `https://image.tmdb.org/t/p/w500/${props.movie.poster_path}` : default_poster} alt={`${props.movie.title} Poster`} />
                            <p className="movie-section_title">{props.movie.title}</p>
                        </div>
                        {
                            props.path !== '/my-collections' ? (
                                <Favorite movie={props.movie} favorite={checkIsFavorite(collections, props.movie) ? true : false} />
                            ) : (
                                    <span className="movie-section_delete"><i className="fas fa-trash-alt" onClick={(e) => {
                                        e.preventDefault();
                                        deleteFavorite(props.selectedCollection, props.position);
                                    }}></i></span>
                                )
                        }
                    </section>
                )
            }
        </AppContext.Consumer>
    )
}

const checkIsFavorite = (collections, currentMovie) => {
    let found;
    if (collections && collections.length > 0)
        collections.some((collection) => {
            let isFound = false;
            found = collection.movies.find(movie => {
                return movie.id === currentMovie.id;
            });

            if(found){
                isFound = true;
            }
            return isFound;
        });

    return found;
}


export default Movie;