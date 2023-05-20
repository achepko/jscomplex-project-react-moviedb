import {axiosService} from "./axios.service";

import {IAxiosRes} from "../types/axios.res.type";
import {IMovieDetails, IMoviesService} from "../interfaces";
import {urls} from "../constants";
import {IVideosService} from "../interfaces/video.interface";


const movieService = {
    getAll: (page: number = 1,sort_by:string,with_genres:string):IAxiosRes<IMoviesService>=>
        axiosService.get(urls.discover_movie +`?page=${page}`+`&sort_by=${sort_by}`+`&with_wenres=${with_genres}`),
    getMovieById:(id:string):IAxiosRes<IMovieDetails>=>
        axiosService.get(urls.movie+`/${id}`),
    getTopRatedMovies:(page: number = 1):IAxiosRes<IMoviesService>=>
        axiosService.get(urls.movie_top_rated+`?page=${page}`),
    getNowPlayingMovies:(page: number = 1):IAxiosRes<IMoviesService>=>
        axiosService.get(urls.movie_now_playing+`?page=${page}`),
    searchMovies:(query:string='',page: number = 1):IAxiosRes<IMoviesService>=>
        axiosService.get(urls.search_movie+`?query=${query}&page=${page}`),
    getVideoById:(id:number):IAxiosRes<IVideosService>=>
        axiosService.get(urls.movie + `/${id}/videos`),
    getSimilarMoviesById:(id:number):IAxiosRes<IMoviesService>=>
        axiosService.get(urls.movie+ `/${id}/similar`)
}



export {
    movieService
}
