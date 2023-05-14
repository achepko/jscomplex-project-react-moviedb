import React from 'react';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MainPage, MovieDetailsPage, MovieListPage, SearchPage} from "./pages";
import './styles/App.css'

function App() {
  return (
    <Routes>
       <Route path={''} element={<MainLayout/>}>
           <Route index element={<MainPage/>}/>
           <Route path={'discover/movie'} element={<MovieListPage/>}/>
           <Route path={'discover/movie/:id'} element={<MovieDetailsPage/>}/>
           <Route path={'search'} element={<SearchPage/>}/>

       </Route>
    </Routes>
  );
}

export default App;
