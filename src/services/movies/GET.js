const FETCH_MOVIES_URL = `
  ${process.env.REACT_APP_BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}
`;

export default {
  getMovies: async () => {
    const response = await fetch(FETCH_MOVIES_URL);
    const data = await response.json();
    return data.results;
  },
  getMovieDetails: async movieId => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    return data;
  }
};
