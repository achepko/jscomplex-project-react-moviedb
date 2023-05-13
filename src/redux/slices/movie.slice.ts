import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovieInitialState, IMoviesService} from "../../interfaces";
import {movieService} from "../../services";


const initialState:IMovieInitialState = {
    trendingMovies: [],
    nowPlayingMovies: [],
    movies: [],
    page: 1,
    currentPage: 1,
    total_results: 0,
    total_pages: 200,
    loading:false
}


const getAll = createAsyncThunk<IMoviesService, {
    currentPage: number,
    selectedGenres: string,
    sortBy: string
}>(
    'movieSlice/getAll',
    async ({currentPage,selectedGenres,sortBy},{rejectWithValue})=>{
        try {
            let {data} = await movieService.getAll(currentPage,selectedGenres,sortBy);
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
                state.total_pages = action.payload.total_pages <= 200 ? action.payload.total_pages : 200;
                state.loading = false
            })

});

let {actions,reducer:movieReducer} = slice;



const movieActions ={
    ...actions,
    getAll
}

export {
    movieActions,
    movieReducer,

}

