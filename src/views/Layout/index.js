import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '@/routes/routes';
import Nav from '@/components/Nav';
import AppContext from '@/context';

const FETCH_MOVIES_URL =
  // eslint-disable-next-line max-len
  'https://api.themoviedb.org/3/discover/movie?api_key=e53ed30d9e273053803f465b52b55158&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [collections, setCollections] = useState(
    JSON.parse(localStorage.getItem('collections')) || []
  );

  const fetchMovies = async () => {
    let response = await fetch(FETCH_MOVIES_URL);
    let responseJSON = await response.json();
    setMovies(responseJSON.results);
  };

  useEffect(() => {
    if (!movies.length) {
      fetchMovies();
    }
    localStorage.setItem('collections', JSON.stringify(collections));
  }, [collections]);

  const addFavorite = (selectedCollection, movie) => {
    let newMovie = { ...movie, rating: 'none' };
    setCollections(
      collections.map(collection => {
        if (collection.id === selectedCollection.id) {
          return {
            ...collection,
            movies: [...collection.movies, newMovie]
          };
        }
        return collection;
      })
    );
  };

  const deleteFavorite = (selectedCollection, moviePosition) => {
    collections[selectedCollection].movies.splice(moviePosition, 1);
    setCollections([...collections]);
  };

  const deleteAllMoviesFavorite = currentMovie => {
    collections.forEach(collection => {
      collection.movies.forEach((movie, index) => {
        if (movie.id === currentMovie.id) {
          collection.movies.splice(index, 1);
        }
      });
      return collection;
    });
    setCollections([...collections]);
  };

  const createCollection = collectionName => {
    let newCollection = {
      id: collections.length + 1,
      name: collectionName,
      movies: []
    };

    setCollections([...collections, newCollection]);
  };

  const deleteCollection = (e, collectionPosition) => {
    e.stopPropagation();
    collections.splice(collectionPosition, 1);
    setCollections([...collections]);
  };

  const addRating = (selectedCollection, ratingSelected, movieSelected) => {
    setCollections(
      collections.map((collection, index) => {
        if (index === selectedCollection) {
          return {
            ...collection,
            movies: collection.movies.map(movie => {
              if (movie.id === movieSelected.id) {
                return { ...movie, rating: ratingSelected };
              }
              return movie;
            })
          };
        }
        return collection;
      })
    );
  };
  return (
    <AppContext.Provider
      value={{
        movies,
        collections,
        setMovies: setMovies,
        addFavorite: addFavorite,
        deleteFavorite: deleteFavorite,
        deleteAllMoviesFavorite: deleteAllMoviesFavorite,
        createCollection: createCollection,
        deleteCollection: deleteCollection,
        addRating: addRating
      }}
    >
      <BrowserRouter>
        <>
          <Nav />
          <Routes />
        </>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
