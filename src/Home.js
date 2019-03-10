import React, { Component } from 'react';

import ListMovies from './components/ListMovies';
import SearchMovies from './components/SearchMovies';

const FETCH_MOVIES_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=e53ed30d9e273053803f465b52b55158&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
        this.setMovies = this.setMovies.bind(this);
    }

    async componentDidMount() {
        let response = await fetch(FETCH_MOVIES_URL);
        let responseJSON = await response.json();
        this.setMovies(responseJSON.results);
    }

    setMovies(movies) {
        this.setState({
            movies: movies
        });
    }

    render() {
        const { movies } = this.state;
        return (
            <main id="home">
                <SearchMovies setMovies={this.setMovies} />
                <ListMovies movies={movies} />
            </main>
        );
    }
}

export default Home;
