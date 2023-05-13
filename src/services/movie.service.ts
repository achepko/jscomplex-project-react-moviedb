import {axiosService} from "./axios.service";

import {IAxiosRes} from "../types/axios.res.type";
import {IMovieInfo, IMoviesService} from "../interfaces";
import {urls} from "../constants";

// const movieService = {
//     getAll: (page: number = 1, sort_by: string, genres: string):IAxiosRes<IMoviesService>=>
//         axiosService.get('${urls.discover_movie}?page=${page}&sort_by=${sort_by}&active_genres=${genres}'),
//     getMovieById:(id:string):IAxiosRes<IMovieInfo>=>
//         axiosService.get(urls.discover_movie+`/${id}`)
// }

const movieService = {
    getAll: (page: number = 1):IAxiosRes<IMoviesService>=>
        axiosService.get(urls.discover_movie +`?page=${page}`),
    getMovieById:(id:string):IAxiosRes<IMovieInfo>=>
        axiosService.get(urls.discover_movie+`/${id}`)
}



export {
    movieService
}
