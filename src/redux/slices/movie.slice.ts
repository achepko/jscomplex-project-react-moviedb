import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovieInfo, IMovieInitialState, IMoviesService} from "../../interfaces";
import {movieService} from "../../services";


const initialState:IMovieInitialState = {
    trendingMovies: [],
    nowPlayingMovies: [],
    movies: [],
    page: 1,
    currentPage: 1,
    total_results: 0,
    total_pages: 500,
    loading:false,
    movieInfo:{}
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
    async ({currentPage},{rejectWithValue})=>{
        try {
            let {data} = await movieService.getAll(currentPage);
            return data
        }catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.message)
        }
    }
)

const getMovieById = createAsyncThunk<IMovieInfo,{id:string}>(
    'movieSlice/getMovieById',
    async ({id},{rejectWithValue})=>{
        try {
            let {data} = await movieService.getMovieById(id);
            return data
        }catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.message)
        }
    }
)

let slice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{

    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled,(state, action)=>{
                state.movies = action.payload.results
                state.total_pages = action.payload.total_pages <= 500 ? action.payload.total_pages : 500;
            })
            .addCase(getMovieById.fulfilled,(state, action)=>{
                state.movieInfo=action.payload
            })
            .addMatcher(isFulfilled(),state => {
                state.loading = false
            })

});

let {actions,reducer:movieReducer} = slice;



const movieActions ={
    ...actions,
    getAll,
    getMovieById
}

export {
    movieActions,
    movieReducer,

}

