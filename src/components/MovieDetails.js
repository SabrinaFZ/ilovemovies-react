import React from "react";

import default_poster from "./../movie_default.png";

import "./../styles/MovieDetails.css";

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    };
  }

  async componentDidMount() {
    const URL_BASE = `https://api.themoviedb.org/3/movie/${
      this.props.match.params.id
    }`;
    const SEARCH_MOVIE_URL = `${URL_BASE}?api_key=e53ed30d9e273053803f465b52b55158&language=en-US`;
    const SEARCH_CAST_MOVIE_URL = `${URL_BASE}/credits?api_key=e53ed30d9e273053803f465b52b55158`;

    let movieDetails = await this.callAPI(SEARCH_MOVIE_URL);
    let cast = await this.callAPI(SEARCH_CAST_MOVIE_URL);

    this.setState({
      movie: { ...movieDetails, ...cast}
    });
  }

  async callAPI(URL){
    let response = await fetch(URL);
    let responseJSON = await response.json();
    return responseJSON;
  }

  render() {
    const { movie } = this.state;

    return (
      <main className="movie-info">
        <div>
          <img
            className="movie-info_poster"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : default_poster
            }
            alt={`${movie.title} Poster`}
          />
        </div>

        <div className="movie-info_info">
          <ul>
            <li className="movie-info_title">
              <p>{movie.title}</p>
            </li>
            <li className="movie-info_desc">
              <p>{movie.overview}</p>
            </li>
            <li className="movie-info_cast">
              <h3>Cast:</h3>
              {movie.cast &&
                movie.cast.slice(0, 3).map((character, index) => {
                  return (
                    <span key={character.id}>
                      {character.name}
                      {index !== 2 ? "," : ""}{" "}
                    </span>
                  );
                })}
            </li>
            <li className="movie-info_director">
              <h3>Director: </h3> <p> {movie.crew && movie.crew[0].name}</p>
            </li>
            <li className="movie-info_release_date">
              <h3>Release Date: </h3>
              <p>{movie.release_date}</p>
            </li>
          </ul>
        </div>
      </main>
    );
  }
}

export default MovieDetails;
