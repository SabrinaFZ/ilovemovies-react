import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="navigator">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="selected">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-collections" activeClassName="selected">
            My Collections
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
