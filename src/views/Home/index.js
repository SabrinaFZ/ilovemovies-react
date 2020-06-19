import React, { useContext } from 'react';
import ListMovies from '@/components/ListMovies';
import SearchMovies from '@/components/SearchMovies';
import AppContext from '@/context';

const Home = ({ match }) => {
  const { movies } = useContext(AppContext);

  return (
    <main id="home">
      <SearchMovies />
      <ListMovies movies={movies} {...match} />
    </main>
  );
};

export default Home;
