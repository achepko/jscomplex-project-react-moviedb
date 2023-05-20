import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenreInitialState, IGenresService} from "../../interfaces";
import {genreService} from "../../services";


const initialState: IGenreInitialState = {
    genres: [],
    selectedGenres: []
}


const getGenres = createAsyncThunk<IGenresService, void>(
    'genreSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();
            return data
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.message)
        }
    }
)

const slice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        selectGenre: (state, action) => {
            const genre = action.payload;
            state.selectedGenres.push(genre);
        },
        deselectGenre: (state, action) => {
            const genre = action.payload;
            state.selectedGenres = state.selectedGenres.filter(selectedGenre => selectedGenre !== genre);
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres
            })


});


const {actions, reducer: genreReducer} = slice;


const genreActions = {
    ...actions,
    getGenres

}

export {
    genreActions,
    genreReducer
}