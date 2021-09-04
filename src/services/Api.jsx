import axios from "axios";
// export { getSearchMovies, getTrendingMovies }

const configUrl = {
    url: 'https://api.themoviedb.org/3',
    keyUser: 'ceb48c7fc58113007dbef6409ae33dee',
    imgUrl: 'https://image.tmdb.org/t/p/w500'
}


export { configUrl }

const getSearchMovies = (query) =>
    axios.get(`${configUrl.url}/search/movie?api_key=${configUrl.keyUser}&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(response => response.data.results)
        .catch(err => alert(err));

export { getSearchMovies };


const getTrendingMovies = () =>
    axios.get(`${configUrl.url}/trending/movie/week?api_key=${configUrl.keyUser}`)
        .then(response => response.data.results)
        .catch(err => alert(err));

export { getTrendingMovies };



const getDeteilsMovies = (movieId) =>
    axios.get(`${configUrl.url}/movie/${movieId}?api_key=${configUrl.keyUser}`)
        .then(response => response.data)
        .catch(err => alert(err));

export { getDeteilsMovies };

const getDeteilsMoviesCast = (movieId) =>
    axios.get(`${configUrl.url}/movie/${movieId}/credits?api_key=${configUrl.keyUser}&language=en-US`)
        .then(response => response.data.cast)
        .catch(err => alert(err));

export { getDeteilsMoviesCast };


const getDeteilsMoviesReviews = (movieId) =>
    axios.get(`${configUrl.url}/movie/${movieId}/reviews?api_key=${configUrl.keyUser}&language=en-US&page=1`)
        .then(response => response.data.results)
        .catch(err => alert(err));

export { getDeteilsMoviesReviews };

//https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

// https://api.themoviedb.org/3/search/movie?api_key=ceb48c7fc58113007dbef6409ae33dee&language=en-US&query=batman&page=1&include_adult=false
// https://api.themoviedb.org/3/trending/movie/week?api_key=ceb48c7fc58113007dbef6409ae33dee
// https://api.themoviedb.org/3/movie/sgdgsdfsfdfd?api_key=ceb48c7fc58113007dbef6409ae33dee&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
// https://api.themoviedb.org/3/movie/436969?api_key=ceb48c7fc58113007dbef6409ae33dee&language=en-US

// https://image.tmdb.org/t/p/w500${movie.poster_path}
