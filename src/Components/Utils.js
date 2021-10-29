// moviedetails
const API_URL = "https://www.omdbapi.com/";
export const getMoviesById = async (movie_id) => {
  const url = `${API_URL}?apikey=${process.env.REACT_APP_KEY}&i=${movie_id}`;
  const response = await fetch(url);
  const movie = await response.json();
  // console.log(movie)
  return movie;
};


// movies
const APIURL = "https://www.omdbapi.com/";
export const getMoviesBySearchTerm = async (title, type, page) => {
  const url = `${APIURL}?apikey=${process.env.REACT_APP_KEY}&s=${title}&type=${type}&page=${page}`;
  const response = await fetch(url);
  const movie = await response.json();
  // console.log(movie)
  return movie;
};
