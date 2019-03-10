import React from 'react';
import { NavLink } from "react-router-dom";

import '../styles/Nav.css';

const Nav = props => {
    return (
        <nav id="navigator">
            <ul className="navigator_ul">
                <li className="navigator_li"><NavLink exact to="/" className="navigator_a" activeClassName="navigator_a--selected">Home</NavLink></li>
                <li className="navigator_li"><NavLink to="/my-collections" className="navigator_a" activeClassName="navigator_a--selected">My Collections</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;