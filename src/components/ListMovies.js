import React from 'react';

import Movie from './Movie';

import './../styles/ListMovies.css';

const ListMovies =  props => {
    const { movies } = props;
    return (
        <main className="movies">
            {
                movies.map(movie => {
                    return <Movie key={movie.id} movie={movie} />
                })
            }
        </main>
    )
}

export default ListMovies;