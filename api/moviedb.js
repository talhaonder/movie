import axios from "axios";
import {apiKey} from '../constants';

//endpoints
const apiBaseUrl= 'http://api.themoviedb.org/3';    
const MoviesEndpoint = `${apiBaseUrl}/trending/movie/week?api_key=${apiKey}`;
const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?api_key=${apiKey}`

//dynamic endpoints
const movieDetailsEndpoint = id=>  `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`


export const image500 = path=> path? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image185 = path=> path? `https://image.tmdb.org/t/p/w185${path}` : null;

export const fallbackMoviePoster = 'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';

const apiCall = async (endpoint, params)=>{
    const options = {
        method: 'GET',
        url: endpoint,
        params: params? params: {}
    }
    try{
        const response = await axios.request(options);
        return response.data;
    }catch(error){
        console.log('error: ',error);
        return{}
    }
}
export const fetchMovies = ()=>{
    return apiCall(MoviesEndpoint);
}
export const fetchMovieDetails = id=>{
    return apiCall(movieDetailsEndpoint(id));
}
export const searchMovies = params=>{
    return apiCall(searchMoviesEndpoint, params);
}
