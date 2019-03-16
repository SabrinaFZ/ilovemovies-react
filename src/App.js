import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Routes from './Routes';
import Nav from './components/Nav';
import AppContext from './context/AppContext';

const FETCH_MOVIES_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=e53ed30d9e273053803f465b52b55158&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      collections: JSON.parse(localStorage.getItem("collections")) || []
    };

    this.setMovies = this.setMovies.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
    this.createCollection = this.createCollection.bind(this);
    this.deleteCollection = this.deleteCollection.bind(this);
    this.addRating = this.addRating.bind(this);
  }

  async componentDidMount() {
    let response = await fetch(FETCH_MOVIES_URL);
    let responseJSON = await response.json();
    this.setMovies(responseJSON.results);
  }

  componentDidUpdate() {
    localStorage.setItem("collections", JSON.stringify(this.state.collections));
  }

  setMovies(movies) {
    this.setState({
      movies: movies
    });
  }

  addFavorite(selectedCollection, movie) {
    let newMovie = Object.assign({}, movie, { rating: "none" });
    this.setState(previousState => {
      let newCollections = previousState.collections.map(collection => {
        if (collection.id === selectedCollection.id) {
          return Object.assign({}, collection, {
            movies: [...collection.movies, newMovie]
          });
        }
        return collection;
      });
      return {
        collections: [...newCollections]
      };
    });
  }

  deleteFavorite(selectedCollection, moviePosition) {
    this.setState(previousState => {
      let newCollection = [...previousState.collections];
      newCollection[selectedCollection].movies.splice(moviePosition, 1);
      return {
        collections: [...previousState.collections]
      };
    });
  }

  createCollection(collectionName) {
    let newCollection = {
      id: this.state.collections.length + 1,
      name: collectionName,
      movies: []
    };

    this.setState(previousState => {
      return {
        collections: [...previousState.collections, newCollection]
      };
    });
  }

  deleteCollection(e, collectionPosition) {
    e.stopPropagation();
    this.setState(previousState => {
      previousState.collections.splice(collectionPosition, 1);
      return {
        collections: [...previousState.collections]
      };
    });
  }

  addRating(selectedCollection, ratingSelected, movieSelected) {
    this.setState(previousState => {
      let newMovies = previousState.collections[selectedCollection].movies.map(
        movie => {
          if (movie.id === movieSelected.id) {
            return Object.assign({}, movie, { rating: ratingSelected });
          }
          return movie;
        }
      );

      let newCollections = previousState.collections.map(
        (collection, index) => {
          if (index === selectedCollection) {
            return Object.assign({}, collection, { movies: [...newMovies] });
          }
          return collection;
        }
      );

      return {
        collections: [...newCollections]
      };
    });
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          movies: this.state.movies,
          collections: this.state.collections,
          setMovies: this.setMovies,
          addFavorite: this.addFavorite,
          deleteFavorite: this.deleteFavorite,
          createCollection: this.createCollection,
          deleteCollection: this.deleteCollection,
          addRating: this.addRating
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
  }
}

export default App;
