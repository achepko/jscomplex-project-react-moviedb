import {axiosService} from "./axios.service";
import {IGenresService} from "../interfaces";
import {urls} from "../constants";
import {IAxiosRes} from "../types/axios.res.type";


const genreService ={
    getAll:():IAxiosRes<IGenresService>=>
        axiosService.get(urls.genre)
}

export {
    genreService
}