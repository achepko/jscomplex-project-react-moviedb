import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovieDetails, IMovieInitialState, IMoviesService} from "../../interfaces";
import {movieService} from "../../services";
import {IVideosService} from "../../interfaces/video.interface";

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
    similarMovies: [],
    currentPage: 1,
    currentQuery: '',
    total_results: 0,
    total_pages: 500,
    movieInfo: initialMovieDetails,
    key:'',
    topRatedMovies: [],
    loading: false,
    nowPlayingMovies: []
}

const getMovies = createAsyncThunk<IMoviesService,
    { page: number, sort_by: string, with_genres: string }>
('movieSlice/getMovies',
    async ({page, sort_by, with_genres}, {rejectWithValue}) => {
        try {
            let {data} = await movieService.getAll(page, sort_by, with_genres);
            return data
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.message)
        }
    }
)

const getMovieById = createAsyncThunk<IMovieDetails, string>(
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

const getVideoById = createAsyncThunk<IVideosService, number>(
    'movieSlice/getVideo',
    async (id,{rejectWithValue})=>{
        try {
            const {data} = await movieService.getVideoById(id);
            return data;
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    });

const getSimilarMoviesById = createAsyncThunk<IMoviesService, number>(
    'movieSlice/getSimilarMoviesById',
    async (id, {rejectWithValue}) => {
        try {
            let {data} = await movieService.getSimilarMoviesById(id);
            return data

        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.message)
        }
    }
)

const getMoviesByGenreId = createAsyncThunk<IMoviesService, number>(
    'movieSlice/getMoviesByGenreId',
    async (id, {rejectWithValue}) => {
        try {
            let {data} = await movieService.getMoviesByGenreId(id);
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

const searchMovies = createAsyncThunk<IMoviesService, [query: string, currentPage: number]>(
    'movieSlice/searchMovies',
    async ([query, currentPage], {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovies(query, currentPage);
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
        changePage: (state, action) => {
            state.currentPage = action.payload
        },
        setCurrentQuery: (state, action) => {
            state.currentQuery = action.payload
        },
        resetPage: (state) => {
            state.currentPage = 1
        },
        resetKey:(state)=>{
            state.key = ''
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
            .addCase(getVideoById.fulfilled,(state, action)=>{
                const videoTrailer = action.payload.results.find((item) => item.type === 'Trailer');
                state.key = videoTrailer!.key
            })
            .addCase(getSimilarMoviesById.fulfilled,(state, action)=>{
                state.similarMovies = action.payload.results
            })
            .addCase(getMoviesByGenreId.fulfilled,(state, action)=>{
                state.movies = action.payload.results
            })
            .addCase(getTopRatedMovies.fulfilled, (state, action) => {
                state.topRatedMovies = action.payload.results
                state.total_pages = action.payload.total_pages <= 500 ? action.payload.total_pages : 500;
                state.currentPage = action.payload.page
            })
            .addCase(searchMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results
                state.total_pages = action.payload.total_pages <= 500 ? action.payload.total_pages : 500;
                state.currentPage = action.payload.page
            })
            .addCase(getNowPlayingMovies.fulfilled, (state, action) => {
                state.topRatedMovies = action.payload.results
            })
            .addMatcher(isFulfilled(), state => {
                state.loading = false
            })
            .addMatcher(isPending(), state => {
                state.loading = true
            })

});

let {actions, reducer: movieReducer} = slice;


const movieActions = {
    ...actions,
    getMovies,
    getMovieById,
    getVideoById,
    getTopRatedMovies,
    searchMovies,
    getNowPlayingMovies,
    getSimilarMoviesById,
    getMoviesByGenreId
}

export {
    movieActions,
    movieReducer,
}

