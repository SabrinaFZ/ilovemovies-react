import React from 'react';

import Movie from './Movie';

import './../styles/ListMovies.css';
class ListMovies extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: [
                {
                    id: '1',
                    name: 'collectionA',
                    movies: []
                },
                {
                    id: '2',
                    name: 'collectionB',
                    movies: []
                }
            ]
        };

        this.addMovieToFavorite = this.addMovieToFavorite.bind(this);
    }

    addMovieToFavorite(selectedCollection, movie) {
        let newCollections = this.state.collections.map(collection => {
            if (collection.id === selectedCollection.id) {
                return Object.assign({}, collection, { movies: [...collection.movies, movie] })
            }
            return collection;
        });

        this.setState({
            collections: newCollections
        });
    }

    render(){
        const { movies } = this.props;
        return (
            <div className="movies">
                {
                    movies.map(movie => {
                        return <Movie key={movie.id} movie={movie} 
                        collections={this.state.collections} 
                        addFavorite={this.addMovieToFavorite}/>
                    })
                }
            </div>
        )
    }
    
}

export default ListMovies;