export interface IMovie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    name: string,
    id: number,
    media_type: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string |null,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}


export interface IGenres {
    id: number,
    name: string,
}

export interface IProduction_country {
    iso_3166_1: string,
    name: string,
}

export interface IProduction_company {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string,
}

export interface ISpoken_languages {
    english_name: string,
    iso_639_1: string,
    name: string,
}
export interface IMovieDetails {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: null,
    budget: number,
    genres: IGenres[],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: IProduction_company[],
    production_countries: IProduction_country[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: ISpoken_languages[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

export interface IMoviesService {
    page: number,
    results: IMovie[],
    total_results: number,
    total_pages: number
}

export interface IMovieInitialState {
    movies: IMovie[],
    similarMovies:IMovie[],
    key:string
    topRatedMovies: IMovie[],
    nowPlayingMovies: IMovie[],
    total_results: number,
    total_pages: number,
    currentPage: number,
    currentQuery:string,
    loading:boolean,
    movieInfo: IMovieDetails
}