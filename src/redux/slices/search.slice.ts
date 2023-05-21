import {createSlice} from "@reduxjs/toolkit";

import {ISearchInitialState} from "../../interfaces/search.interface";


const initialState: ISearchInitialState = {
    searchedMovies: [],
    with_genres: 'allSelected',
    sort_by: 'popularity.desc'
}

const slice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            if (action.payload.with_genres) {
                state.with_genres = action.payload.with_genres.join(',')
            }
            if (action.payload.sort_by) {
                state.sort_by = action.payload.sort_by
            }
        },
        resetFilter: (state) => {
            state.with_genres = 'allSelected'
            state.sort_by = 'popularity.desc'
        },
        setSelectedGenres:(state, action)=>{
            if (!state.with_genres.includes(action.payload)){
                state.with_genres = action.payload
            }
        }
    },
    extraReducers: builder => builder
});

const {actions, reducer: searchReducer} = slice;


const searchActions = {
    ...actions
}


export {
    searchActions,
    searchReducer
}