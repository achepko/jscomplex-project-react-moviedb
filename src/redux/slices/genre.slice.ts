import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {IGenreInitialState, IGenresService} from "../../interfaces";
import {genreService} from "../../services/genre.service";
import {AxiosError} from "axios";


const initialState:IGenreInitialState = {
    genres:[]
}


const getGenres = createAsyncThunk<IGenresService,void>(
    'genreSlice/getGenres',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await genreService.getAll();
            return data
        }catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.message)
        }
    }
)

const slice = createSlice({
    name:'genreSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getGenres.fulfilled,(state, action)=>{
                state.genres = action.payload.genres
            })

});


const {actions,reducer:genreReducer} = slice;


const genreActions = {
    ...actions,
    getGenres

}

export {
    genreActions,
    genreReducer
}