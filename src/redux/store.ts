import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer,themeReducer} from "./slices";


const rootReducer = combineReducers({
    movies:movieReducer,
    theme:themeReducer,
    genres:genreReducer
});

let setupStore =()=> configureStore({
    reducer:rootReducer
});

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export {
    setupStore
}

export type {
    RootState,
    AppStore,
    AppDispatch
}


