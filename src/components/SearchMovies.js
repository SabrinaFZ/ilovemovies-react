import React from 'react';

import './../styles/SearchMovies.css';


class SearchMovies extends React.Component{
    constructor(){
        super();
        this.state = {
            movieToSearch: ''
        }
        this.setMovieToSearch = this.setMovieToSearch.bind(this);
        this.searchMovie = this.searchMovie.bind(this);

    }

    setMovieToSearch(e){
        this.setState({
            movieToSearch: e.target.value
        });
    }

    async searchMovie(e){
        e.preventDefault();
        let query = this.state.movieToSearch.replace(/ /g, '%20');
        let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e53ed30d9e273053803f465b52b55158&language=en-US&query=${query}&page=1&include_adult=false`);
        let responseJSON = await response.json();
        console.log(responseJSON.results);
    }

    render(){
        const {movieToSearch} = this.state;
        return (
            <form id="search-form" onSubmit={e => this.searchMovie(e)}>
                <input className="search-form_input" type="text" placeholder="search a movie" value={movieToSearch} onChange={e => this.setMovieToSearch(e)}/>
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        )
    }
}

export default SearchMovies;