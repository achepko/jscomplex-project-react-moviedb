import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovieDetails, IMovieInitialState, IMoviesService} from "../../interfaces";
import {movieService} from "../../services";

const initialMovieDetials = {
    adult: false,
    backdrop_path: '',
    belongs_to_collection: null,
    budget: 0,
    genres: [],
    homepage: '',
    id: 0,
    imdb_id: '',
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    production_companies: [],
    production_countries: [],
    release_date: '',
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: '',
    tagline: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
}

const initialState: IMovieInitialState = {
    trendingMovies: [],
    nowPlayingMovies: [],
    movies: [],
    page: 1,
    currentPage: 1,
    total_results: 0,
    total_pages: 500,
    loading: false,
    movieInfo: initialMovieDetials
}


// const getAll = createAsyncThunk<IMoviesService, {
//     currentPage: number,
//     selectedGenres: string,
//     sortedBy: string
// }>(
//     'movieSlice/getAll',
//     async ({currentPage,selectedGenres,sortedBy},{rejectWithValue})=>{
//         try {
//             let {data} = await movieService.getAll(currentPage,selectedGenres,sortedBy);
//             return data
//         }catch (e) {
//             const error = e as AxiosError;
//             return rejectWithValue(error.message)
//         }
//     }
// )

const getAll = createAsyncThunk<IMoviesService, {
    currentPage: number,
}>(
    'movieSlice/getAll',
    async ({currentPage}, {rejectWithValue}) => {
        try {
            let {data} = await movieService.getAll(currentPage);
            return data
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.message)
        }
    }
)

const getMovieById = createAsyncThunk<IMovieDetails, { id: string }>(
    'movieSlice/getMovieById',
    async ({id}, {rejectWithValue}) => {
        try {
            let {data} = await movieService.getMovieById(id);
            return data

        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.message)
        }
    }
)

let slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results
                state.total_pages = action.payload.total_pages <= 500 ? action.payload.total_pages : 500;
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.movieInfo = action.payload
            })
            .addMatcher(isFulfilled(), state => {
                state.loading = false
            })

});

let {actions, reducer: movieReducer} = slice;


const movieActions = {
    ...actions,
    getAll,
    getMovieById
}

export {
    movieActions,
    movieReducer,

}

