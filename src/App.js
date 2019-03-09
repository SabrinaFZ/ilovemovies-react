import React, { Component } from 'react';

import Nav from './components/Nav';
import ListMovies from './components/ListMovies';

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <ListMovies />
      </>
    );
  }
}

export default App;
