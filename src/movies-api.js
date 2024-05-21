import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmEzNWQ1NjBkN2U1ZDhjNTA4NTYyMjAyNzBlODdlMyIsInN1YiI6IjY2NDdhN2ZiMTVhYWY1OWE0ZDRjNDFjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6JML1KJH76769rhcsqZBGTiU8cdwezMTEeOCHZyworo",
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get(
    "trending/movie/day?language=en-US",
    options
  );
  return response.data.results;
};

export const getMovieById = async (movieId) => {
  const response = await axios.get(`movie/${movieId}?language=en-US`, options);
  return response.data;
};

export const getMovieCredits = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/credits`, options);
  return response.data;
};

export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/reviews`, options);
  return response.data;
};

export const getMovieByQuery = async (searchQuery) => {
  const response = await axios.get(
    `search/movie?query=${searchQuery}&page=1`,
    options,
    {}
  );
  console.log(response.data.results);
  return response.data.results;
};
