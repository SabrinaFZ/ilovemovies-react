const URL_BASE = `${process.env.REACT_APP_BASE_URL}/movie`;

export default {
  getCredits: async movieId => {
    const response = await fetch(
      `${URL_BASE}/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    return data;
  }
};
