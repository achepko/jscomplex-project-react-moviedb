import {IGenre} from "./genre.interface";
import {IMovie} from "./movie.interface";


export interface ISearch {
    id: number,
    poster_path: string,
    name?: string,
    title?: string
    release_date?: string,
    first_air_date?: string,
}


export interface ISearchInitialState {
    searchedMovies:IMovie[],
    with_genres:string,
    sort_by: 'popularity.asc'|'popularity.desc'|
        'vote_average.asc' | 'vote_average.desc' |
        'primary_release_date.asc' | 'primary_release_date.desc'
}

export  interface SearchFormData {
    query: string;
    with_genres:string[],
    sort_by: 'popularity.asc'|'popularity.desc'|
        'vote_average.asc' | 'vote_average.desc' |
        'primary_release_date.asc' | 'primary_release_date.desc'
}
