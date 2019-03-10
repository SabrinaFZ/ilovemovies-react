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
    const SEARCH_MOVIE_URL = `https://api.themoviedb.org/3/movie/${
      this.props.match.params.id
    }?api_key=e53ed30d9e273053803f465b52b55158&language=en-US`;

    let response = await fetch(SEARCH_MOVIE_URL);
    let responseJSON = await response.json();
    this.setState({
      movie: responseJSON
    });
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
            <li>
              <p className="movie-info_title">{movie.title}</p>
            </li>
            <li>
              <p className="movie-info_desc">{movie.overview}</p>
            </li>
          </ul>
        </div>
      </main>
    );
  }
}

export default MovieDetails;
