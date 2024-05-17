import axios from "axios";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmEzNWQ1NjBkN2U1ZDhjNTA4NTYyMjAyNzBlODdlMyIsInN1YiI6IjY2NDdhN2ZiMTVhYWY1OWE0ZDRjNDFjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6JML1KJH76769rhcsqZBGTiU8cdwezMTEeOCHZyworo",
  },
};

export async function getPopularMovies() {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const responce = await axios.get(url, options);
  return responce.data.results;
  // console.log(responce.data.results)
}

export async function getMovie(movie) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;
  const responce = await axios.get(url, options);

  return responce.data.results;
}

export async function getMovieByid(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const responce = await axios.get(url, options);
  return responce.data;
}

export async function getMovieCast(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  const responce = await axios.get(url, options);

  return responce.data.cast;
}

export async function getMovieReviews(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
  const responce = await axios.get(url, options);

  return responce.data.results;
}
