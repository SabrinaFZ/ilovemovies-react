import React from 'react';

import SearchMovies from './SearchMovies';

import '../styles/Nav.css';

class Nav extends React.Component {
    render(){
        return (
            <nav id="navigator">
                <ul className="navigator_ul">
                    <li className="navigator_li"><a className="navigator_a" href="/">Home</a></li>
                    <li className="navigator_li"><a className="navigator_a" href="/">My Collections</a></li>
                </ul>
                <SearchMovies />
            </nav>
        )
    }
}

export default Nav;