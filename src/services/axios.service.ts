import axios from "axios";

import {baseURL, tokenAccess} from "../constants";


let axiosService = axios.create({baseURL});

axiosService.interceptors.request.use(config =>{
    if (tokenAccess){
        config.headers.Authorization = `Bearer ${tokenAccess}`

    }
        return config
})

export {
    axiosService
}