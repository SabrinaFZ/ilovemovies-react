import React from 'react';

import Movie from './Movie';

import './../styles/ListMovies.css';

const FETCH_MOVIES_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=e53ed30d9e273053803f465b52b55158&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false'

class ListMovies extends React.Component {
    constructor(){
        super();
        this.state = {
            movies: []
        }
    }

    async componentDidMount(){
        let response = await fetch(FETCH_MOVIES_URL);
        let responseJSON = await response.json();
        this.setState({
            movies: responseJSON.results
        });
    }

    render() {
        const {movies} = this.state;
        return (
            <main className="movies">
                {
                    movies.map( movie => {
                        return <Movie key={movie.id} movie={movie}/>
                    })
                }
            </main>
        )
    }
}

export default ListMovies;