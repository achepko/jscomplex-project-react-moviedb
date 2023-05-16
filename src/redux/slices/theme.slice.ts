import {createSlice} from "@reduxjs/toolkit";


interface ThemeInitState{
    darkMode:boolean
}

const initialState:ThemeInitState={
    darkMode:false
};

const slice = createSlice({
    name:'themeSlice',
    initialState,
    reducers:{
        switcherTheme:(state)=>{
            const root = document.documentElement;
            state.darkMode = !state.darkMode
            root.style.setProperty(
                '--background-color',
                state.darkMode ? '#8e9185' : 'white');
        }
    }
});

const {actions,reducer:themeReducer} = slice;


const themeActions={
    ...actions
}

export {
    themeActions,
    themeReducer
}