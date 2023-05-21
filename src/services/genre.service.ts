import {urls} from "../constants";


import {axiosService} from "./axios.service";
import {IGenresService, IMoviesService} from "../interfaces";
import {IAxiosRes} from "../types/axios.res.type";


const genreService ={
    getAll:():IAxiosRes<IGenresService>=>
        axiosService.get(urls.genre),
}

export {
    genreService
}