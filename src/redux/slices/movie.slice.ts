import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovieDetails, IMovieInitialState, IMoviesService} from "../../interfaces";
import {movieService} from "../../services";

const initialMovieDetails = {
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
    movies: [],
    currentPage: 1,
    currentQuery:'',
    total_results: 0,
    total_pages: 500,
    movieInfo: initialMovieDetails,
    topRatedMovies: [],
    loading: false,
    nowPlayingMovies: []
}


// const getMovies = createAsyncThunk<IMoviesService, {
//     currentPage: number,
//     selectedGenres: string,
//     sortedBy: string
// }>(
//     'movieSlice/getMovies',
//     async ({currentPage,selectedGenres,sortedBy},{rejectWithValue})=>{
//         try {
//             let {data} = await movieService.getMovies(currentPage,selectedGenres,sortedBy);
//             return data
//         }catch (e) {
//             const error = e as AxiosError;
//             return rejectWithValue(error.message)
//         }
//     }
// )

const getMovies = createAsyncThunk<IMoviesService,number>(
    'movieSlice/getMovies',
    async (currentPage, {rejectWithValue}) => {
        try {
            let {data} = await movieService.getAll(currentPage);
            return data
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.message)
        }
    }
)

const getMovieById = createAsyncThunk<IMovieDetails,string>(
    'movieSlice/getMovieById',
    async (id, {rejectWithValue}) => {
        try {
            let {data} = await movieService.getMovieById(id);
            return data

        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.message)
        }
    }
)

const getTopRatedMovies = createAsyncThunk<IMoviesService, number>(
    'movieSlice/getPopularMovies',
    async (currentPage, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getTopRatedMovies(currentPage);
            return data
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.message)
        }
    }
)

const getNowPlayingMovies = createAsyncThunk<IMoviesService, void>(
    'movieSlice/getTopRatedMovies',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getTopRatedMovies();
            return data
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.message)
        }
    }
)

const searchMovies = createAsyncThunk<IMoviesService, [query:string,currentPage:number]>(
    'movieSlice/searchMovies',
    async ([query,currentPage], {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovies(query,currentPage);
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
    reducers: {
        changePage:(state, action)=>{
            state.currentPage = action.payload
        },
        setCurrentQuery:(state, action)=>{
            state.currentQuery = action.payload
        },
        resetPage:(state)=>{
            state.currentPage=1
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results
                state.total_pages = action.payload.total_pages <= 500 ? action.payload.total_pages : 500;
                state.currentPage = action.payload.page
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.movieInfo = action.payload
            })
            .addCase(getTopRatedMovies.fulfilled,(state, action)=>{
                state.topRatedMovies = action.payload.results
                state.total_pages = action.payload.total_pages <= 500 ? action.payload.total_pages : 500;
                state.currentPage = action.payload.page
            })
            .addCase(searchMovies.fulfilled,(state, action)=>{
                state.movies = action.payload.results
                state.total_pages = action.payload.total_pages <= 500 ? action.payload.total_pages : 500;
                state.currentPage = action.payload.page
            })
            .addCase(getNowPlayingMovies.fulfilled,(state, action)=>{
                state.topRatedMovies = action.payload.results
                // state.total_pages = action.payload.total_pages <= 500 ? action.payload.total_pages : 500;
                // state.currentPage = action.payload.page
            })
            .addMatcher(isFulfilled(), state => {
                state.loading = false
            })
            .addMatcher(isPending(),state => {
                state.loading = true
            })

});

let {actions, reducer: movieReducer} = slice;


const movieActions = {
    ...actions,
    getMovies,
    getMovieById,
    getTopRatedMovies,
    searchMovies,
    getNowPlayingMovies
}

export {
    movieActions,
    movieReducer,
}

