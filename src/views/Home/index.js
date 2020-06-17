import React from 'react';

import ListMovies from '../../components/ListMovies';
import SearchMovies from '../../components/SearchMovies';
import AppContext from '../../context/AppContext';

const Home = () => {
  return (
    <AppContext.Consumer>
      {({ movies }) => (
        <main id="home">
          <SearchMovies />
          <ListMovies movies={movies} />
        </main>
      )}
    </AppContext.Consumer>
  );
};

export default Home;
