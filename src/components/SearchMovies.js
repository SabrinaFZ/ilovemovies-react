import React from 'react';

import './../styles/SearchMovies.css';

class SearchMovies extends React.Component{
    render(){
        return (
            <form id="search-form">
                <input className="search-form_input" type="text" placeholder="search a movie" />
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        )
    }
}

export default SearchMovies;