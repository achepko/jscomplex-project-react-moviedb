import {axiosService} from "./axios.service";

import {IAxiosRes} from "../types/axios.res.type";
import {IMovieDetails, IMoviesService} from "../interfaces";
import {urls} from "../constants";


const movieService = {
    getAll: (page: number = 1):IAxiosRes<IMoviesService>=>
        axiosService.get(urls.discover_movie +`?page=${page}`),
    getMovieById:(id:string):IAxiosRes<IMovieDetails>=>
        axiosService.get(urls.movie+`/${id}`),
    getPopularMovies:(page: number = 1):IAxiosRes<IMoviesService>=>
        axiosService.get(urls.movie_popular),
    getTopRatedMovies:():IAxiosRes<IMoviesService>=>
        axiosService.get(urls.movie_top_rated)
}



export {
    movieService
}
