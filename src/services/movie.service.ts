import {axiosService} from "./axios.service";

import {IAxiosRes} from "../types/axios.res.type";
import {IMovieDetails, IMoviesService} from "../interfaces";
import {urls} from "../constants";


const movieService = {
    getAll: (page: number = 1):IAxiosRes<IMoviesService>=>
        axiosService.get(urls.discover_movie +`?page=${page}`),
    getMovieById:(id:string):IAxiosRes<IMovieDetails>=>
        axiosService.get(urls.movie+`/${id}`),
    getTopRatedMovies:(page: number = 1):IAxiosRes<IMoviesService>=>
        axiosService.get(urls.movie_top_rated+`?page=${page}`),
    getNowPlayingMovies:(page: number = 1):IAxiosRes<IMoviesService>=>
        axiosService.get(urls.movie_now_playing+`?page=${page}`),
    searchMovies:(query:string='',page: number = 1):IAxiosRes<IMoviesService>=>
        axiosService.get(urls.search_movie+`?query=${query}&?page=${page}`)
}



export {
    movieService
}
