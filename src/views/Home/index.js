import React from 'react';

import ListMovies from '@/components/ListMovies';
import SearchMovies from '@/components/SearchMovies';
import AppContext from '@/context';

const Home = () => {
  return (
    <AppContext.Consumer>
      {({ movies, setMovies }) => (
        <main id="home">
          <SearchMovies setMovies={setMovies} />
          <ListMovies movies={movies} />
        </main>
      )}
    </AppContext.Consumer>
  );
};

export default Home;
