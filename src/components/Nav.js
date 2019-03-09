import React from 'react';

import SearchMovies from './SearchMovies';

import '../styles/Nav.css';

const Nav = props => {
    return (
        <nav id="navigator">
            <ul className="navigator_ul">
                <li className="navigator_li"><a className="navigator_a" href="/">Home</a></li>
                <li className="navigator_li"><a className="navigator_a" href="/">My Collections</a></li>
            </ul>
            <SearchMovies {...props} />
        </nav>
    )
}

export default Nav;