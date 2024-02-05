import axios from "axios";
import {apiKey} from '../constants';

//endpoints
const apiBaseUrl= 'http://api.themoviedb.org/3';    
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/week?api_key=${apiKey}`;

const apiCall = async (endpoint, params)=>{
    const options = {
        method: "GET",
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
export const fetchTrendingMovies = ()=>{
    return apiCall(trendingMoviesEndpoint);
}